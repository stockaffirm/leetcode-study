window.PROBLEM = {
 "id": "1200",
 "title": "Minimum Absolute Difference",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "Find every pair of numbers whose difference is the smallest possible. [4,2,1,3] → (1,2), (2,3), (3,4).",
 "idea": "The closest numbers are neighbours once the list is sorted, so only adjacent pairs need to be checked.",
 "input": "[4, 2, 1, 3]",
 "output": "[[1,2],[2,3],[3,4]]",
 "notes": [],
 "best": "The closest numbers are neighbours once the list is sorted, so only adjacent pairs need to be checked.",
 "variants": [
  {
   "name": "Sort, then compare neighbours",
   "code": "class Solution:\n    def minimumAbsDifference(self, arr):\n        arr = sorted(arr)\n        best = min(b - a for a, b in zip(arr, arr[1:]))\n        return [[a, b] for a, b in zip(arr, arr[1:]) if b - a == best]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The closest numbers are neighbours once the list is sorted, so only adjacent pairs need to be checked.",
   "frames": []
  }
 ]
};
