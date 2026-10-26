window.PROBLEM = {
 "id": "272",
 "title": "Closest Binary Search Tree Value II",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "",
 "why": "In a binary search tree return the k values closest to a target number.",
 "idea": "An in-order walk visits values in ascending order. Keep a window of the k best so far; when the next value is closer than the window's smallest, slide the window, otherwise every later value is even farther, so stop.",
 "input": "[4,2,5,1,3], target 3.71, k=2",
 "output": "[3,4]",
 "notes": [],
 "best": "An in-order walk visits values in ascending order. Keep a window of the k best so far; when the next value is closer than the window's smallest, slide the window, otherwise every later value is even farther, so stop.",
 "variants": [
  {
   "name": "In-order walk with a sliding window",
   "code": "class Solution:\n    def closestKValues(self, root, target, k):\n        win = deque()\n        def inorder(node):\n            if not node: return\n            inorder(node.left)\n            if len(win) < k: win.append(node.val)\n            elif abs(node.val - target) < abs(win[0] - target):\n                win.popleft()\n                win.append(node.val)\n            else: return\n            inorder(node.right)\n        inorder(root)\n        return list(win)",
   "time": "O(n)",
   "space": "O(k + h)",
   "explain": "An in-order walk visits values in ascending order. Keep a window of the k best so far; when the next value is closer than the window's smallest, slide the window, otherwise every later value is even farther, so stop.",
   "frames": []
  }
 ]
};
