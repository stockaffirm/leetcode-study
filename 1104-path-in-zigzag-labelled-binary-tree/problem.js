window.PROBLEM = {
 "id": "1104",
 "title": "Path In Zigzag Labelled Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "In an infinite binary tree, rows are labelled left to right in odd rows and right to left in even rows (zigzag). Return the labels on the path from the root to the node with the given label. Example: 14 → [1,3,4,14].",
 "why": "label 14 in the zigzag tree: path 1 → 3 → 4 → 14.",
 "idea": "In a normal heap numbering the parent of x is x // 2. In the zigzag tree odd rows are reversed, so the real parent is found by mirroring x inside its level (level min + level max − x) before halving. Climb to the root and reverse.",
 "input": "label = 14",
 "output": "[1, 3, 4, 14]",
 "notes": [],
 "best": "In a normal heap numbering the parent of x is x // 2. In the zigzag tree odd rows are reversed, so the real parent is found by mirroring x inside its level (level min + level max − x) before halving. Climb to the root and reverse.",
 "variants": [
  {
   "name": "Mirror within each level while climbing",
   "code": "class Solution:\n    def pathInZigZagTree(self, label):\n        path = []\n        level = label.bit_length()\n        while label:\n            path.append(label)\n            lo, hi = 1 << (level - 1), (1 << level) - 1\n            label = (lo + hi - label) // 2\n            level -= 1\n        return path[::-1]",
   "time": "O(log label)",
   "space": "O(log label)",
   "explain": "In a normal heap numbering the parent of x is x // 2. In the zigzag tree odd rows are reversed, so the real parent is found by mirroring x inside its level (level min + level max − x) before halving. Climb to the root and reverse.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Build the normal path then mirror odd levels",
   "tag": "Alternative",
   "code": "class Solution:\n    def pathInZigZagTree(self, label):\n        path = []\n        x = label\n        while x:\n            path.append(x)\n            x //= 2\n        path.reverse()\n        res = []\n        for depth, v in enumerate(path):\n            if depth == len(path) - 1 or (len(path) - 1 - depth) % 2 == 0:\n                res.append(v)\n            else:\n                lo, hi = 1 << depth, (1 << (depth + 1)) - 1\n                res.append(lo + hi - v)\n        return res",
   "time": "O(log n)",
   "space": "O(log n)",
   "explain": "The path of heap labels is label, label//2, …; mirror the labels on alternate rows.",
   "frames": [],
   "alt": true
  }
 ]
};
