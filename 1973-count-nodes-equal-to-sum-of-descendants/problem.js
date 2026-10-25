window.PROBLEM = {
 "id": "1973",
 "title": "Count Nodes Equal to Sum of Descendants",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Return the number of nodes of a binary tree whose value equals the sum of the values of all their descendants (a node without descendants has sum 0). Example: [10,3,4,2,1] → 2.",
 "why": "In [10,3,4,2,1] the node 10 equals 3 + 4 + 2 + 1 and the node 3 equals 2 + 1 → 2 nodes.",
 "idea": "Compute every subtree sum bottom-up (post-order). A node counts when its value equals the sum of its left and right subtree sums.",
 "input": "root = [10,3,4,2,1]",
 "output": "2",
 "notes": [],
 "best": "Compute every subtree sum bottom-up (post-order). A node counts when its value equals the sum of its left and right subtree sums.",
 "variants": [
  {
   "name": "Post-order subtree sums",
   "code": "class Solution:\n    def equalToDescendants(self, root):\n        self.cnt = 0\n        def dfs(n):\n            if not n:\n                return 0\n            l, r = dfs(n.left), dfs(n.right)\n            if n.val == l + r:\n                self.cnt += 1\n            return n.val + l + r\n        dfs(root)\n        return self.cnt",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Compute every subtree sum bottom-up (post-order). A node counts when its value equals the sum of its left and right subtree sums.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Iterative post-order",
   "tag": "Alternative",
   "code": "class Solution:\n    def equalToDescendants(self, root):\n        total = {}\n        cnt = 0\n        stack = [(root, False)]\n        while stack:\n            node, done = stack.pop()\n            if not node:\n                continue\n            if not done:\n                stack.append((node, True))\n                stack.append((node.right, False))\n                stack.append((node.left, False))\n            else:\n                l = total.get(node.left, 0)\n                r = total.get(node.right, 0)\n                if node.val == l + r:\n                    cnt += 1\n                total[node] = node.val + l + r\n        return cnt",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The same subtree sums computed with an explicit stack.",
   "frames": [],
   "alt": true
  }
 ]
};
