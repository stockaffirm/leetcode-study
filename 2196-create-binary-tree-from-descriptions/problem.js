window.PROBLEM = {
 "id": "2196",
 "title": "Create Binary Tree From Descriptions",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "Each description [parent, child, isLeft] says that child hangs on the left (1) or right (0) of parent. Build the tree and return its root.",
 "idea": "Create each node once in a dictionary and link it. The root is the only node that is never a child.",
 "input": "[[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]",
 "output": "[50,20,80,15,17,19]",
 "notes": [],
 "best": "Create each node once in a dictionary and link it. The root is the only node that is never a child.",
 "variants": [
  {
   "name": "Hash map of nodes, root = never a child",
   "code": "class Solution:\n    def createBinaryTree(self, descriptions):\n        nodes, children = {}, set()\n        for p, c, left in descriptions:\n            for v in (p, c):\n                if v not in nodes: nodes[v] = TreeNode(v)\n            if left: nodes[p].left = nodes[c]\n            else: nodes[p].right = nodes[c]\n            children.add(c)\n        for v in nodes:\n            if v not in children: return nodes[v]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Create each node once in a dictionary and link it. The root is the only node that is never a child.",
   "frames": []
  }
 ]
};
