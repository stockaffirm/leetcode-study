window.PROBLEM = {
 "id": "3550",
 "title": "Smallest Index With Digit Sum Equal to Index",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,10,11] → index 1 (digit sum 1) → 1.",
 "idea": "Compute the digit sum of each number and return the first index where it equals the index, or −1.",
 "input": "nums = [1,10,11]",
 "output": "1",
 "notes": [],
 "best": "Compute the digit sum of each number and return the first index where it equals the index, or −1.",
 "variants": [
  {
   "name": "First index whose digit sum equals it",
   "code": "class Solution:\n    def smallestIndex(self, nums):\n        for i, x in enumerate(nums):\n            if sum(int(d) for d in str(x)) == i:\n                return i\n        return -1",
   "time": "O(n log V)",
   "space": "O(1)",
   "explain": "Compute the digit sum of each number and return the first index where it equals the index, or −1.",
   "frames": []
  }
 ]
};
