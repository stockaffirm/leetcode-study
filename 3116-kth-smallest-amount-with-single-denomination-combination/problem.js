window.PROBLEM = {
 "id": "3116",
 "title": "Kth Smallest Amount With Single Denomination Combination",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "coins [3,6,9], k=3: the amounts are multiples of 3, so the third is 9.",
 "idea": "Binary search the amount x. The number of amounts ≤ x is the size of a union of multiple-sets, counted with inclusion–exclusion: for every non-empty subset of coins add or subtract floor(x / lcm(subset)) depending on the subset's parity. The answer is the smallest x with count ≥ k (at most min(coin)·k).",
 "input": "coins = [3,6,9], k = 3",
 "output": "9",
 "notes": [],
 "best": "Binary search the amount x. The number of amounts ≤ x is the size of a union of multiple-sets, counted with inclusion–exclusion: for every non-empty subset of coins add or subtract floor(x / lcm(subset)) depending on the subset's parity. The answer is the smallest x with count ≥ k (at most min(coin)·k).",
 "variants": [
  {
   "name": "Binary search on the amount + inclusion–exclusion of LCMs",
   "code": "class Solution:\n    def findKthSmallest(self, coins, k):\n        n = len(coins)\n        subsets = []\n        for mask in range(1, 1 << n):\n            l, bits = 1, 0\n            for i in range(n):\n                if mask >> i & 1:\n                    l = l * coins[i] // gcd(l, coins[i])\n                    bits += 1\n            subsets.append((l, bits))\n        def count(x):\n            return sum((1 if b % 2 else -1) * (x // l) for l, b in subsets)\n        lo, hi = 1, min(coins) * k\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if count(mid) >= k:\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(2ⁿ · log(answer))",
   "space": "O(2ⁿ)",
   "explain": "Binary search the amount x. The number of amounts ≤ x is the size of a union of multiple-sets, counted with inclusion–exclusion: for every non-empty subset of coins add or subtract floor(x / lcm(subset)) depending on the subset's parity. The answer is the smallest x with count ≥ k (at most min(coin)·k).",
   "frames": []
  }
 ]
};
