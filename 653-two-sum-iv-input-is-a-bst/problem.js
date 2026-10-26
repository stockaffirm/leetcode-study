window.PROBLEM = {
 "id": "653",
 "title": "Two Sum IV - Input is a BST",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "In the tree [5,3,6,2,4,null,7] the values 2 and 7 add up to 9 → true.",
 "idea": "Visit every node; before adding its value to a set, check whether (k − value) is already there.",
 "input": "root = [5,3,6,2,4,null,7], k = 9",
 "output": "true",
 "notes": [],
 "best": "Visit every node; before adding its value to a set, check whether (k − value) is already there.",
 "variants": [
  {
   "name": "DFS with a set of seen values",
   "code": "class Solution:\n    def findTarget(self, root, k):\n        seen = set()\n        def dfs(node):\n            if not node:\n                return False\n            if k - node.val in seen:\n                return True\n            seen.add(node.val)\n            return dfs(node.left) or dfs(node.right)\n        return dfs(root)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Visit every node; before adding its value to a set, check whether (k − value) is already there.",
   "frames": []
  }
 ]
};
