window.PROBLEM = {
 "id": "653",
 "title": "Two Sum IV - Input is a BST",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "Given a binary search tree and a number k, return true if two different nodes have values that add up to k. Example: tree [5,3,6,2,4,null,7], k=9 → true (2 + 7). (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "In-order list + two pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def findTarget(self, root, k):\n        vals = []\n        def inorder(node):\n            if node:\n                inorder(node.left)\n                vals.append(node.val)\n                inorder(node.right)\n        inorder(root)\n        l, r = 0, len(vals) - 1\n        while l < r:\n            s = vals[l] + vals[r]\n            if s == k:\n                return True\n            if s < k:\n                l += 1\n            else:\n                r -= 1\n        return False",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The in-order walk of a BST is sorted, so look for the pair with two pointers.",
   "frames": [],
   "alt": true
  }
 ]
};
