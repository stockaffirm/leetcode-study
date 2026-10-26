window.PROBLEM = {
 "id": "442",
 "title": "Find All Duplicates in an Array",
 "level": "Medium",
 "topic": "Array / String",
 "question": "An array of n integers has all values in 1 … n, and each value appears once or twice. Return all numbers that appear twice, in O(n) (time grows only in step with the input size) time and O(1) extra space. Example: [4,3,2,7,8,2,3,1] → [2,3].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count the numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def findDuplicates(self, nums):\n        return [x for x, c in Counter(nums).items() if c == 2]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Use a counter and keep the numbers that appear twice.",
   "frames": [],
   "alt": true
  }
 ]
};
