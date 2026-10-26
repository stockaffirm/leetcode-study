window.PROBLEM = {
 "id": "1262",
 "title": "Greatest Sum Divisible by Three",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[3,6,5,1,8] → 3+6+1+8 = 18.",
 "idea": "Keep dp[r], the largest sum seen so far with remainder r when divided by 3. For each number, try adding it to every existing remainder class and update the class of the new remainder.",
 "input": "nums = [3,6,5,1,8]",
 "output": "18",
 "notes": [],
 "best": "Keep dp[r], the largest sum seen so far with remainder r when divided by 3. For each number, try adding it to every existing remainder class and update the class of the new remainder.",
 "variants": [
  {
   "name": "Best sum for each remainder",
   "code": "class Solution:\n    def maxSumDivThree(self, nums):\n        dp = [0, float('-inf'), float('-inf')]\n        for x in nums:\n            new = dp[:]\n            for r in range(3):\n                new[(r + x) % 3] = max(new[(r + x) % 3], dp[r] + x)\n            dp = new\n        return dp[0]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep dp[r], the largest sum seen so far with remainder r when divided by 3. For each number, try adding it to every existing remainder class and update the class of the new remainder.",
   "frames": []
  }
 ]
};
