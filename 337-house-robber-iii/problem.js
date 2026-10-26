window.PROBLEM = {
 "id": "337",
 "title": "House Robber III",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "The houses form a binary tree; each node holds the money in that house. If two directly connected houses are robbed the same night the police are called. Return the maximum money you can rob. Example: [3,2,3,null,3,null,1] → 7. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
 "why": "Houses form a binary tree; robbing two directly linked houses triggers the alarm. What is the most you can rob?",
 "idea": "For each node return two numbers: the best total if it IS robbed (its children must be skipped) and if it is NOT robbed (children free to choose).",
 "input": "[3,2,3,null,3,null,1]",
 "output": "7",
 "notes": [],
 "best": "For each node return two numbers: the best total if it IS robbed (its children must be skipped) and if it is NOT robbed (children free to choose).",
 "variants": [
  {
   "name": "Tree DP: rob or skip",
   "code": "class Solution:\n    def rob(self, root):\n        def go(node):\n            if not node: return 0, 0\n            lr, ln = go(node.left)\n            rr, rn = go(node.right)\n            robbed = node.val + ln + rn\n            skipped = max(lr, ln) + max(rr, rn)\n            return robbed, skipped\n        return max(go(root))",
   "time": "O(n)",
   "space": "O(h)",
   "explain": "For each node return two numbers: the best total if it IS robbed (its children must be skipped) and if it is NOT robbed (children free to choose).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memo on node and grandchildren",
   "tag": "Alternative",
   "code": "class Solution:\n    def rob(self, root):\n        memo = {}\n        def best(node):\n            if not node: return 0\n            if node in memo: return memo[node]\n            take = node.val\n            if node.left: take += best(node.left.left) + best(node.left.right)\n            if node.right: take += best(node.right.left) + best(node.right.right)\n            memo[node] = max(take, best(node.left) + best(node.right))\n            return memo[node]\n        return best(root)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "best(node) = max(node + grandchildren, children).",
   "frames": [],
   "alt": true
  }
 ]
};
