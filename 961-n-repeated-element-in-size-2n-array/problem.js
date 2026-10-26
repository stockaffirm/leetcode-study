window.PROBLEM = {
 "id": "961",
 "title": "N-Repeated Element in Size 2N Array",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,3,3] → 3.",
 "idea": "The array has n+1 distinct values and one of them appears n times, every other once. The first value you see twice is the repeated one.",
 "input": "nums = [1,2,3,3]",
 "output": "3",
 "notes": [],
 "best": "The array has n+1 distinct values and one of them appears n times, every other once. The first value you see twice is the repeated one.",
 "variants": [
  {
   "name": "The first value seen twice",
   "code": "class Solution:\n    def repeatedNTimes(self, nums):\n        seen = set()\n        for x in nums:\n            if x in seen:\n                return x\n            seen.add(x)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The array has n+1 distinct values and one of them appears n times, every other once. The first value you see twice is the repeated one.",
   "frames": []
  }
 ]
};
