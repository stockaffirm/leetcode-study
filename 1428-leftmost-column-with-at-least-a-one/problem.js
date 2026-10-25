window.PROBLEM = {
 "id": "1428",
 "title": "Leftmost Column with at Least a One",
 "level": "Medium",
 "topic": "Matrix",
 "question": "A matrix of 0s and 1s has every row sorted ascending. You may only call BinaryMatrix.get(row, col) and dimensions(). Return the index of the leftmost column that contains a 1, or −1 if there is none, using few calls. Example: [[0,0],[0,1]] → 1.",
 "why": "A matrix of 0s and 1s whose rows are sorted. You can only read it through get(row, col) and dimensions(). Find the leftmost column that contains a 1.",
 "idea": "Start at the top-right. If the cell is 1, step left (a 1 may exist further left); if 0, step down. The last column where you saw a 1 is the answer.",
 "input": "[[0,0],[0,1]]",
 "output": "1",
 "notes": [],
 "best": "Start at the top-right. If the cell is 1, step left (a 1 may exist further left); if 0, step down. The last column where you saw a 1 is the answer.",
 "variants": [
  {
   "name": "Staircase walk from the top-right",
   "code": "class Solution:\n    def leftMostColumnWithOne(self, binaryMatrix):\n        rows, cols = binaryMatrix.dimensions()\n        r, c, ans = 0, cols - 1, -1\n        while r < rows and c >= 0:\n            if binaryMatrix.get(r, c) == 1:\n                ans = c\n                c -= 1\n            else: r += 1\n        return ans",
   "time": "O(rows + cols)",
   "space": "O(1)",
   "explain": "Start at the top-right. If the cell is 1, step left (a 1 may exist further left); if 0, step down. The last column where you saw a 1 is the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search in every row",
   "tag": "Alternative",
   "code": "class Solution:\n    def leftMostColumnWithOne(self, binaryMatrix):\n        rows, cols = binaryMatrix.dimensions()\n        best = cols\n        for r in range(rows):\n            lo, hi = 0, best\n            while lo < hi:\n                mid = (lo + hi) // 2\n                if binaryMatrix.get(r, mid) == 1: hi = mid\n                else: lo = mid + 1\n            best = min(best, lo)\n        return best if best < cols else -1",
   "time": "O(rows·log cols)",
   "space": "O(1)",
   "explain": "In each sorted row binary search the first 1 and keep the leftmost.",
   "frames": [],
   "alt": true
  }
 ]
};
