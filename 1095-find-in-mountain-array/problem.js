window.PROBLEM = {
 "id": "1095",
 "title": "Find in Mountain Array",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "[1,2,3,4,5,3,1], target 3 → the smallest index holding 3 is 2.",
 "idea": "The array rises to a peak and then falls. Binary search the peak (compare get(mid) with get(mid+1)). Then binary search the ascending side for the target; only if it is missing, binary search the descending side. This uses O(log n) calls to get().",
 "input": "mountain_arr = [1,2,3,4,5,3,1], target = 3",
 "output": "2",
 "notes": [],
 "best": "The array rises to a peak and then falls. Binary search the peak (compare get(mid) with get(mid+1)). Then binary search the ascending side for the target; only if it is missing, binary search the descending side. This uses O(log n) calls to get().",
 "variants": [
  {
   "name": "Find the peak, then binary search both slopes",
   "code": "class Solution:\n    def findInMountainArray(self, target, mountain_arr):\n        n = mountain_arr.length()\n        lo, hi = 0, n - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):\n                lo = mid + 1\n            else:\n                hi = mid\n        peak = lo\n        l, r = 0, peak\n        while l < r:\n            mid = (l + r) // 2\n            if mountain_arr.get(mid) < target:\n                l = mid + 1\n            else:\n                r = mid\n        if mountain_arr.get(l) == target:\n            return l\n        l, r = peak, n - 1\n        while l < r:\n            mid = (l + r) // 2\n            if mountain_arr.get(mid) > target:\n                l = mid + 1\n            else:\n                r = mid\n        return l if mountain_arr.get(l) == target else -1",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "The array rises to a peak and then falls. Binary search the peak (compare get(mid) with get(mid+1)). Then binary search the ascending side for the target; only if it is missing, binary search the descending side. This uses O(log n) calls to get().",
   "frames": []
  }
 ]
};
