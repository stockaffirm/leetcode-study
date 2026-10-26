window.PROBLEM = {
 "id": "85",
 "title": "Maximal Rectangle",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "The biggest all-1s rectangle in the grid has area 6 (2 rows × 3 columns).",
 "idea": "Treat each row as the bottom of a histogram where each column's height is the number of consecutive 1s above it. The largest rectangle in each histogram (Largest Rectangle in Histogram, solved with a monotonic stack) is a candidate.",
 "input": "matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
 "output": "6",
 "notes": [],
 "best": "Treat each row as the bottom of a histogram where each column's height is the number of consecutive 1s above it. The largest rectangle in each histogram (Largest Rectangle in Histogram, solved with a monotonic stack) is a candidate.",
 "variants": [
  {
   "name": "Histogram per row + monotonic stack",
   "code": "class Solution:\n    def maximalRectangle(self, matrix):\n        if not matrix:\n            return 0\n        n = len(matrix[0])\n        h = [0] * (n + 1)\n        best = 0\n        for row in matrix:\n            for j in range(n):\n                h[j] = h[j] + 1 if row[j] == \"1\" else 0\n            st = [-1]\n            for j in range(n + 1):\n                while st[-1] != -1 and h[st[-1]] >= h[j]:\n                    height = h[st.pop()]\n                    best = max(best, height * (j - st[-1] - 1))\n                st.append(j)\n        return best",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "Treat each row as the bottom of a histogram where each column's height is the number of consecutive 1s above it. The largest rectangle in each histogram (Largest Rectangle in Histogram, solved with a monotonic stack) is a candidate.",
   "frames": []
  }
 ]
};
