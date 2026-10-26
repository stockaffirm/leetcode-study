window.PROBLEM = {
 "id": "2265",
 "title": "Count Nodes Equal to Average of Subtree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "For each node, is its value equal to the (rounded-down) average of all values in its subtree? Count such nodes.",
 "idea": "Post-order: each node gets the sum and the number of nodes of its subtree from its children, then compares sum // count with its own value.",
 "input": "tree [4,8,5,0,1,null,6]",
 "output": "5",
 "notes": [],
 "best": "Post-order: each node gets the sum and the number of nodes of its subtree from its children, then compares sum // count with its own value.",
 "variants": [
  {
   "name": "Post-order returning (sum, count)",
   "code": "class Solution:\n    def averageOfSubtree(self, root):\n        ans = 0\n        def go(node):\n            nonlocal ans\n            if not node: return 0, 0\n            ls, lc = go(node.left)\n            rs, rc = go(node.right)\n            s, c = ls + rs + node.val, lc + rc + 1\n            if s // c == node.val: ans += 1\n            return s, c\n        go(root)\n        return ans",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Post-order: each node gets the sum and the number of nodes of its subtree from its children, then compares sum // count with its own value.",
   "frames": []
  }
 ]
};
