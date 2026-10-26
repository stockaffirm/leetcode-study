window.PROBLEM = {
 "id": "494",
 "title": "Target Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You are given a list of non-negative numbers nums and a number target. Put a '+' or '−' sign in front of every number, add everything up, and count in how many ways the total equals target. Example: [1,1,1,1,1], target 3 → choose one of the five 1s to carry the minus: −1+1+1+1+1 = 3 and so on → 5 ways.",
 "why": "Put a + or − in front of every number so the total equals the target. How many sign choices work? [1,1,1,1,1] and target 3 → 5.",
 "idea": "Process numbers one by one, keeping a map: 'running total → number of ways to reach it'. Each number splits every total into total+x and total−x.",
 "input": "[1, 1, 1, 1, 1], target=3",
 "output": "5",
 "notes": [],
 "best": "Process numbers one by one, keeping a map: 'running total → number of ways to reach it'. Each number splits every total into total+x and total−x.",
 "variants": [
  {
   "name": "Count ways per running total",
   "code": "class Solution:\n    def findTargetSumWays(self, nums, target):\n        ways = {0: 1}\n        for x in nums:\n            nxt = defaultdict(int)\n            for s, c in ways.items():\n                nxt[s + x] += c\n                nxt[s - x] += c\n            ways = nxt\n        return ways.get(target, 0)",
   "time": "O(n · total)",
   "space": "O(total)",
   "explain": "Process numbers one by one, keeping a map: 'running total → number of ways to reach it'. Each number splits every total into total+x and total−x.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Turn it into a subset sum",
   "tag": "Alternative",
   "code": "class Solution:\n    def findTargetSumWays(self, nums, target):\n        total = sum(nums)\n        if (total + target) % 2 or abs(target) > total: return 0\n        need = (total + target) // 2\n        dp = [1] + [0] * need\n        for x in nums:\n            for s in range(need, x - 1, -1):\n                dp[s] += dp[s - x]\n        return dp[need]",
   "time": "O(n · sum)",
   "space": "O(sum)",
   "explain": "Signs split the numbers into a '+' group P and a '−' group N: P − N = target and P + N = total, so P = (total + target) / 2. Count subsets with that sum.",
   "frames": [],
   "alt": true
  }
 ]
};
