window.PROBLEM = {
 "id": "366",
 "title": "Find Leaves of Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Take a binary tree. Remove all its leaves and write down their values, then remove the new leaves, and so on until the tree is empty. Return the list of lists, one per round. Example: [1,2,3,4,5] → [[4,5,3],[2],[1]].",
 "why": "Repeatedly remove all the leaves of a tree and list the removed values round by round, until the tree is gone.",
 "idea": "A node is removed in round (its height + 1), where a leaf has height 0 and a node's height is 1 + the bigger height of its children. Compute heights bottom-up and put every node in its group.",
 "input": "[1,2,3,4,5]",
 "output": "[[4,5,3],[2],[1]]",
 "notes": [],
 "best": "A node is removed in round (its height + 1), where a leaf has height 0 and a node's height is 1 + the bigger height of its children. Compute heights bottom-up and put every node in its group.",
 "variants": [
  {
   "name": "Group nodes by height",
   "code": "class Solution:\n    def findLeaves(self, root):\n        groups = []\n        def height(node):\n            if not node: return -1\n            h = 1 + max(height(node.left), height(node.right))\n            if h == len(groups): groups.append([])\n            groups[h].append(node.val)\n            return h\n        height(root)\n        return groups",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A node is removed in round (its height + 1), where a leaf has height 0 and a node's height is 1 + the bigger height of its children. Compute heights bottom-up and put every node in its group.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Cut the leaves round by round",
   "tag": "Brute force",
   "code": "class Solution:\n    def findLeaves(self, root):\n        res = []\n        def cut(node, out):\n            if not node: return None\n            if not node.left and not node.right:\n                out.append(node.val)\n                return None\n            node.left = cut(node.left, out)\n            node.right = cut(node.right, out)\n            return node\n        while root:\n            out = []\n            root = cut(root, out)\n            res.append(out)\n        return res",
   "time": "O(n·h)",
   "space": "O(h)",
   "explain": "Literally remove the leaves repeatedly: a DFS returns None for a leaf (cutting it) and collects its value.",
   "frames": [],
   "alt": true
  }
 ]
};
