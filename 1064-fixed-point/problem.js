window.PROBLEM = {
 "id": "1064",
 "title": "Fixed Point",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "Given a sorted array of DISTINCT integers, return the smallest index i such that arr[i] == i, or −1 if there is none. Example: [−10,−5,0,3,7] → 3.",
 "why": "Given a sorted array of distinct integers, find the smallest index i with arr[i] == i, or −1.",
 "idea": "arr[i] − i never decreases (the array is strictly increasing). Binary search the first place where it reaches 0.",
 "input": "[-10,-5,0,3,7]",
 "output": "3",
 "notes": [],
 "best": "arr[i] − i never decreases (the array is strictly increasing). Binary search the first place where it reaches 0.",
 "variants": [
  {
   "name": "Binary search on arr[i] − i",
   "code": "class Solution:\n    def fixedPoint(self, arr):\n        lo, hi = 0, len(arr) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if arr[mid] >= mid: hi = mid\n            else: lo = mid + 1\n        return lo if arr[lo] == lo else -1",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "arr[i] − i never decreases (the array is strictly increasing). Binary search the first place where it reaches 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def fixedPoint(self, arr):\n        for i, v in enumerate(arr):\n            if v == i: return i\n        return -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Return the first i with arr[i] == i.",
   "frames": [],
   "alt": true
  }
 ]
};
