window.PROBLEM = {
 "id": "1026",
 "title": "Maximum Difference Between Node and Ancestor",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "[8,3,10,1,6,null,14,null,null,4,7,13] → |8 − 1| = 7.",
 "idea": "For every node the best ancestor to compare with is the smallest or largest value on the path from the root. DFS (Depth-First Search) down carrying the path's min and max; at each node update the answer with |val − min| and |val − max|.",
 "input": "root = [8,3,10,1,6,null,14,null,null,4,7,13]",
 "output": "7",
 "notes": [],
 "best": "For every node the best ancestor to compare with is the smallest or largest value on the path from the root. DFS (Depth-First Search) down carrying the path's min and max; at each node update the answer with |val − min| and |val − max|.",
 "variants": [
  {
   "name": "Carry the min and max of the path down",
   "code": "class Solution:\n    def maxAncestorDiff(self, root):\n        best = 0\n        def go(node, lo, hi):\n            nonlocal best\n            if not node:\n                return\n            best = max(best, abs(node.val - lo), abs(node.val - hi))\n            lo, hi = min(lo, node.val), max(hi, node.val)\n            go(node.left, lo, hi)\n            go(node.right, lo, hi)\n        go(root, root.val, root.val)\n        return best",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For every node the best ancestor to compare with is the smallest or largest value on the path from the root. DFS (Depth-First Search) down carrying the path's min and max; at each node update the answer with |val − min| and |val − max|.",
   "frames": []
  }
 ]
};
