window.PROBLEM = {
 "id": "765",
 "title": "Couples Holding Hands",
 "level": "Hard",
 "topic": "Graph",
 "question": "2n people sit in a row of 2n seats; person ids come in couples (0,1), (2,3), (4,5), … You may swap any two people (they do not have to be neighbours). Return the minimum number of swaps so that every couple sits side by side (in either order). Example: [0,2,1,3] → swap 2 and 1 → [0,1,2,3] → 1 swap.",
 "why": "2n people sit in a row; couples are (0,1), (2,3) … Fewest swaps (of any two people) so every couple sits side by side?",
 "idea": "Go through the seats two at a time. If the person next to you is not your partner, swap your partner into that seat (one swap fixes one couple permanently).",
 "input": "[0, 2, 1, 3]",
 "output": "1",
 "notes": [],
 "best": "Go through the seats two at a time. If the person next to you is not your partner, swap your partner into that seat (one swap fixes one couple permanently).",
 "variants": [
  {
   "name": "Greedy: fix each seat pair",
   "code": "class Solution:\n    def minSwapsCouples(self, row):\n        pos = {x: i for i, x in enumerate(row)}\n        swaps = 0\n        for i in range(0, len(row), 2):\n            partner = row[i] ^ 1\n            if row[i + 1] != partner:\n                j = pos[partner]\n                row[i + 1], row[j] = row[j], row[i + 1]\n                pos[row[j]] = j\n                pos[row[i + 1]] = i + 1\n                swaps += 1\n        return swaps",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Go through the seats two at a time. If the person next to you is not your partner, swap your partner into that seat (one swap fixes one couple permanently).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Union-find on couples",
   "tag": "Alternative",
   "code": "class Solution:\n    def minSwapsCouples(self, row):\n        n = len(row) // 2\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        for i in range(0, len(row), 2):\n            a, b = find(row[i] // 2), find(row[i + 1] // 2)\n            parent[a] = b\n        return n - len({find(i) for i in range(n)})",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Link the couples sitting together; swaps needed = couples − connected groups.",
   "frames": [],
   "alt": true
  }
 ]
};
