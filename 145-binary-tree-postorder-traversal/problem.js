window.PROBLEM = {
 "id": "145",
 "title": "Binary Tree Postorder Traversal",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "[1,null,2,3] → postorder [3,2,1].",
 "idea": "Postorder (left, right, root) is the reverse of a traversal that visits root, then right, then left. Do that with a stack and reverse the output.",
 "input": "root = [1,null,2,3]",
 "output": "[3, 2, 1]",
 "notes": [],
 "best": "Postorder (left, right, root) is the reverse of a traversal that visits root, then right, then left. Do that with a stack and reverse the output.",
 "variants": [
  {
   "name": "Iterative: reverse of root-right-left",
   "code": "class Solution:\n    def postorderTraversal(self, root):\n        res = []\n        st = [root] if root else []\n        while st:\n            node = st.pop()\n            res.append(node.val)\n            if node.left:\n                st.append(node.left)\n            if node.right:\n                st.append(node.right)\n        return res[::-1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Postorder (left, right, root) is the reverse of a traversal that visits root, then right, then left. Do that with a stack and reverse the output.",
   "frames": []
  }
 ]
};
