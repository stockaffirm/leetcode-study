window.PROBLEM = {
 "id": "95",
 "title": "Unique Binary Search Trees II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "For n = 3 there are 5 different BSTs that use the values 1, 2, 3.",
 "idea": "For the range lo…hi try each value i as the root. Every tree built from lo…i−1 can be the left subtree and every tree from i+1…hi the right subtree — combine all pairs.",
 "input": "n = 3",
 "output": "5 trees",
 "notes": [],
 "best": "For the range lo…hi try each value i as the root. Every tree built from lo…i−1 can be the left subtree and every tree from i+1…hi the right subtree — combine all pairs.",
 "variants": [
  {
   "name": "Choose a root, combine all left × right trees",
   "code": "class Solution:\n    def generateTrees(self, n):\n        def build(lo, hi):\n            if lo > hi:\n                return [None]\n            return [TreeNode(i, l, r) for i in range(lo, hi + 1)\n                    for l in build(lo, i - 1) for r in build(i + 1, hi)]\n        return build(1, n) if n else []",
   "time": "O(Catalan(n))",
   "space": "O(Catalan(n))",
   "explain": "For the range lo…hi try each value i as the root. Every tree built from lo…i−1 can be the left subtree and every tree from i+1…hi the right subtree — combine all pairs.",
   "frames": []
  }
 ]
};
