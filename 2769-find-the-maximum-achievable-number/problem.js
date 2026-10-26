window.PROBLEM = {
 "id": "2769",
 "title": "Find the Maximum Achievable Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Starting from any integer x, one operation increases or decreases x by 1 AND simultaneously increases or decreases num by 1. Return the maximum achievable x such that x becomes equal to num after at most t operations. Example: num=4, t=1 → 6.",
 "why": "num=4, t=1 → x can be 6.",
 "idea": "Each operation moves x and num towards each other by 1 each, closing a gap of 2 per operation. So the largest achievable x is num + 2t.",
 "input": "num = 4, t = 1",
 "output": "6",
 "notes": [],
 "best": "Each operation moves x and num towards each other by 1 each, closing a gap of 2 per operation. So the largest achievable x is num + 2t.",
 "variants": [
  {
   "name": "num + 2t",
   "code": "class Solution:\n    def theMaximumAchievableX(self, num, t):\n        return num + 2 * t",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Each operation moves x and num towards each other by 1 each, closing a gap of 2 per operation. So the largest achievable x is num + 2t.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate the operations",
   "tag": "Brute force",
   "code": "class Solution:\n    def theMaximumAchievableX(self, num, t):\n        x = num\n        for _ in range(t):\n            x += 2\n        return x",
   "time": "O(t)",
   "space": "O(1)",
   "explain": "Raise x and num apart by one each operation.",
   "frames": [],
   "alt": true
  }
 ]
};
