window.PROBLEM = {
 "id": "998",
 "title": "Maximum Binary Tree II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "A maximum binary tree is built from an array: the maximum becomes the root, and the parts left and right of it become the left and right subtrees (recursively). Given the root of the tree built from some array a and a value val, return the root of the tree built from a with val appended at the end. Example: [4,1,3,null,null,2] and val 5 → [5,4,null,1,3,null,null,2]. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Adding 5 to the max tree [4,1,3,null,null,2] makes 5 the new root with the old tree as its left child.",
 "idea": "The new value was appended at the END of the original list. So it can only go on the right spine: go right while the node is bigger than the value; at the first node that is smaller (or at the end) make the new value take its place with that subtree as its left child.",
 "input": "root = [4,1,3,null,null,2], val = 5",
 "output": "[5,4,null,1,3,null,null,2]",
 "notes": [],
 "best": "The new value was appended at the END of the original list. So it can only go on the right spine: go right while the node is bigger than the value; at the first node that is smaller (or at the end) make the new value take its place with that subtree as its left child.",
 "variants": [
  {
   "name": "Insert down the right spine",
   "code": "class Solution:\n    def insertIntoMaxTree(self, root, val):\n        if not root or val > root.val:\n            return TreeNode(val, root)\n        root.right = self.insertIntoMaxTree(root.right, val)\n        return root",
   "time": "O(h)",
   "space": "O(h)",
   "explain": "The new value was appended at the END of the original list. So it can only go on the right spine: go right while the node is bigger than the value; at the first node that is smaller (or at the end) make the new value take its place with that subtree as its left child.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative walk down the right spine",
   "tag": "Alternative",
   "code": "class Solution:\n    def insertIntoMaxTree(self, root, val):\n        if not root or val > root.val:\n            return TreeNode(val, root)\n        cur = root\n        while cur.right and cur.right.val > val:\n            cur = cur.right\n        cur.right = TreeNode(val, cur.right)\n        return root",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "Walk right until the next node is smaller than val, then insert there.",
   "frames": [],
   "alt": true
  }
 ]
};
