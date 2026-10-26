window.PROBLEM = {
 "id": "1027",
 "title": "Longest Arithmetic Subsequence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[9,4,7,2,10] → 4,7,10 with difference 3 → length 3.",
 "idea": "For each pair j < i with difference d = nums[i] − nums[j], dp[i][d] = dp[j][d] + 1 (a sequence of two elements has length 2). Keep a dictionary of differences per index and track the maximum.",
 "input": "nums = [9,4,7,2,10]",
 "output": "3",
 "notes": [],
 "best": "For each pair j < i with difference d = nums[i] − nums[j], dp[i][d] = dp[j][d] + 1 (a sequence of two elements has length 2). Keep a dictionary of differences per index and track the maximum.",
 "variants": [
  {
   "name": "dp[i][difference] = longest ending at i",
   "code": "class Solution:\n    def longestArithSeqLength(self, nums):\n        dp = [defaultdict(lambda: 1) for _ in nums]\n        best = 2\n        for i in range(len(nums)):\n            for j in range(i):\n                d = nums[i] - nums[j]\n                dp[i][d] = dp[j][d] + 1\n                best = max(best, dp[i][d])\n        return best",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "For each pair j < i with difference d = nums[i] − nums[j], dp[i][d] = dp[j][d] + 1 (a sequence of two elements has length 2). Keep a dictionary of differences per index and track the maximum.",
   "frames": []
  }
 ]
};
