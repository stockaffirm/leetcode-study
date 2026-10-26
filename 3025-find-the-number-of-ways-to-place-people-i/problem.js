window.PROBLEM = {
 "id": "3025",
 "title": "Find the Number of Ways to Place People I",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[[6,2],[4,4],[2,6]]: (2,6)–(4,4) and (4,4)–(6,2) work; (2,6)–(6,2) is blocked by (4,4) → 2.",
 "idea": "A pair (A, B) works if A is on the upper-left of B (x_A ≤ x_B and y_A ≥ y_B) and no other point lies in the rectangle they span. Sort points by x ascending then y descending. For each A, scan the points after it: B is valid only if its y is at most A's y and strictly above every y seen so far among valid candidates (otherwise an earlier point blocks it).",
 "input": "points = [[6,2],[4,4],[2,6]]",
 "output": "2",
 "notes": [],
 "best": "A pair (A, B) works if A is on the upper-left of B (x_A ≤ x_B and y_A ≥ y_B) and no other point lies in the rectangle they span. Sort points by x ascending then y descending. For each A, scan the points after it: B is valid only if its y is at most A's y and strictly above every y seen so far among valid candidates (otherwise an earlier point blocks it).",
 "variants": [
  {
   "name": "Sort, then scan for the nearest blocking point",
   "code": "class Solution:\n    def numberOfPairs(self, points):\n        points.sort(key=lambda p: (p[0], -p[1]))\n        n = len(points)\n        count = 0\n        for i in range(n):\n            top = float('-inf')\n            for j in range(i + 1, n):\n                if points[j][1] <= points[i][1] and points[j][1] > top:\n                    count += 1\n                    top = points[j][1]\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "A pair (A, B) works if A is on the upper-left of B (x_A ≤ x_B and y_A ≥ y_B) and no other point lies in the rectangle they span. Sort points by x ascending then y descending. For each A, scan the points after it: B is valid only if its y is at most A's y and strictly above every y seen so far among valid candidates (otherwise an earlier point blocks it).",
   "frames": []
  }
 ]
};
