window.PROBLEM = {
 "id": "255",
 "title": "Verify Preorder Sequence in Binary Search Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
