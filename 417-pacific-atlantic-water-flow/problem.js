window.PROBLEM = {
 "id": "417",
 "title": "Pacific Atlantic Water Flow",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
