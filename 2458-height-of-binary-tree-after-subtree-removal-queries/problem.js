window.PROBLEM = {
 "id": "2458",
 "title": "Height of Binary Tree After Subtree Removal Queries",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "You are given the root of a binary tree where every node has a different value, and a list of queries. For each query value q, imagine removing the node with value q together with its entire subtree (each query is independent: the tree is restored before the next one). Return a list with the height of the remaining tree for every query, where height means the number of edges on the longest path from the root down to a leaf. Example: tree [5,8,9,2,1,3,7,4,6], queries [3,2,4,8] → [3,2,3,2]. (A tree written as a list reads level by level; null means there is no node in that spot.)",
 "why": "For each query, imagine cutting off one subtree and report the height (in edges) of the remaining tree. Queries are independent.",
 "idea": "Precompute every node's depth and height. Removing a node at depth d only matters for that level: the new tree height is d + (the best height among the OTHER nodes at depth d), or d − 1 if it was the only node there. Keep the top two heights per level.",
 "input": "tree [5,8,9,2,1,3,7,4,6], queries [3,2,4,8]",
 "output": "[3, 2, 3, 2]",
 "notes": [],
 "best": "Precompute every node's depth and height. Removing a node at depth d only matters for that level: the new tree height is d + (the best height among the OTHER nodes at depth d), or d − 1 if it was the only node there. Keep the top two heights per level.",
 "variants": [
  {
   "name": "Depths, heights and the top two per level",
   "code": "class Solution:\n    def treeQueries(self, root, queries):\n        depth, height = {}, {}\n        def go(node, d):\n            if not node: return -1\n            depth[node.val] = d\n            height[node.val] = 1 + max(go(node.left, d + 1), go(node.right, d + 1))\n            return height[node.val]\n        go(root, 0)\n        levels = defaultdict(list)\n        for v in depth: levels[depth[v]].append((height[v], v))\n        top = {}\n        for d, lst in levels.items():\n            lst.sort(reverse=True)\n            top[d] = lst[:2]\n        ans = []\n        for q in queries:\n            d = depth[q]\n            siblings = top[d]\n            if len(siblings) == 1:\n                ans.append(d - 1)\n            elif siblings[0][1] == q:\n                ans.append(d + siblings[1][0])\n            else:\n                ans.append(d + siblings[0][0])\n        return ans",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "Precompute every node's depth and height. Removing a node at depth d only matters for that level: the new tree height is d + (the best height among the OTHER nodes at depth d), or d − 1 if it was the only node there. Keep the top two heights per level.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recompute the height per query",
   "tag": "Brute force",
   "code": "class Solution:\n    def treeQueries(self, root, queries):\n        def height(node, banned):\n            if not node or node.val == banned: return -1\n            return 1 + max(height(node.left, banned), height(node.right, banned))\n        return [height(root, q) for q in queries]",
   "time": "O(n·q)",
   "space": "O(h)",
   "explain": "For each query walk the whole tree while pretending the queried subtree is gone.",
   "frames": [],
   "alt": true
  }
 ]
};
