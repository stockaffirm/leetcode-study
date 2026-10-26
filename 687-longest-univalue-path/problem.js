window.PROBLEM = {
 "id": "687",
 "title": "Longest Univalue Path",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Find the longest path in a binary tree where every node has the SAME value (counted in edges).",
 "idea": "At each node, extend the chain from a child only if the child has the same value. The best path through a node = left chain + right chain; return the longer single chain to the parent.",
 "input": "tree [5,4,5,1,1,null,5]",
 "output": "2",
 "notes": [],
 "best": "At each node, extend the chain from a child only if the child has the same value. The best path through a node = left chain + right chain; return the longer single chain to the parent.",
 "variants": [
  {
   "name": "One DFS returning the best downward chain",
   "code": "class Solution:\n    def longestUnivaluePath(self, root):\n        best = 0\n        def go(node):\n            nonlocal best\n            if not node: return 0\n            l, r = go(node.left), go(node.right)\n            left = l + 1 if node.left and node.left.val == node.val else 0\n            right = r + 1 if node.right and node.right.val == node.val else 0\n            best = max(best, left + right)\n            return max(left, right)\n        go(root)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "At each node, extend the chain from a child only if the child has the same value. The best path through a node = left chain + right chain; return the longer single chain to the parent.",
   "frames": []
  }
 ]
};
