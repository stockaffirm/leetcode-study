window.PROBLEM = {
 "id": "255",
 "title": "Verify Preorder Sequence in Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Given the preorder traversal of a binary tree with distinct values, return true if it could be the preorder of a binary SEARCH tree. Example: [5,2,1,3,6] → true.",
 "why": "[5,2,1,3,6] is a valid preorder; [5,2,6,1,3] is not, because 1 comes after 6 (right side) yet is smaller than 5.",
 "idea": "In preorder, once a value is larger than something on the stack we have moved into a right subtree; every later value must exceed the last popped value (the lower bound). Keep a decreasing stack and a lower bound; fail if a value is below the bound.",
 "input": "preorder = [5,2,1,3,6]",
 "output": "true",
 "notes": [],
 "best": "In preorder, once a value is larger than something on the stack we have moved into a right subtree; every later value must exceed the last popped value (the lower bound). Keep a decreasing stack and a lower bound; fail if a value is below the bound.",
 "variants": [
  {
   "name": "Stack with a rising lower bound",
   "code": "class Solution:\n    def verifyPreorder(self, preorder):\n        low = float('-inf')\n        st = []\n        for x in preorder:\n            if x < low:\n                return False\n            while st and st[-1] < x:\n                low = st.pop()\n            st.append(x)\n        return True",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "In preorder, once a value is larger than something on the stack we have moved into a right subtree; every later value must exceed the last popped value (the lower bound). Keep a decreasing stack and a lower bound; fail if a value is below the bound.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with value bounds",
   "tag": "Alternative",
   "code": "class Solution:\n    def verifyPreorder(self, preorder):\n        i = 0\n        def go(lo, hi):\n            nonlocal i\n            if i == len(preorder) or not (lo < preorder[i] < hi):\n                return\n            root = preorder[i]\n            i += 1\n            go(lo, root)\n            go(root, hi)\n        go(float('-inf'), float('inf'))\n        return i == len(preorder)",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Read the preorder with an index: a subtree may only use values between its bounds; a value outside ends that subtree.",
   "frames": [],
   "alt": true
  }
 ]
};
