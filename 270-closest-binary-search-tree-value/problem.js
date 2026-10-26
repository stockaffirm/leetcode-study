window.PROBLEM = {
 "id": "270",
 "title": "Closest Binary Search Tree Value",
 "level": "Easy",
 "topic": "Binary Tree",
 "question": "",
 "why": "In a binary search tree find the value closest to a target (the smaller on ties).",
 "idea": "At every node record it if it is closer, then go left if the target is smaller, right otherwise — the closest value lies on that path.",
 "input": "[4,2,5,1,3], target 3.714286",
 "output": "4",
 "notes": [],
 "best": "At every node record it if it is closer, then go left if the target is smaller, right otherwise — the closest value lies on that path.",
 "variants": [
  {
   "name": "Walk down the tree",
   "code": "class Solution:\n    def closestValue(self, root, target):\n        best = root.val\n        while root:\n            if (abs(root.val - target), root.val) < (abs(best - target), best): best = root.val\n            root = root.left if target < root.val else root.right\n        return best",
   "time": "O(h)",
   "space": "O(1)",
   "explain": "At every node record it if it is closer, then go left if the target is smaller, right otherwise — the closest value lies on that path.",
   "frames": []
  }
 ]
};
