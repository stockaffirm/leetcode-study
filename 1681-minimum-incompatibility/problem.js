window.PROBLEM = {
 "id": "1681",
 "title": "Minimum Incompatibility",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "nums [1,2,1,4], k=2 → {1,2} and {1,4} → 1 + 3 = 4.",
 "idea": "Split into k groups of n/k distinct numbers; a group's incompatibility is max − min. Precompute the cost of every subset of size n/k with distinct values. dp[mask] = minimum total cost to assign the numbers in mask to complete groups: take the lowest unused element and combine it with each cost-valid subset of the remaining ones.",
 "input": "nums = [1,2,1,4], k = 2",
 "output": "4",
 "notes": [],
 "best": "Split into k groups of n/k distinct numbers; a group's incompatibility is max − min. Precompute the cost of every subset of size n/k with distinct values. dp[mask] = minimum total cost to assign the numbers in mask to complete groups: take the lowest unused element and combine it with each cost-valid subset of the remaining ones.",
 "variants": [
  {
   "name": "Bitmask DP over subsets of size n / k",
   "code": "class Solution:\n    def minimumIncompatibility(self, nums, k):\n        n = len(nums)\n        size = n // k\n        INF = float('inf')\n        cost = {}\n        for mask in range(1 << n):\n            if bin(mask).count('1') != size:\n                continue\n            vals = [nums[i] for i in range(n) if mask >> i & 1]\n            if len(set(vals)) == size:\n                cost[mask] = max(vals) - min(vals)\n        dp = [INF] * (1 << n)\n        dp[0] = 0\n        for mask in range(1 << n):\n            if dp[mask] == INF or bin(mask).count('1') % size:\n                continue\n            free = [i for i in range(n) if not mask >> i & 1]\n            if not free:\n                continue\n            first = free[0]\n            rest = [i for i in free[1:]]\n            for sub, c in cost.items():\n                if sub >> first & 1 and not sub & mask:\n                    dp[mask | sub] = min(dp[mask | sub], dp[mask] + c)\n        return dp[-1] if dp[-1] < INF else -1",
   "time": "O(3ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Split into k groups of n/k distinct numbers; a group's incompatibility is max − min. Precompute the cost of every subset of size n/k with distinct values. dp[mask] = minimum total cost to assign the numbers in mask to complete groups: take the lowest unused element and combine it with each cost-valid subset of the remaining ones.",
   "frames": []
  }
 ]
};
