window.PROBLEM = {
 "id": "1973",
 "title": "Count Nodes Equal to Sum of Descendants",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
