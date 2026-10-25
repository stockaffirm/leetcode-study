window.PROBLEM = {
 "id": "2265",
 "title": "Count Nodes Equal to Average of Subtree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given the root of a binary tree (boxes called nodes with up to two children), count the nodes whose value equals the average of the values in their own subtree (the node and everything below it), where the average is the sum divided by the number of nodes, rounded DOWN to a whole number. Example: tree [4,8,5,0,1,null,6] → the average rule holds at 5 nodes → 5. (A tree written as a list reads level by level; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect each subtree's values",
   "tag": "Brute force",
   "code": "class Solution:\n    def averageOfSubtree(self, root):\n        def values(node):\n            if not node: return []\n            return [node.val] + values(node.left) + values(node.right)\n        def go(node):\n            if not node: return 0\n            vals = values(node)\n            hit = 1 if sum(vals) // len(vals) == node.val else 0\n            return hit + go(node.left) + go(node.right)\n        return go(root)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For every node gather all values below it and compare their average.",
   "frames": [],
   "alt": true
  }
 ]
};
