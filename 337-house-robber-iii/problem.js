window.PROBLEM = {
 "id": "337",
 "title": "House Robber III",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
