window.PROBLEM = {
 "id": "1644",
 "title": "Lowest Common Ancestor of a Binary Tree II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given the root of a binary tree and two nodes p and q, return their lowest common ancestor — the lowest node that has both in its subtree (a node counts as in its own subtree). Unlike the simpler version, p or q may NOT be in the tree at all; in that case return nothing. Example: tree [3,5,1,6,2,0,8,null,null,7,4], p=5, q=4 → 5; if q is a node that is not in the tree → nothing. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two root paths",
   "tag": "Alternative",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, p, q):\n        def path(node, target, acc):\n            if not node: return False\n            acc.append(node)\n            if node is target or path(node.left, target, acc) or path(node.right, target, acc): return True\n            acc.pop()\n            return False\n        a, b = [], []\n        if not (path(root, p, a) and path(root, q, b)): return None\n        lca = None\n        for x, y in zip(a, b):\n            if x is y: lca = x\n            else: break\n        return lca",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Find both root paths (fail if either is missing) and take the last shared node.",
   "frames": [],
   "alt": true
  }
 ]
};
