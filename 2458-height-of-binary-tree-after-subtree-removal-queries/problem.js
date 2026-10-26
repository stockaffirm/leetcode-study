window.PROBLEM = {
 "id": "2458",
 "title": "Height of Binary Tree After Subtree Removal Queries",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
