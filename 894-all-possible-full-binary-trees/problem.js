window.PROBLEM = {
 "id": "894",
 "title": "All Possible Full Binary Trees",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "A full binary tree has nodes with 0 or 2 children. List every different full tree with exactly n nodes (n must be odd).",
 "idea": "Pick how many nodes go to the left subtree (odd numbers) — the rest go right. Combine every left tree with every right tree. Cache results per size.",
 "input": "n = 7",
 "output": "5 different trees",
 "notes": [],
 "best": "Pick how many nodes go to the left subtree (odd numbers) — the rest go right. Combine every left tree with every right tree. Cache results per size.",
 "variants": [
  {
   "name": "Recursion with memo",
   "code": "class Solution:\n    def allPossibleFBT(self, n):\n        @lru_cache(None)\n        def build(k):\n            if k == 1: return [TreeNode(0)]\n            res = []\n            for left in range(1, k, 2):\n                for l in build(left):\n                    for r in build(k - 1 - left):\n                        res.append(TreeNode(0, l, r))\n            return res\n        return build(n) if n % 2 else []",
   "time": "Catalan growth",
   "space": "Catalan growth",
   "explain": "Pick how many nodes go to the left subtree (odd numbers) — the rest go right. Combine every left tree with every right tree. Cache results per size.",
   "frames": []
  }
 ]
};
