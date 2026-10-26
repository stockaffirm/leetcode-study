window.PROBLEM = {
 "id": "442",
 "title": "Find All Duplicates in an Array",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "[4,3,2,7,8,2,3,1]: 2 and 3 appear twice.",
 "idea": "All numbers are between 1 and n, so each number can use its own position as a flag: negate nums[value − 1]. If that cell is already negative, the value was seen before.",
 "input": "nums = [4,3,2,7,8,2,3,1]",
 "output": "[2, 3]",
 "notes": [],
 "best": "All numbers are between 1 and n, so each number can use its own position as a flag: negate nums[value − 1]. If that cell is already negative, the value was seen before.",
 "variants": [
  {
   "name": "Mark visited positions by negating",
   "code": "class Solution:\n    def findDuplicates(self, nums):\n        res = []\n        for x in nums:\n            i = abs(x) - 1\n            if nums[i] < 0:\n                res.append(abs(x))\n            else:\n                nums[i] = -nums[i]\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "All numbers are between 1 and n, so each number can use its own position as a flag: negate nums[value − 1]. If that cell is already negative, the value was seen before.",
   "frames": []
  }
 ]
};
