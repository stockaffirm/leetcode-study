window.PROBLEM = {
 "id": "366",
 "title": "Find Leaves of Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
