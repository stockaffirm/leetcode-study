window.PROBLEM = {
 "id": "1506",
 "title": "Find Root of N-Ary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "You are given all the nodes of an N-ary tree in arbitrary order. Return the root node. Example: nodes of a tree with root 1 → the node with value 1.",
 "why": "Nodes given in random order [5,4,3,1,2]... the one never listed as a child is the root.",
 "idea": "Add every node's value to a running total and subtract every child's value. What remains is the root's value (it is the only node never counted as a child); then pick that node from the list.",
 "input": "tree nodes in shuffled order (root value 1)",
 "output": "1",
 "notes": [],
 "best": "Add every node's value to a running total and subtract every child's value. What remains is the root's value (it is the only node never counted as a child); then pick that node from the list.",
 "variants": [
  {
   "name": "The root is the only node that is nobody's child",
   "code": "class Solution:\n    def findRoot(self, tree):\n        total = 0\n        for node in tree:\n            total += node.val\n            for child in node.children:\n                total -= child.val\n        for node in tree:\n            if node.val == total:\n                return node",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Add every node's value to a running total and subtract every child's value. What remains is the root's value (it is the only node never counted as a child); then pick that node from the list.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set of all children",
   "tag": "Alternative",
   "code": "class Solution:\n    def findRoot(self, tree):\n        children = {id(c) for node in tree for c in node.children}\n        for node in tree:\n            if id(node) not in children:\n                return node",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The root is the node that is not in the set of children.",
   "frames": [],
   "alt": true
  }
 ]
};
