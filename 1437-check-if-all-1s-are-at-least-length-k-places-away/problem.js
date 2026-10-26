window.PROBLEM = {
 "id": "1437",
 "title": "Check If All 1's Are at Least Length K Places Away",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,0,0,0,1,0,0,1], k=2 → gaps of 3 → true.",
 "idea": "Walk the array remembering the index of the previous 1. A new 1 is too close if i − prev − 1 < k.",
 "input": "nums = [1,0,0,0,1,0,0,1], k = 2",
 "output": "true",
 "notes": [],
 "best": "Walk the array remembering the index of the previous 1. A new 1 is too close if i − prev − 1 < k.",
 "variants": [
  {
   "name": "Remember the last 1",
   "code": "class Solution:\n    def kLengthApart(self, nums, k):\n        prev = -k - 1\n        for i, v in enumerate(nums):\n            if v == 1:\n                if i - prev - 1 < k:\n                    return False\n                prev = i\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk the array remembering the index of the previous 1. A new 1 is too close if i − prev − 1 < k.",
   "frames": []
  }
 ]
};
