window.PROBLEM = {
 "id": "1051",
 "title": "Height Checker",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Students must stand in non-decreasing height order. Return how many students are NOT standing where they would be in the correctly ordered line. Example: [1,1,4,2,1,3] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Counting sort",
   "tag": "Alternative",
   "code": "class Solution:\n    def heightChecker(self, heights):\n        cnt = [0] * 101\n        for h in heights:\n            cnt[h] += 1\n        res = 0\n        h = 0\n        for x in heights:\n            while cnt[h] == 0:\n                h += 1\n            if h != x:\n                res += 1\n            cnt[h] -= 1\n        return res",
   "time": "O(n + 100)",
   "space": "O(100)",
   "explain": "Heights are at most 100: count them, then walk the expected order and compare.",
   "frames": [],
   "alt": true
  }
 ]
};
