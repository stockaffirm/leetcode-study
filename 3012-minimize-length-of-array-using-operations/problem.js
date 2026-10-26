window.PROBLEM = {
 "id": "3012",
 "title": "Minimize Length of Array Using Operations",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[5,5,5,10,5]: the minimum 5 divides everything and appears 4 times → 4 / 2 = 2.",
 "idea": "Let m be the minimum. If some element is not a multiple of m, taking its remainder produces something smaller than m, which then wipes out the rest: answer 1. Otherwise only copies of m can ever be paired with each other (m % m = 0) so they vanish two at a time: answer ceil(count(m) / 2).",
 "input": "nums = [5,5,5,10,5]",
 "output": "2",
 "notes": [],
 "best": "Let m be the minimum. If some element is not a multiple of m, taking its remainder produces something smaller than m, which then wipes out the rest: answer 1. Otherwise only copies of m can ever be paired with each other (m % m = 0) so they vanish two at a time: answer ceil(count(m) / 2).",
 "variants": [
  {
   "name": "The minimum decides everything",
   "code": "class Solution:\n    def minimumArrayLength(self, nums):\n        m = min(nums)\n        if any(x % m for x in nums):\n            return 1\n        return (nums.count(m) + 1) // 2",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Let m be the minimum. If some element is not a multiple of m, taking its remainder produces something smaller than m, which then wipes out the rest: answer 1. Otherwise only copies of m can ever be paired with each other (m % m = 0) so they vanish two at a time: answer ceil(count(m) / 2).",
   "frames": []
  }
 ]
};
