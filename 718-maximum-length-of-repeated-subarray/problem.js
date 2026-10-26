window.PROBLEM = {
 "id": "718",
 "title": "Maximum Length of Repeated Subarray",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Longest run of numbers (consecutive) that appears in BOTH lists.",
 "idea": "dp[i][j] = length of the longest common run starting at i in the first list and j in the second: if the numbers match it is 1 + dp[i+1][j+1], else 0. The answer is the largest cell.",
 "input": "[1,2,3,2,1], [3,2,1,4,7]",
 "output": "3",
 "notes": [],
 "best": "dp[i][j] = length of the longest common run starting at i in the first list and j in the second: if the numbers match it is 1 + dp[i+1][j+1], else 0. The answer is the largest cell.",
 "variants": [
  {
   "name": "DP on common suffix/prefix lengths",
   "code": "class Solution:\n    def findLength(self, nums1, nums2):\n        m, n = len(nums1), len(nums2)\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n        best = 0\n        for i in range(m - 1, -1, -1):\n            for j in range(n - 1, -1, -1):\n                if nums1[i] == nums2[j]:\n                    dp[i][j] = dp[i + 1][j + 1] + 1\n                    best = max(best, dp[i][j])\n        return best",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "dp[i][j] = length of the longest common run starting at i in the first list and j in the second: if the numbers match it is 1 + dp[i+1][j+1], else 0. The answer is the largest cell.",
   "frames": []
  }
 ]
};
