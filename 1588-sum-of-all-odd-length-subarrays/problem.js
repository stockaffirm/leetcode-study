window.PROBLEM = {
 "id": "1588",
 "title": "Sum of All Odd Length Subarrays",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Add up the sums of all subarrays (runs of consecutive numbers) that have an ODD length. Example: [1,4,2,5,3] → 58.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def sumOddLengthSubarrays(self, arr):\n        total = 0\n        n = len(arr)\n        for i in range(n):\n            for j in range(i, n, 2):\n                total += sum(arr[i:j + 1])\n        return total",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Add up every odd-length subarray directly.",
   "frames": [],
   "alt": true
  }
 ]
};
