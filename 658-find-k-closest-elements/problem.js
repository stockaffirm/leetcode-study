window.PROBLEM = {
 "id": "658",
 "title": "Find K Closest Elements",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "Given a sorted list arr and numbers k and x, return the k numbers of arr that are closest to x, sorted ascending. A number a is closer than b if |a−x| is smaller, or equal with a < b. Example: [1,2,3,4,5], k=4, x=3 → [1,2,3,4].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort by distance, keep k",
   "tag": "Alternative",
   "code": "class Solution:\n    def findClosestElements(self, arr, k, x):\n        return sorted(sorted(arr, key=lambda a: (abs(a - x), a))[:k])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort all numbers by (distance to x, value), take the first k, then sort them.",
   "frames": [],
   "alt": true
  }
 ]
};
