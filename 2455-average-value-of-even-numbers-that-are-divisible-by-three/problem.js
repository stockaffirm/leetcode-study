window.PROBLEM = {
 "id": "2455",
 "title": "Average Value of Even Numbers That Are Divisible by Three",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,3,6,10,12,15]: 6 and 12 qualify → (6 + 12) / 2 = 9.",
 "idea": "Even and divisible by 3 means divisible by 6. Average those with integer division, or 0 if none.",
 "input": "nums = [1,3,6,10,12,15]",
 "output": "9",
 "notes": [],
 "best": "Even and divisible by 3 means divisible by 6. Average those with integer division, or 0 if none.",
 "variants": [
  {
   "name": "Keep multiples of 6",
   "code": "class Solution:\n    def averageValue(self, nums):\n        good = [x for x in nums if x % 6 == 0]\n        return sum(good) // len(good) if good else 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Even and divisible by 3 means divisible by 6. Average those with integer division, or 0 if none.",
   "frames": []
  }
 ]
};
