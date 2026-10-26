window.PROBLEM = {
 "id": "1200",
 "title": "Minimum Absolute Difference",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Given a list arr of different whole numbers, find the smallest difference between any two numbers, and return every pair of numbers that has exactly that difference. Each pair is written smaller number first, and the pairs are listed in increasing order. Example: [4,2,1,3] → the smallest gap is 1 → [[1,2],[2,3],[3,4]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Single pass with a running best",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumAbsDifference(self, arr):\n        arr = sorted(arr)\n        best, ans = float('inf'), []\n        for i in range(1, len(arr)):\n            d = arr[i] - arr[i - 1]\n            if d < best:\n                best, ans = d, []\n            if d == best: ans.append([arr[i - 1], arr[i]])\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "After sorting, track the smallest gap seen and reset the answer list when a smaller gap shows up.",
   "frames": [],
   "alt": true
  }
 ]
};
