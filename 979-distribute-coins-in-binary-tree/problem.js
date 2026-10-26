window.PROBLEM = {
 "id": "979",
 "title": "Distribute Coins in Binary Tree",
 "level": "Medium",
 "topic": "Binary Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
