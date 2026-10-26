window.PROBLEM = {
 "id": "2158",
 "title": "Amount of New Area Painted Each Day",
 "level": "Hard",
 "topic": "Intervals",
 "question": "",
 "why": "Day 1 paints cells 1–3 (3 new). Day 2 paints 4–6 (3 new). Day 3 asks for 5–7: 5 and 6 are already painted, so only 7 is new (1).",
 "idea": "Treat each unit cell as an item. Once a cell is painted, remember a pointer to the next unpainted cell (like Union Find). Then every day we jump straight over painted cells and only touch new ones.",
 "input": "paint = [[1,4],[4,7],[5,8]]",
 "output": "[3, 3, 1]",
 "notes": [],
 "best": "Treat each unit cell as an item. Once a cell is painted, remember a pointer to the next unpainted cell (like Union Find). Then every day we jump straight over painted cells and only touch new ones.",
 "variants": [
  {
   "name": "Skip painted cells with a jump map",
   "code": "class Solution:\n    def amountPainted(self, paint):\n        nxt = {}\n        def find(x):\n            root = x\n            while root in nxt:\n                root = nxt[root]\n            while x in nxt:\n                nxt[x], x = root, nxt[x]\n            return root\n        res = []\n        for s, e in paint:\n            x = find(s)\n            cnt = 0\n            while x < e:\n                nxt[x] = x + 1\n                cnt += 1\n                x = find(x + 1)\n            res.append(cnt)\n        return res",
   "time": "O(total area · α)",
   "space": "O(total area)",
   "explain": "Treat each unit cell as an item. Once a cell is painted, remember a pointer to the next unpainted cell (like Union Find). Then every day we jump straight over painted cells and only touch new ones.",
   "frames": []
  }
 ]
};
