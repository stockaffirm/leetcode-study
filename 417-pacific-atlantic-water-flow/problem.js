window.PROBLEM = {
 "id": "417",
 "title": "Pacific Atlantic Water Flow",
 "level": "Medium",
 "topic": "Graph",
 "question": "You are given a grid of heights; heights[r][c] is the height of the land at that cell. The Pacific Ocean touches the top and left edges, and the Atlantic Ocean touches the bottom and right edges. Rain water on a cell can flow to a neighbouring cell (up, down, left or right) if that neighbour is the same height or LOWER. Return every cell from which water can flow to BOTH oceans, as [row, column] pairs. Example: for the 5 × 5 grid [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]] → [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]].",
 "why": "Water flows from a cell to neighbours that are the same height or lower. Which cells can send water to BOTH the Pacific (top/left edges) and the Atlantic (bottom/right edges)?",
 "idea": "Reverse the question: start at each ocean's edge cells and flood uphill (to neighbours that are the same height or higher). The cells reached from both oceans are the answer.",
 "input": "5×5 heights grid",
 "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
 "notes": [],
 "best": "Reverse the question: start at each ocean's edge cells and flood uphill (to neighbours that are the same height or higher). The cells reached from both oceans are the answer.",
 "variants": [
  {
   "name": "Flood uphill from each ocean",
   "code": "class Solution:\n    def pacificAtlantic(self, heights):\n        m, n = len(heights), len(heights[0])\n        def flood(starts):\n            seen = set(starts)\n            st = list(starts)\n            while st:\n                r, c = st.pop()\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = r + dr, c + dc\n                    if 0 <= a < m and 0 <= b < n and (a, b) not in seen and heights[a][b] >= heights[r][c]:\n                        seen.add((a, b))\n                        st.append((a, b))\n            return seen\n        pac = flood([(0, j) for j in range(n)] + [(i, 0) for i in range(1, m)])\n        atl = flood([(m - 1, j) for j in range(n)] + [(i, n - 1) for i in range(m - 1)])\n        return sorted([list(p) for p in pac & atl])",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Reverse the question: start at each ocean's edge cells and flood uphill (to neighbours that are the same height or higher). The cells reached from both oceans are the answer.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS from every cell",
   "tag": "Brute force",
   "code": "class Solution:\n    def pacificAtlantic(self, heights):\n        m, n = len(heights), len(heights[0])\n        def reach(r, c):\n            seen, st = {(r, c)}, [(r, c)]\n            pac = atl = False\n            while st:\n                x, y = st.pop()\n                if x == 0 or y == 0: pac = True\n                if x == m - 1 or y == n - 1: atl = True\n                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = x + dx, y + dy\n                    if 0 <= a < m and 0 <= b < n and (a, b) not in seen and heights[a][b] <= heights[x][y]:\n                        seen.add((a, b))\n                        st.append((a, b))\n            return pac and atl\n        return [[i, j] for i in range(m) for j in range(n) if reach(i, j)]",
   "time": "O((m·n)²)",
   "space": "O(m·n)",
   "explain": "For each cell walk downhill and check whether it can touch both oceans.",
   "frames": [],
   "alt": true
  }
 ]
};
