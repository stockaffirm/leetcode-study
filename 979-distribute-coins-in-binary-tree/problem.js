window.PROBLEM = {
 "id": "979",
 "title": "Distribute Coins in Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "Each node of a binary tree holds some coins, in total exactly one coin per node. In one move a coin goes to a neighbouring node. Return the minimum moves so that every node has exactly one coin. Example: [3,0,0] → 2.",
 "why": "[3,0,0]: move one coin to each child → 2 moves.",
 "idea": "Postorder: a subtree with n nodes and c coins must send c − n coins to its parent (negative means it needs coins). Every such coin crosses the edge to the parent once, so add |c − n| for each node.",
 "input": "root = [3,0,0]",
 "output": "2",
 "notes": [],
 "best": "Postorder: a subtree with n nodes and c coins must send c − n coins to its parent (negative means it needs coins). Every such coin crosses the edge to the parent once, so add |c − n| for each node.",
 "variants": [
  {
   "name": "Count the coin flow across each edge",
   "code": "class Solution:\n    def distributeCoins(self, root):\n        moves = 0\n        def excess(node):\n            nonlocal moves\n            if not node:\n                return 0\n            e = excess(node.left) + excess(node.right) + node.val - 1\n            moves += abs(e)\n            return e\n        excess(root)\n        return moves",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Postorder: a subtree with n nodes and c coins must send c − n coins to its parent (negative means it needs coins). Every such coin crosses the edge to the parent once, so add |c − n| for each node.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Return (moves, excess) pairs",
   "tag": "Alternative",
   "code": "class Solution:\n    def distributeCoins(self, root):\n        def go(node):\n            if not node:\n                return 0, 0\n            lm, le = go(node.left)\n            rm, re = go(node.right)\n            e = node.val + le + re - 1\n            return lm + rm + abs(le) + abs(re), e\n        return go(root)[0]",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "Pure recursion returning both the moves needed in the subtree and its excess coins.",
   "frames": [],
   "alt": true
  }
 ]
};
