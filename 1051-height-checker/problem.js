window.PROBLEM = {
 "id": "1051",
 "title": "Height Checker",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[1,1,4,2,1,3] sorted is [1,1,1,2,3,4]: positions 2, 4, 5 differ → 3.",
 "idea": "The expected order is simply the sorted heights. Count the positions where the current height differs from the sorted one.",
 "input": "heights = [1,1,4,2,1,3]",
 "output": "3",
 "notes": [],
 "best": "The expected order is simply the sorted heights. Count the positions where the current height differs from the sorted one.",
 "variants": [
  {
   "name": "Compare with the sorted copy",
   "code": "class Solution:\n    def heightChecker(self, heights):\n        return sum(a != b for a, b in zip(heights, sorted(heights)))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The expected order is simply the sorted heights. Count the positions where the current height differs from the sorted one.",
   "frames": []
  }
 ]
};
