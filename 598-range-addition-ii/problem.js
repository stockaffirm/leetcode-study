window.PROBLEM = {
 "id": "598",
 "title": "Range Addition II",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
 "why": "3 × 3, ops [[2,2],[3,3]] → the cell block 2 × 2 is added to most → 4.",
 "idea": "Each operation adds 1 to the top-left a × b block. The cells incremented by every operation form the overlap, a rectangle of size min(a) × min(b); its area is the count of maximum values (the whole matrix if there are no operations).",
 "input": "m = 3, n = 3, ops = [[2,2],[3,3]]",
 "output": "4",
 "notes": [],
 "best": "Each operation adds 1 to the top-left a × b block. The cells incremented by every operation form the overlap, a rectangle of size min(a) × min(b); its area is the count of maximum values (the whole matrix if there are no operations).",
 "variants": [
  {
   "name": "The top-left overlap of all operations",
   "code": "class Solution:\n    def maxCount(self, m, n, ops):\n        for a, b in ops:\n            m, n = min(m, a), min(n, b)\n        return m * n",
   "time": "O(k)",
   "space": "O(1)",
   "explain": "Each operation adds 1 to the top-left a × b block. The cells incremented by every operation form the overlap, a rectangle of size min(a) × min(b); its area is the count of maximum values (the whole matrix if there are no operations).",
   "frames": []
  }
 ]
};
