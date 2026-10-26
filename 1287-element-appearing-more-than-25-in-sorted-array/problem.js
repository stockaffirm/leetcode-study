window.PROBLEM = {
 "id": "1287",
 "title": "Element Appearing More Than 25% In Sorted Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
