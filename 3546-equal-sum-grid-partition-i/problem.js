window.PROBLEM = {
 "id": "3546",
 "title": "Equal Sum Grid Partition I",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[[1,4],[2,3]] → cut between the rows: 5 and 5 → true.",
 "idea": "Compute the row sums and the column sums. A horizontal cut after row r splits the grid into two halves of sums prefix(r) and total − prefix(r); equal when prefix(r) · 2 == total. Same for vertical cuts with the column sums.",
 "input": "grid = [[1,4],[2,3]]",
 "output": "true",
 "notes": [],
 "best": "Compute the row sums and the column sums. A horizontal cut after row r splits the grid into two halves of sums prefix(r) and total − prefix(r); equal when prefix(r) · 2 == total. Same for vertical cuts with the column sums.",
 "variants": [
  {
   "name": "Row and column prefix sums",
   "code": "class Solution:\n    def canPartitionGrid(self, grid):\n        rows = [sum(r) for r in grid]\n        cols = [sum(c) for c in zip(*grid)]\n        total = sum(rows)\n        for line in (rows, cols):\n            run = 0\n            for v in line[:-1]:\n                run += v\n                if run * 2 == total:\n                    return True\n        return False",
   "time": "O(m·n)",
   "space": "O(m + n)",
   "explain": "Compute the row sums and the column sums. A horizontal cut after row r splits the grid into two halves of sums prefix(r) and total − prefix(r); equal when prefix(r) · 2 == total. Same for vertical cuts with the column sums.",
   "frames": []
  }
 ]
};
