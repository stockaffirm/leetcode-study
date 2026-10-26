window.PROBLEM = {
 "id": "1300",
 "title": "Sum of Mutated Array Closest to Target",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "arr [4,9,3], target 10: capping values at 3 gives 3 + 3 + 3 = 9 and at 4 gives 4 + 4 + 3 = 11; both are 1 away, pick the smaller value 3.",
 "idea": "Replace every number larger than value by value. The sum increases with value, so binary search the value in [0, max(arr)]; compare the two values around the target and pick the one with the smaller difference (smaller value on ties).",
 "input": "arr = [4,9,3], target = 10",
 "output": "3",
 "notes": [],
 "best": "Replace every number larger than value by value. The sum increases with value, so binary search the value in [0, max(arr)]; compare the two values around the target and pick the one with the smaller difference (smaller value on ties).",
 "variants": [
  {
   "name": "Binary search the cap value",
   "code": "class Solution:\n    def findBestValue(self, arr, target):\n        def total(v):\n            return sum(min(x, v) for x in arr)\n        lo, hi = 0, max(arr)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if total(mid) >= target:\n                hi = mid\n            else:\n                lo = mid + 1\n        if lo > 0 and abs(total(lo - 1) - target) <= abs(total(lo) - target):\n            return lo - 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "Replace every number larger than value by value. The sum increases with value, so binary search the value in [0, max(arr)]; compare the two values around the target and pick the one with the smaller difference (smaller value on ties).",
   "frames": []
  }
 ]
};
