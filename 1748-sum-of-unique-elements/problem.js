window.PROBLEM = {
 "id": "1748",
 "title": "Sum of Unique Elements",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,3,2]: 1 and 3 appear once → 4.",
 "idea": "Count each number and add up the numbers whose count is exactly 1.",
 "input": "nums = [1,2,3,2]",
 "output": "4",
 "notes": [],
 "best": "Count each number and add up the numbers whose count is exactly 1.",
 "variants": [
  {
   "name": "Count, then sum the singles",
   "code": "class Solution:\n    def sumOfUnique(self, nums):\n        cnt = Counter(nums)\n        return sum(x for x, c in cnt.items() if c == 1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count each number and add up the numbers whose count is exactly 1.",
   "frames": []
  }
 ]
};
