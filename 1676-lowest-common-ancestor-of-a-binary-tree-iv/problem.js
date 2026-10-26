window.PROBLEM = {
 "id": "1676",
 "title": "Lowest Common Ancestor of a Binary Tree IV",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Find the lowest node that has ALL of the given nodes in its subtree (the nodes are guaranteed to be in the tree).",
 "idea": "DFS: return a node if it is one of the targets; otherwise combine the children's answers — if both sides found something, this node is the answer; otherwise pass along whichever side found one.",
 "input": "tree [3,5,1,6,2,0,8,null,null,7,4], nodes 4 and 7",
 "output": "2",
 "notes": [],
 "best": "DFS: return a node if it is one of the targets; otherwise combine the children's answers — if both sides found something, this node is the answer; otherwise pass along whichever side found one.",
 "variants": [
  {
   "name": "DFS returning the node found below",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, nodes):\n        targets = set(nodes)\n        def go(node):\n            if not node or node in targets: return node\n            l, r = go(node.left), go(node.right)\n            return node if l and r else (l or r)\n        return go(root)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "DFS: return a node if it is one of the targets; otherwise combine the children's answers — if both sides found something, this node is the answer; otherwise pass along whichever side found one.",
   "frames": []
  }
 ]
};
