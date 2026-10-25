window.PROBLEM = {
 "id": "852",
 "title": "Peak Index in a Mountain Array",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "A mountain array strictly increases up to one peak and then strictly decreases. Return the index of the peak, in O(log n) (very fast: the work is halved at every step) time. Example: [0,2,1,0] → 1.",
 "why": "[0,2,1,0] rises to 2 at index 1, then falls.",
 "idea": "If arr[mid] < arr[mid+1] we are still climbing, so the peak is to the right; otherwise mid could be the peak or the peak is to the left. Halve until one index remains.",
 "input": "arr = [0,2,1,0]",
 "output": "1",
 "notes": [],
 "best": "If arr[mid] < arr[mid+1] we are still climbing, so the peak is to the right; otherwise mid could be the peak or the peak is to the left. Halve until one index remains.",
 "variants": [
  {
   "name": "Binary search on the slope",
   "code": "class Solution:\n    def peakIndexInMountainArray(self, arr):\n        lo, hi = 0, len(arr) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if arr[mid] < arr[mid + 1]:\n                lo = mid + 1\n            else:\n                hi = mid\n        return lo",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "If arr[mid] < arr[mid+1] we are still climbing, so the peak is to the right; otherwise mid could be the peak or the peak is to the left. Halve until one index remains.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Maximum with index()",
   "tag": "Pythonic",
   "code": "class Solution:\n    def peakIndexInMountainArray(self, arr):\n        return arr.index(max(arr))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The peak is the maximum of the array.",
   "frames": [],
   "alt": true
  }
 ]
};
