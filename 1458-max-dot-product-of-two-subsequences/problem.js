window.PROBLEM = {
 "id": "1458",
 "title": "Max Dot Product of Two Subsequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[2,1,-2,5], [3,0,-6] → pick (2,-2) with (3,-6): 6 + 12 = 18.",
 "idea": "Choose non-empty subsequences of equal length. dp[i][j] is the best result using the first i of nums1 and j of nums2: skip nums1[i−1], skip nums2[j−1], take the pair alone, or take the pair and add dp[i−1][j−1] if that is positive. Start from −infinity.",
 "input": "nums1 = [2,1,-2,5], nums2 = [3,0,-6]",
 "output": "18",
 "notes": [],
 "best": "Choose non-empty subsequences of equal length. dp[i][j] is the best result using the first i of nums1 and j of nums2: skip nums1[i−1], skip nums2[j−1], take the pair alone, or take the pair and add dp[i−1][j−1] if that is positive. Start from −infinity.",
 "variants": [
  {
   "name": "dp[i][j] = best dot product ending within the first i, j elements",
   "code": "class Solution:\n    def maxDotProduct(self, nums1, nums2):\n        n, m = len(nums1), len(nums2)\n        NEG = float('-inf')\n        dp = [[NEG] * (m + 1) for _ in range(n + 1)]\n        for i in range(1, n + 1):\n            for j in range(1, m + 1):\n                prod = nums1[i - 1] * nums2[j - 1]\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1], prod, prod + max(dp[i - 1][j - 1], 0))\n        return dp[n][m]",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "Choose non-empty subsequences of equal length. dp[i][j] is the best result using the first i of nums1 and j of nums2: skip nums1[i−1], skip nums2[j−1], take the pair alone, or take the pair and add dp[i−1][j−1] if that is positive. Start from −infinity.",
   "frames": []
  }
 ]
};
