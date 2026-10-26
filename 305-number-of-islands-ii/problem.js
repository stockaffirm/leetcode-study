window.PROBLEM = {
 "id": "305",
 "title": "Number of Islands II",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "A grid of water cells (m × n) is empty at first. Positions [r, c] are turned into land one by one. After EACH addition, return the number of islands, where an island is a group of land cells connected up, down, left or right. Example: a 3 × 3 grid with additions [[0,0],[0,1],[1,2],[2,1]] → [1,1,2,3].",
 "why": "Land appears one cell at a time on a map. After each addition, how many islands are there?",
 "idea": "Each new land cell starts as its own island (+1). For each land neighbour, union them; every successful union merges two islands (−1). Union-find makes each step almost O(1).",
 "input": "3×3 map, additions [[0,0],[0,1],[1,2],[2,1]]",
 "output": "[1, 1, 2, 3]",
 "notes": [],
 "best": "Each new land cell starts as its own island (+1). For each land neighbour, union them; every successful union merges two islands (−1). Union-find makes each step almost O(1).",
 "variants": [
  {
   "name": "Union-find, add land one cell at a time",
   "code": "class Solution:\n    def numIslands2(self, m, n, positions):\n        parent = {}\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        count, ans = 0, []\n        for r, c in positions:\n            if (r, c) in parent:\n                ans.append(count)\n                continue\n            parent[(r, c)] = (r, c)\n            count += 1\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                nb = (r + dr, c + dc)\n                if nb in parent:\n                    a, b = find((r, c)), find(nb)\n                    if a != b:\n                        parent[a] = b\n                        count -= 1\n            ans.append(count)\n        return ans",
   "time": "O(k·α)",
   "space": "O(k)",
   "explain": "Each new land cell starts as its own island (+1). For each land neighbour, union them; every successful union merges two islands (−1). Union-find makes each step almost O(1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recount islands every time",
   "tag": "Brute force",
   "code": "class Solution:\n    def numIslands2(self, m, n, positions):\n        land, ans = set(), []\n        for r, c in positions:\n            land.add((r, c))\n            seen, count = set(), 0\n            for cell in land:\n                if cell in seen: continue\n                count += 1\n                st = [cell]\n                seen.add(cell)\n                while st:\n                    x, y = st.pop()\n                    for nb in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):\n                        if nb in land and nb not in seen:\n                            seen.add(nb)\n                            st.append(nb)\n            ans.append(count)\n        return ans",
   "time": "O(k²)",
   "space": "O(k)",
   "explain": "After each addition flood-fill all land and count the islands from scratch.",
   "frames": [],
   "alt": true
  }
 ]
};
