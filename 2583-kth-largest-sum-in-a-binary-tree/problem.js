window.PROBLEM = {
 "id": "2583",
 "title": "Kth Largest Sum in a Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "The level sum of a binary tree is the sum of the values on one level. Return the k-th largest level sum, or −1 if the tree has fewer than k levels. Example: [5,8,9,2,1,3,7,4,6], k=2 → 13.",
 "why": "[5,8,9,2,1,3,7,4,6] has level sums 5, 17, 13, 10; the 2nd largest is 13.",
 "idea": "Do a BFS (Breadth-First Search) and compute the sum of each level. If there are fewer than k levels return −1, otherwise sort the sums in descending order and take the k-th.",
 "input": "root = [5,8,9,2,1,3,7,4,6], k = 2",
 "output": "13",
 "notes": [],
 "best": "Do a BFS (Breadth-First Search) and compute the sum of each level. If there are fewer than k levels return −1, otherwise sort the sums in descending order and take the k-th.",
 "variants": [
  {
   "name": "Level sums, then sort",
   "code": "class Solution:\n    def kthLargestLevelSum(self, root, k):\n        sums = []\n        q = deque([root])\n        while q:\n            total = 0\n            for _ in range(len(q)):\n                node = q.popleft()\n                total += node.val\n                if node.left:\n                    q.append(node.left)\n                if node.right:\n                    q.append(node.right)\n            sums.append(total)\n        if len(sums) < k:\n            return -1\n        return sorted(sums, reverse=True)[k - 1]",
   "time": "O(n + h log h)",
   "space": "O(n)",
   "explain": "Do a BFS (Breadth-First Search) and compute the sum of each level. If there are fewer than k levels return −1, otherwise sort the sums in descending order and take the k-th.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS collecting sums by depth",
   "tag": "Alternative",
   "code": "class Solution:\n    def kthLargestLevelSum(self, root, k):\n        sums = []\n        def dfs(node, d):\n            if not node:\n                return\n            if d == len(sums):\n                sums.append(0)\n            sums[d] += node.val\n            dfs(node.left, d + 1)\n            dfs(node.right, d + 1)\n        dfs(root, 0)\n        if len(sums) < k:\n            return -1\n        return nlargest(k, sums)[-1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Recurse with the depth and add each value to its level's sum.",
   "frames": [],
   "alt": true
  }
 ]
};
