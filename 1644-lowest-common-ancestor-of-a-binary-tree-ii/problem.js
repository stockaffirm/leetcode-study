window.PROBLEM = {
 "id": "1644",
 "title": "Lowest Common Ancestor of a Binary Tree II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Find the lowest common ancestor of p and q, but they might not both be in the tree (then return nothing).",
 "idea": "Do the usual DFS but visit BOTH children before deciding, and count how many of p and q were actually met. If fewer than two were found, there is no answer.",
 "input": "tree [3,5,1,6,2,0,8,null,null,7,4], p=5, q=4",
 "output": "5",
 "notes": [],
 "best": "Do the usual DFS but visit BOTH children before deciding, and count how many of p and q were actually met. If fewer than two were found, there is no answer.",
 "variants": [
  {
   "name": "DFS that counts how many targets were found",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        found = 0\n        def go(node):\n            nonlocal found\n            if not node: return None\n            l, r = go(node.left), go(node.right)\n            if node is p or node is q:\n                found += 1\n                return node\n            return node if l and r else (l or r)\n        res = go(root)\n        return res if found == 2 else None",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Do the usual DFS but visit BOTH children before deciding, and count how many of p and q were actually met. If fewer than two were found, there is no answer.",
   "frames": []
  }
 ]
};
