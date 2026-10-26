window.PROBLEM = {
 "id": "3160",
 "title": "Find the Number of Distinct Colors Among the Balls",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "limit 4, queries [[1,4],[2,5],[1,3],[3,4]] → [1,2,2,3].",
 "idea": "Keep a dictionary ball → colour and a counter of how many balls have each colour. For each query remove the ball's old colour (decrease its count and drop the colour at zero), set the new colour, and report the number of colours with a positive count.",
 "input": "limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]",
 "output": "[1, 2, 2, 3]",
 "notes": [],
 "best": "Keep a dictionary ball → colour and a counter of how many balls have each colour. For each query remove the ball's old colour (decrease its count and drop the colour at zero), set the new colour, and report the number of colours with a positive count.",
 "variants": [
  {
   "name": "Ball → colour map and colour counts",
   "code": "class Solution:\n    def queryResults(self, limit, queries):\n        color_of = {}\n        cnt = Counter()\n        res = []\n        for ball, c in queries:\n            if ball in color_of:\n                old = color_of[ball]\n                cnt[old] -= 1\n                if cnt[old] == 0:\n                    del cnt[old]\n            color_of[ball] = c\n            cnt[c] += 1\n            res.append(len(cnt))\n        return res",
   "time": "O(q)",
   "space": "O(q)",
   "explain": "Keep a dictionary ball → colour and a counter of how many balls have each colour. For each query remove the ball's old colour (decrease its count and drop the colour at zero), set the new colour, and report the number of colours with a positive count.",
   "frames": []
  }
 ]
};
