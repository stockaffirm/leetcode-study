window.PROBLEM = {
 "id": "894",
 "title": "All Possible Full Binary Trees",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "A full binary tree is a tree in which every node has either 0 or 2 children. Given a number n, return a list of all possible full binary trees that have exactly n nodes (every node's value is 0; each tree is described by its root). The trees may be returned in any order. Example: n=7 → there are 5 different full binary trees with 7 nodes. Even values of n have none.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bottom-up table",
   "tag": "Alternative",
   "code": "class Solution:\n    def allPossibleFBT(self, n):\n        if n % 2 == 0: return []\n        dp = {1: [TreeNode(0)]}\n        for k in range(3, n + 1, 2):\n            dp[k] = [TreeNode(0, l, r) for left in range(1, k, 2) for l in dp[left] for r in dp[k - 1 - left]]\n        return dp[n]",
   "time": "Catalan growth",
   "space": "Catalan growth",
   "explain": "Build the answer for sizes 1, 3, 5 … in order, reusing smaller results.",
   "frames": [],
   "alt": true
  }
 ]
};
