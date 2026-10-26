window.PROBLEM = {
 "id": "305",
 "title": "Number of Islands II",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
