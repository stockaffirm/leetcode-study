window.PROBLEM = {
 "id": "1676",
 "title": "Lowest Common Ancestor of a Binary Tree IV",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given the root of a binary tree and a list of nodes that are all in the tree (all values are different). Return their lowest common ancestor: the lowest node that has ALL of the given nodes in its subtree (a node counts as in its own subtree). Example: tree [3,5,1,6,2,0,8,null,null,7,4], nodes 4 and 7 → both lie below node 2 → 2. (A tree written as a list reads level by level; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare root paths",
   "tag": "Alternative",
   "code": "class Solution:\n    def lowestCommonAncestor(self, root, nodes):\n        def path(node, target, acc):\n            if not node: return False\n            acc.append(node)\n            if node is target or path(node.left, target, acc) or path(node.right, target, acc): return True\n            acc.pop()\n            return False\n        paths = []\n        for t in nodes:\n            p = []\n            path(root, t, p)\n            paths.append(p)\n        lca = None\n        for level in zip(*paths):\n            if all(x is level[0] for x in level): lca = level[0]\n            else: break\n        return lca",
   "time": "O(n·k)",
   "space": "O(h·k)",
   "explain": "Find each target's path from the root and keep the common prefix.",
   "frames": [],
   "alt": true
  }
 ]
};
