window.PROBLEM = {
 "id": "1104",
 "title": "Path In Zigzag Labelled Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
