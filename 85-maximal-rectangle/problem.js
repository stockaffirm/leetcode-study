window.PROBLEM = {
 "id": "85",
 "title": "Maximal Rectangle",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "A grid contains only the characters '0' and '1'. Return the area of the largest rectangle that contains only 1s. Example: [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']] → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Height / left / right DP per row",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximalRectangle(self, matrix):\n        if not matrix:\n            return 0\n        n = len(matrix[0])\n        h, l, r = [0] * n, [0] * n, [n] * n\n        best = 0\n        for row in matrix:\n            cur_l, cur_r = 0, n\n            for j in range(n):\n                h[j] = h[j] + 1 if row[j] == \"1\" else 0\n            for j in range(n):\n                if row[j] == \"1\":\n                    l[j] = max(l[j], cur_l)\n                else:\n                    l[j] = 0\n                    cur_l = j + 1\n            for j in range(n - 1, -1, -1):\n                if row[j] == \"1\":\n                    r[j] = min(r[j], cur_r)\n                else:\n                    r[j] = n\n                    cur_r = j\n            for j in range(n):\n                best = max(best, h[j] * (r[j] - l[j]))\n        return best",
   "time": "O(m·n)",
   "space": "O(n)",
   "explain": "For every column keep its height and how far the rectangle of that height can stretch left and right.",
   "frames": [],
   "alt": true
  }
 ]
};
