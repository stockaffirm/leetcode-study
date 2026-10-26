window.PROBLEM = {
 "id": "485",
 "title": "Max Consecutive Ones",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,1,0,1,1,1]: the longest run of 1s has length 3.",
 "idea": "Count the current run of 1s, reset it at every 0, and remember the largest run.",
 "input": "nums = [1,1,0,1,1,1]",
 "output": "3",
 "notes": [],
 "best": "Count the current run of 1s, reset it at every 0, and remember the largest run.",
 "variants": [
  {
   "name": "Running streak",
   "code": "class Solution:\n    def findMaxConsecutiveOnes(self, nums):\n        best = cur = 0\n        for x in nums:\n            cur = cur + 1 if x else 0\n            best = max(best, cur)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count the current run of 1s, reset it at every 0, and remember the largest run.",
   "frames": []
  }
 ]
};
