window.PROBLEM = {
 "id": "701",
 "title": "Insert into a Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Insert a value into a binary search tree (left < node < right) and return the root of the resulting tree. Several results are possible; this solution adds the value as a new leaf. Example: tree [4,2,7,1,3], value 5 → [4,2,7,1,3,5].",
 "why": "Insert a new value into a binary search tree and return the tree.",
 "idea": "Go left if the value is smaller, right otherwise, until you reach an empty spot — attach the new node there.",
 "input": "[4,2,7,1,3], val = 5",
 "output": "[4,2,7,1,3,5]",
 "notes": [],
 "best": "Go left if the value is smaller, right otherwise, until you reach an empty spot — attach the new node there.",
 "variants": [
  {
   "name": "Walk down and attach a leaf",
   "code": "class Solution:\n    def insertIntoBST(self, root, val):\n        node = TreeNode(val)\n        if not root: return node\n        cur = root\n        while True:\n            if val < cur.val:\n                if cur.left: cur = cur.left\n                else:\n                    cur.left = node\n                    break\n            else:\n                if cur.right: cur = cur.right\n                else:\n                    cur.right = node\n                    break\n        return root",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "Go left if the value is smaller, right otherwise, until you reach an empty spot — attach the new node there.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def insertIntoBST(self, root, val):\n        if not root: return TreeNode(val)\n        if val < root.val: root.left = self.insertIntoBST(root.left, val)\n        else: root.right = self.insertIntoBST(root.right, val)\n        return root",
   "time": "O(h)",
   "space": "O(h)",
   "explain": "Insert into the matching subtree and return the node.",
   "frames": [],
   "alt": true
  }
 ]
};
