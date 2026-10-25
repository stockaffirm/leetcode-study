window.PROBLEM = {
 "id": "485",
 "title": "Max Consecutive Ones",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A binary array has only 0s and 1s. Return the length of the longest run of consecutive 1s. Example: [1,1,0,1,1,1] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Split on zeros",
   "tag": "Pythonic",
   "code": "class Solution:\n    def findMaxConsecutiveOnes(self, nums):\n        return max(len(g) for g in \"\".join(map(str, nums)).split(\"0\"))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Join the numbers into a string, split at '0' and take the longest piece.",
   "frames": [],
   "alt": true
  }
 ]
};
