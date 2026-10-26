window.PROBLEM = {
 "id": "998",
 "title": "Maximum Binary Tree II",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
