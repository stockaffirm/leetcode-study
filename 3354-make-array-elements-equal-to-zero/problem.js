window.PROBLEM = {
 "id": "3354",
 "title": "Make Array Elements Equal to Zero",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[1,0,2,0,3]: start at index 3 going left, or index 1 going right → 2 valid selections.",
 "idea": "The process bounces between the two sides, decrementing numbers, and ends with all zeros only when the left sum and right sum of the start (a zero) are equal (2 directions work) or differ by exactly 1 (one direction works).",
 "input": "nums = [1,0,2,0,3]",
 "output": "2",
 "notes": [],
 "best": "The process bounces between the two sides, decrementing numbers, and ends with all zeros only when the left sum and right sum of the start (a zero) are equal (2 directions work) or differ by exactly 1 (one direction works).",
 "variants": [
  {
   "name": "At each zero compare the left and right sums",
   "code": "class Solution:\n    def countValidSelections(self, nums):\n        total = sum(nums)\n        left = 0\n        res = 0\n        for x in nums:\n            if x == 0:\n                right = total - left\n                if left == right:\n                    res += 2\n                elif abs(left - right) == 1:\n                    res += 1\n            left += x\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The process bounces between the two sides, decrementing numbers, and ends with all zeros only when the left sum and right sum of the start (a zero) are equal (2 directions work) or differ by exactly 1 (one direction works).",
   "frames": []
  }
 ]
};
