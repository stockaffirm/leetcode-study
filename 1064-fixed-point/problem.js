window.PROBLEM = {
 "id": "1064",
 "title": "Fixed Point",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "",
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
   "frames": []
  }
 ]
};
