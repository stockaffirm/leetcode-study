window.PROBLEM = {
 "id": "1740",
 "title": "Find Distance in a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Return the number of edges on the path between the nodes with values p and q in a binary tree.",
 "idea": "Find their lowest common ancestor; the distance is the depth of p plus the depth of q measured from that ancestor.",
 "input": "[3,5,1,6,2,0,8,null,null,7,4], p=5, q=0",
 "output": "3",
 "notes": [],
 "best": "Find their lowest common ancestor; the distance is the depth of p plus the depth of q measured from that ancestor.",
 "variants": [
  {
   "name": "Lowest common ancestor + depths",
   "code": "class Solution:\n    def findDistance(self, root, p, q):\n        def lca(n):\n            if not n or n.val in (p, q): return n\n            l, r = lca(n.left), lca(n.right)\n            return n if l and r else l or r\n        def depth(n, target, d):\n            if not n: return -1\n            if n.val == target: return d\n            return max(depth(n.left, target, d + 1), depth(n.right, target, d + 1))\n        a = lca(root)\n        return depth(a, p, 0) + depth(a, q, 0)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Find their lowest common ancestor; the distance is the depth of p plus the depth of q measured from that ancestor.",
   "frames": []
  }
 ]
};
