window.PROBLEM = {
 "id": "1287",
 "title": "Element Appearing More Than 25% In Sorted Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A sorted array has exactly one value that appears more than 25% of the time. Return it. Example: [1,2,2,6,6,6,6,7,10] → 6.",
 "why": "[1,2,2,6,6,6,6,7,10]: 6 appears 4 times out of 9 (more than a quarter).",
 "idea": "The array is sorted, so equal numbers sit together. A value covering more than 25% of the array must also be at distance n/4 from itself: check arr[i] == arr[i + n//4].",
 "input": "arr = [1,2,2,6,6,6,6,7,10]",
 "output": "6",
 "notes": [],
 "best": "The array is sorted, so equal numbers sit together. A value covering more than 25% of the array must also be at distance n/4 from itself: check arr[i] == arr[i + n//4].",
 "variants": [
  {
   "name": "Compare with the element n/4 steps ahead",
   "code": "class Solution:\n    def findSpecialInteger(self, arr):\n        n = len(arr)\n        step = n // 4\n        for i in range(n - step):\n            if arr[i] == arr[i + step]:\n                return arr[i]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The array is sorted, so equal numbers sit together. A value covering more than 25% of the array must also be at distance n/4 from itself: check arr[i] == arr[i + n//4].",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count every number",
   "tag": "Alternative",
   "code": "class Solution:\n    def findSpecialInteger(self, arr):\n        n = len(arr)\n        for x, c in Counter(arr).items():\n            if c * 4 > n:\n                return x",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Return the number whose count is above n / 4.",
   "frames": [],
   "alt": true
  }
 ]
};
