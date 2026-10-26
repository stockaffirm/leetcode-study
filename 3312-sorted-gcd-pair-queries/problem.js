window.PROBLEM = {
 "id": "3312",
 "title": "Sorted GCD Pair Queries",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[2,3,4] → pair gcds sorted [1,1,2] → queries 0, 2, 2 → [1,2,2].",
 "idea": "For each g, count the numbers divisible by g, c, and the pairs among them c(c−1)/2; subtract the pairs whose gcd is a larger multiple of g (go from large g to small). That gives exact[g] = number of pairs with gcd exactly g. Prefix-sum exact[1…max]; a query q is answered by the first g whose prefix exceeds q (binary search).",
 "input": "nums = [2,3,4], queries = [0,2,2]",
 "output": "[1, 2, 2]",
 "notes": [],
 "best": "For each g, count the numbers divisible by g, c, and the pairs among them c(c−1)/2; subtract the pairs whose gcd is a larger multiple of g (go from large g to small). That gives exact[g] = number of pairs with gcd exactly g. Prefix-sum exact[1…max]; a query q is answered by the first g whose prefix exceeds q (binary search).",
 "variants": [
  {
   "name": "Count pairs per gcd with a sieve, then binary search the prefix counts",
   "code": "class Solution:\n    def gcdValues(self, nums, queries):\n        m = max(nums)\n        cnt = [0] * (m + 1)\n        for x in nums:\n            cnt[x] += 1\n        exact = [0] * (m + 1)\n        for g in range(m, 0, -1):\n            c = sum(cnt[k] for k in range(g, m + 1, g))\n            exact[g] = c * (c - 1) // 2 - sum(exact[k] for k in range(2 * g, m + 1, g))\n        pref = []\n        total = 0\n        for g in range(1, m + 1):\n            total += exact[g]\n            pref.append(total)\n        return [bisect_right(pref, q) + 1 for q in queries]",
   "time": "O(M log M + q log M)",
   "space": "O(M)",
   "explain": "For each g, count the numbers divisible by g, c, and the pairs among them c(c−1)/2; subtract the pairs whose gcd is a larger multiple of g (go from large g to small). That gives exact[g] = number of pairs with gcd exactly g. Prefix-sum exact[1…max]; a query q is answered by the first g whose prefix exceeds q (binary search).",
   "frames": []
  }
 ]
};
