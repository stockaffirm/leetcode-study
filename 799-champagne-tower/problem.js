window.PROBLEM = {
 "id": "799",
 "title": "Champagne Tower",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "2 cups poured: the top cup holds 1, the overflow of 1 splits into two cups at 0.5 each → query (1,1) is 0.5.",
 "idea": "Pour into the top glass. Any amount above 1 overflows and splits equally into the two glasses below it. Simulate row by row up to the query row and return min(1, amount) for the queried glass.",
 "input": "poured = 2, query_row = 1, query_glass = 1",
 "output": "0.5",
 "notes": [],
 "best": "Pour into the top glass. Any amount above 1 overflows and splits equally into the two glasses below it. Simulate row by row up to the query row and return min(1, amount) for the queried glass.",
 "variants": [
  {
   "name": "Simulate the overflow row by row",
   "code": "class Solution:\n    def champagneTower(self, poured, query_row, query_glass):\n        row = [float(poured)]\n        for r in range(query_row):\n            nxt = [0.0] * (len(row) + 1)\n            for i, v in enumerate(row):\n                if v > 1:\n                    over = (v - 1) / 2\n                    nxt[i] += over\n                    nxt[i + 1] += over\n            row = nxt\n        return min(1.0, row[query_glass])",
   "time": "O(rows²)",
   "space": "O(rows)",
   "explain": "Pour into the top glass. Any amount above 1 overflows and splits equally into the two glasses below it. Simulate row by row up to the query row and return min(1, amount) for the queried glass.",
   "frames": []
  }
 ]
};
