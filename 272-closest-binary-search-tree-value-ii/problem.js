window.PROBLEM = {
 "id": "272",
 "title": "Closest Binary Search Tree Value II",
 "level": "Hard",
 "topic": "Binary Tree",
 "question": "In a binary search tree (left < node < right), return the k values that are closest to the target number (a decimal), in any order. It is guaranteed that the answer is unique. Example: tree [4,2,5,1,3], target 3.714, k=2 → [3,4].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort all values by distance",
   "tag": "Brute force",
   "code": "class Solution:\n    def closestKValues(self, root, target, k):\n        vals = []\n        def inorder(node):\n            if not node: return\n            inorder(node.left)\n            vals.append(node.val)\n            inorder(node.right)\n        inorder(root)\n        return sorted(sorted(vals, key=lambda v: abs(v - target))[:k])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Collect every value, sort by distance to the target and keep k.",
   "frames": [],
   "alt": true
  }
 ]
};
