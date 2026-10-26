window.PROBLEM = {
 "id": "1762",
 "title": "Buildings With an Ocean View",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "The ocean is on the right. Building 3 (height 1) sees it; building 2 (height 3) is taller than everything right of it; building 1 (height 2) is blocked by the 3; building 0 (height 4) sees over everything.",
 "idea": "Walk from the right (the ocean) towards the left, remembering the tallest building seen so far. A building has an ocean view only if it is strictly taller than that.",
 "input": "heights = [4,2,3,1]",
 "output": "[0, 2, 3]",
 "notes": [],
 "best": "Walk from the right (the ocean) towards the left, remembering the tallest building seen so far. A building has an ocean view only if it is strictly taller than that.",
 "variants": [
  {
   "name": "Scan from the ocean side",
   "code": "class Solution:\n    def findBuildings(self, heights):\n        res = []\n        tallest = 0\n        for i in range(len(heights) - 1, -1, -1):\n            if heights[i] > tallest:\n                res.append(i)\n                tallest = heights[i]\n        return res[::-1]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk from the right (the ocean) towards the left, remembering the tallest building seen so far. A building has an ocean view only if it is strictly taller than that.",
   "frames": []
  }
 ]
};
