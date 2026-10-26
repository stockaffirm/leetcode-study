window.PROBLEM = {
 "id": "2672",
 "title": "Number of Adjacent Elements With the Same Color",
 "level": "Medium",
 "topic": "Array / String",
 "question": "You have a row of n cells, all uncoloured (value 0). queries[i] = [index, color] colours cell `index` with `color` (overwriting its old colour). After each query, return how many pairs of neighbouring cells have the SAME colour and that colour is not 0. Example: n=4, queries [[0,2],[1,2],[3,1],[1,1],[2,1]] → [0,1,1,0,2].",
 "why": "A row of n cells starts uncoloured (0). Colour cells one query at a time; after each query report how many neighbouring cells have the same non-zero colour.",
 "idea": "A recolour can only change the pairs touching that cell. Before recolouring subtract any matching neighbour pairs, after recolouring add the new matching pairs — O(1) per query.",
 "input": "n=4, queries [[0,2],[1,2],[3,1],[1,1],[2,1]]",
 "output": "[0, 1, 1, 0, 2]",
 "notes": [],
 "best": "A recolour can only change the pairs touching that cell. Before recolouring subtract any matching neighbour pairs, after recolouring add the new matching pairs — O(1) per query.",
 "variants": [
  {
   "name": "Update only the two neighbours",
   "code": "class Solution:\n    def colorTheArray(self, n, queries):\n        colors = [0] * n\n        pairs, ans = 0, []\n        for idx, col in queries:\n            for nb in (idx - 1, idx + 1):\n                if 0 <= nb < n and colors[idx] != 0 and colors[nb] == colors[idx]: pairs -= 1\n            colors[idx] = col\n            for nb in (idx - 1, idx + 1):\n                if 0 <= nb < n and colors[nb] == col: pairs += 1\n            ans.append(pairs)\n        return ans",
   "time": "O(q)",
   "space": "O(n)",
   "explain": "A recolour can only change the pairs touching that cell. Before recolouring subtract any matching neighbour pairs, after recolouring add the new matching pairs — O(1) per query.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recount after every query",
   "tag": "Brute force",
   "code": "class Solution:\n    def colorTheArray(self, n, queries):\n        colors = [0] * n\n        ans = []\n        for idx, col in queries:\n            colors[idx] = col\n            ans.append(sum(1 for i in range(n - 1) if colors[i] != 0 and colors[i] == colors[i + 1]))\n        return ans",
   "time": "O(q·n)",
   "space": "O(n)",
   "explain": "After each recolour scan the whole row for equal neighbours.",
   "frames": [],
   "alt": true
  }
 ]
};
