window.PROBLEM = {
 "id": "315",
 "title": "Count of Smaller Numbers After Self",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "[5,2,6,1] → [2,1,1,0].",
 "idea": "Scan from the right. Keep a Fenwick tree (counts per compressed value). For each number ask how many already-inserted values are smaller, then insert it.",
 "input": "nums = [5,2,6,1]",
 "output": "[2, 1, 1, 0]",
 "notes": [],
 "best": "Scan from the right. Keep a Fenwick tree (counts per compressed value). For each number ask how many already-inserted values are smaller, then insert it.",
 "variants": [
  {
   "name": "Fenwick tree over value ranks, scanning from the right",
   "code": "class Solution:\n    def countSmaller(self, nums):\n        rank = {v: i + 1 for i, v in enumerate(sorted(set(nums)))}\n        m = len(rank)\n        tree = [0] * (m + 1)\n        def add(i):\n            while i <= m:\n                tree[i] += 1\n                i += i & -i\n        def query(i):\n            s = 0\n            while i > 0:\n                s += tree[i]\n                i -= i & -i\n            return s\n        res = []\n        for x in reversed(nums):\n            res.append(query(rank[x] - 1))\n            add(rank[x])\n        return res[::-1]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Scan from the right. Keep a Fenwick tree (counts per compressed value). For each number ask how many already-inserted values are smaller, then insert it.",
   "frames": []
  }
 ]
};
