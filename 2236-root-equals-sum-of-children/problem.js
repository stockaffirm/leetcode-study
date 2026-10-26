window.PROBLEM = {
 "id": "2236",
 "title": "Root Equals Sum of Children",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "[10,4,6] → 10 == 4 + 6 → true.",
 "idea": "The tree has exactly three nodes. Compare the root value with the sum of the left and right child values.",
 "input": "root = [10,4,6]",
 "output": "true",
 "notes": [],
 "best": "The tree has exactly three nodes. Compare the root value with the sum of the left and right child values.",
 "variants": [
  {
   "name": "Compare the root with its two children",
   "code": "class Solution:\n    def checkTree(self, root):\n        return root.val == root.left.val + root.right.val",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The tree has exactly three nodes. Compare the root value with the sum of the left and right child values.",
   "frames": []
  }
 ]
};
