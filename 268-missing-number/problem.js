window.PROBLEM = {
 "id": "268",
 "title": "Missing Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "A list nums contains n different numbers taken from the range 0 to n (that is n+1 possible values), so exactly one value in the range is missing. Return the missing number. Example: [3,0,1] (n = 3, range 0 to 3) → 2 is missing → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sum formula",
   "tag": "Alternative",
   "code": "class Solution:\n    def missingNumber(self, nums):\n        n = len(nums)\n        return n * (n + 1) // 2 - sum(nums)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The numbers 0..n add up to n(n+1)/2; subtract what is in the list.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Set difference",
   "tag": "Alternative",
   "code": "class Solution:\n    def missingNumber(self, nums):\n        s = set(nums)\n        for i in range(len(nums) + 1):\n            if i not in s: return i",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find the one value in range(n+1) that is not in the set.",
   "frames": [],
   "alt": true
  }
 ]
};
