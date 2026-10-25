window.PROBLEM = {
 "id": "1262",
 "title": "Greatest Sum Divisible by Three",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Return the maximum possible sum of a subset of nums that is divisible by three. Example: [3,6,5,1,8] → 18.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Total minus smallest removals",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxSumDivThree(self, nums):\n        total = sum(nums)\n        r1 = sorted(x for x in nums if x % 3 == 1)\n        r2 = sorted(x for x in nums if x % 3 == 2)\n        if total % 3 == 0:\n            return total\n        INF = float('inf')\n        if total % 3 == 1:\n            cost = min(r1[0] if r1 else INF, r2[0] + r2[1] if len(r2) > 1 else INF)\n        else:\n            cost = min(r2[0] if r2 else INF, r1[0] + r1[1] if len(r1) > 1 else INF)\n        return total - cost if cost < INF else 0",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Take everything; if the sum leaves remainder r remove either the smallest number with remainder r or the two smallest with the other remainder.",
   "frames": [],
   "alt": true
  }
 ]
};
