window.PROBLEM = {
 "id": "494",
 "title": "Target Sum",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
