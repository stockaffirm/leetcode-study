window.PROBLEM = {
 "id": "1339",
 "title": "Maximum Product of Splitted Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,2,3,4,5,6]: cutting off the subtree rooted at 2 (sum 11) gives 11 × 10 = 110.",
 "idea": "Removing one edge splits the tree into a subtree with sum s and the rest with total − s. Compute every subtree sum (post-order) and maximise s × (total − s). Take the result modulo 1e9+7 at the end.",
 "input": "root = [1,2,3,4,5,6]",
 "output": "110",
 "notes": [],
 "best": "Removing one edge splits the tree into a subtree with sum s and the rest with total − s. Compute every subtree sum (post-order) and maximise s × (total − s). Take the result modulo 1e9+7 at the end.",
 "variants": [
  {
   "name": "Subtree sums: maximise s × (total − s)",
   "code": "class Solution:\n    def maxProduct(self, root):\n        sums = []\n        def dfs(node):\n            if not node:\n                return 0\n            s = node.val + dfs(node.left) + dfs(node.right)\n            sums.append(s)\n            return s\n        total = dfs(root)\n        return max(s * (total - s) for s in sums) % (10**9 + 7)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Removing one edge splits the tree into a subtree with sum s and the rest with total − s. Compute every subtree sum (post-order) and maximise s × (total − s). Take the result modulo 1e9+7 at the end.",
   "frames": []
  }
 ]
};
