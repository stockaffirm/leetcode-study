window.PROBLEM = {
 "id": "368",
 "title": "Largest Divisible Subset",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[3,4,16,8]: sorted 3, 4, 8, 16 — 4 divides 8 and 8 divides 16, so [4,8,16] is the largest group where every pair divides.",
 "idea": "Sort the numbers. If a divides b and b divides c then a divides c, so we only need chains. dp[i] is the longest chain ending at nums[i]; remember the previous index to rebuild it.",
 "input": "nums = [3,4,16,8]",
 "output": "[4,8,16]",
 "notes": [],
 "best": "Sort the numbers. If a divides b and b divides c then a divides c, so we only need chains. dp[i] is the longest chain ending at nums[i]; remember the previous index to rebuild it.",
 "variants": [
  {
   "name": "Sort + longest divisibility chain",
   "code": "class Solution:\n    def largestDivisibleSubset(self, nums):\n        nums.sort()\n        n = len(nums)\n        dp = [1] * n\n        prev = [-1] * n\n        best = 0\n        for i in range(n):\n            for j in range(i):\n                if nums[i] % nums[j] == 0 and dp[j] + 1 > dp[i]:\n                    dp[i] = dp[j] + 1\n                    prev[i] = j\n            if dp[i] > dp[best]:\n                best = i\n        res = []\n        while best != -1:\n            res.append(nums[best])\n            best = prev[best]\n        return res[::-1]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Sort the numbers. If a divides b and b divides c then a divides c, so we only need chains. dp[i] is the longest chain ending at nums[i]; remember the previous index to rebuild it.",
   "frames": []
  }
 ]
};
