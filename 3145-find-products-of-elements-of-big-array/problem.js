window.PROBLEM = {
 "id": "3145",
 "title": "Find Products of Elements of Big Array",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "big_nums is formed by writing, for i = 1, 2, 3 …, the powers of two that add up to i (ascending) one after another: [1,2,1,2,4,1,4,2,4,…]. For each query [from, to, mod] return the product of big_nums[from..to] modulo mod. Example: [[1,3,7]] → [4].",
 "why": "big_nums starts 1,2,1,2,4,1,4,2,4,1,… so the product of positions 1…3 is 2·1·2 = 4.",
 "idea": "big_nums is the concatenation, for i = 1, 2, 3 …, of the powers of two in i's binary expansion. Every element is a power of two, so a product is 2^(sum of exponents). Let pre(k) be the sum of exponents of the first k elements: binary search the largest number m whose total set-bit count up to m is ≤ k, add the exponent sum of 1…m (counted bit by bit) and the lowest remaining set bits of m+1. The answer is 2^(pre(to+1) − pre(from)) mod m.",
 "input": "queries = [[1,3,7]]",
 "output": "[4]",
 "notes": [],
 "best": "big_nums is the concatenation, for i = 1, 2, 3 …, of the powers of two in i's binary expansion. Every element is a power of two, so a product is 2^(sum of exponents). Let pre(k) be the sum of exponents of the first k elements: binary search the largest number m whose total set-bit count up to m is ≤ k, add the exponent sum of 1…m (counted bit by bit) and the lowest remaining set bits of m+1. The answer is 2^(pre(to+1) − pre(from)) mod m.",
 "variants": [
  {
   "name": "Count set bits and exponent sums up to n",
   "code": "class Solution:\n    def findProductsOfElements(self, queries):\n        def ones(n):\n            total = 0\n            for b in range(60):\n                step = 1 << (b + 1)\n                total += (n + 1) // step * (1 << b) + max(0, (n + 1) % step - (1 << b))\n            return total\n        def exps(n):\n            total = 0\n            for b in range(60):\n                step = 1 << (b + 1)\n                total += b * ((n + 1) // step * (1 << b) + max(0, (n + 1) % step - (1 << b)))\n            return total\n        def pre(k):\n            lo, hi = 0, 1 << 50\n            while lo < hi:\n                mid = (lo + hi + 1) // 2\n                if ones(mid) <= k:\n                    lo = mid\n                else:\n                    hi = mid - 1\n            rem = k - ones(lo)\n            res = exps(lo)\n            x = lo + 1\n            for _ in range(rem):\n                low = x & -x\n                res += low.bit_length() - 1\n                x -= low\n            return res\n        return [pow(2, pre(r + 1) - pre(l), m) for l, r, m in queries]",
   "time": "O(q · log² N)",
   "space": "O(1)",
   "explain": "big_nums is the concatenation, for i = 1, 2, 3 …, of the powers of two in i's binary expansion. Every element is a power of two, so a product is 2^(sum of exponents). Let pre(k) be the sum of exponents of the first k elements: binary search the largest number m whose total set-bit count up to m is ≤ k, add the exponent sum of 1…m (counted bit by bit) and the lowest remaining set bits of m+1. The answer is 2^(pre(to+1) − pre(from)) mod m.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build big_nums explicitly",
   "tag": "Brute force",
   "code": "class Solution:\n    def findProductsOfElements(self, queries):\n        need = max(r for _, r, _ in queries) + 1\n        big = []\n        i = 1\n        while len(big) < need:\n            big.extend(1 << b for b in range(60) if (i >> b) & 1)\n            i += 1\n        res = []\n        for l, r, m in queries:\n            p = 1\n            for v in big[l:r + 1]:\n                p = p * v % m\n            res.append(p % m)\n        return res",
   "time": "O(to)",
   "space": "O(to)",
   "explain": "For small ranges create big_nums by writing out each number's powers of two and multiply the slice.",
   "frames": [],
   "alt": true
  }
 ]
};
