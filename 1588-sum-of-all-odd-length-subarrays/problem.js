window.PROBLEM = {
 "id": "1588",
 "title": "Sum of All Odd Length Subarrays",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Add up the sums of all subarrays whose length is odd.",
 "idea": "Number i starts in (i+1) ways and ends in (n−i) ways, so it lies in (i+1)(n−i) subarrays; about half of them (rounded up) have odd length.",
 "input": "[1,4,2,5,3]",
 "output": "58",
 "notes": [],
 "best": "Number i starts in (i+1) ways and ends in (n−i) ways, so it lies in (i+1)(n−i) subarrays; about half of them (rounded up) have odd length.",
 "variants": [
  {
   "name": "Count how often each number appears",
   "code": "class Solution:\n    def sumOddLengthSubarrays(self, arr):\n        n = len(arr)\n        total = 0\n        for i, x in enumerate(arr):\n            total += x * (((i + 1) * (n - i) + 1) // 2)\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Number i starts in (i+1) ways and ends in (n−i) ways, so it lies in (i+1)(n−i) subarrays; about half of them (rounded up) have odd length.",
   "frames": []
  }
 ]
};
