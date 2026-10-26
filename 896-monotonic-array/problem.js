window.PROBLEM = {
 "id": "896",
 "title": "Monotonic Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Is the list always going up (or flat), or always going down (or flat)?",
 "idea": "Assume both 'increasing' and 'decreasing' are possible; every step that goes the other way rules one of them out. If either survives, the list is monotonic.",
 "input": "[1, 2, 2, 3]",
 "output": "True",
 "notes": [],
 "best": "Assume both 'increasing' and 'decreasing' are possible; every step that goes the other way rules one of them out. If either survives, the list is monotonic.",
 "variants": [
  {
   "name": "Check non-decreasing and non-increasing",
   "code": "class Solution:\n    def isMonotonic(self, nums):\n        inc = dec = True\n        for i in range(1, len(nums)):\n            if nums[i] < nums[i - 1]: inc = False\n            if nums[i] > nums[i - 1]: dec = False\n        return inc or dec",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Assume both 'increasing' and 'decreasing' are possible; every step that goes the other way rules one of them out. If either survives, the list is monotonic.",
   "frames": []
  }
 ]
};
