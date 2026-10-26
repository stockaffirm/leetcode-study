window.PROBLEM = {
 "id": "865",
 "title": "Smallest Subtree with all the Deepest Nodes",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
 "why": "The deepest nodes are 7 and 4 (both below node 2), so the smallest subtree containing them is rooted at 2.",
 "idea": "For each node compute the depth of its subtree and its best answer. If one side is deeper, the answer comes from that side; if both sides are equally deep, this node is the answer.",
 "input": "root = [3,5,1,6,2,0,8,null,null,7,4]",
 "output": "[2,7,4]",
 "notes": [],
 "best": "For each node compute the depth of its subtree and its best answer. If one side is deeper, the answer comes from that side; if both sides are equally deep, this node is the answer.",
 "variants": [
  {
   "name": "DFS returning (depth, answer node)",
   "code": "class Solution:\n    def subtreeWithAllDeepest(self, root):\n        def dfs(node):\n            if not node:\n                return (0, None)\n            ld, ln = dfs(node.left)\n            rd, rn = dfs(node.right)\n            if ld > rd:\n                return (ld + 1, ln)\n            if rd > ld:\n                return (rd + 1, rn)\n            return (ld + 1, node)\n        return dfs(root)[1]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For each node compute the depth of its subtree and its best answer. If one side is deeper, the answer comes from that side; if both sides are equally deep, this node is the answer.",
   "frames": []
  }
 ]
};
