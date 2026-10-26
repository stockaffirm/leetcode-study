window.PROBLEM = {
 "id": "268",
 "title": "Missing Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "The list holds 0..n with one number missing. [3,0,1] → 2 is missing.",
 "idea": "XOR cancels equal pairs. XOR every index 0..n with every value; everything cancels except the missing number.",
 "input": "[3, 0, 1]",
 "output": "2",
 "notes": [],
 "best": "XOR cancels equal pairs. XOR every index 0..n with every value; everything cancels except the missing number.",
 "variants": [
  {
   "name": "XOR of indexes and values",
   "code": "class Solution:\n    def missingNumber(self, nums):\n        x = len(nums)\n        for i, v in enumerate(nums):\n            x ^= i ^ v\n        return x",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "XOR cancels equal pairs. XOR every index 0..n with every value; everything cancels except the missing number.",
   "frames": []
  }
 ]
};
