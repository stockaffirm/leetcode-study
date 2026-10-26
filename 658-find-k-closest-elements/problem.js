window.PROBLEM = {
 "id": "658",
 "title": "Find K Closest Elements",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "In a sorted list, return the k numbers closest to x (ties → smaller number), in sorted order.",
 "idea": "The answer is a window of k neighbours. Binary-search its start: compare x − arr[mid] with arr[mid+k] − x to decide whether the window should move right.",
 "input": "[1,2,3,4,5], k=4, x=3",
 "output": "[1, 2, 3, 4]",
 "notes": [],
 "best": "The answer is a window of k neighbours. Binary-search its start: compare x − arr[mid] with arr[mid+k] − x to decide whether the window should move right.",
 "variants": [
  {
   "name": "Binary search for the window start",
   "code": "class Solution:\n    def findClosestElements(self, arr, k, x):\n        lo, hi = 0, len(arr) - k\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if x - arr[mid] > arr[mid + k] - x: lo = mid + 1\n            else: hi = mid\n        return arr[lo:lo + k]",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "The answer is a window of k neighbours. Binary-search its start: compare x − arr[mid] with arr[mid+k] − x to decide whether the window should move right.",
   "frames": []
  }
 ]
};
