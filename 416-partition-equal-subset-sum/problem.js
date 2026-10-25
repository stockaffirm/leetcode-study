window.PROBLEM = {
 "id": "416",
 "title": "Partition Equal Subset Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Can the list of positive integers be split into two groups (every number in exactly one) with equal sums? Example: [1,5,11,5] → True ({11} and {1,5,5}); [1,2,3,5] → False.",
 "why": "Can the numbers be split into two groups with equal sums?",
 "idea": "The total must be even; then ask if some subset sums to half. Keep all reachable sums as bits of one big integer and shift-or for each number.",
 "input": "[1,5,11,5]",
 "output": "True",
 "notes": [],
 "best": "The total must be even; then ask if some subset sums to half. Keep all reachable sums as bits of one big integer and shift-or for each number.",
 "variants": [
  {
   "name": "Bitset subset sums",
   "code": "class Solution:\n    def canPartition(self, nums):\n        total = sum(nums)\n        if total % 2: return False\n        bits = 1\n        for x in nums: bits |= bits << x\n        return bits >> (total // 2) & 1 == 1",
   "time": "O(n·S/64)",
   "space": "O(S)",
   "explain": "The total must be even; then ask if some subset sums to half. Keep all reachable sums as bits of one big integer and shift-or for each number.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Boolean DP table",
   "tag": "Alternative",
   "code": "class Solution:\n    def canPartition(self, nums):\n        total = sum(nums)\n        if total % 2: return False\n        half = total // 2\n        dp = [False] * (half + 1)\n        dp[0] = True\n        for x in nums:\n            for s in range(half, x - 1, -1):\n                if dp[s - x]: dp[s] = True\n        return dp[half]",
   "time": "O(n·S)",
   "space": "O(S)",
   "explain": "dp[s] = can a subset sum to s.",
   "frames": [],
   "alt": true
  }
 ]
};
