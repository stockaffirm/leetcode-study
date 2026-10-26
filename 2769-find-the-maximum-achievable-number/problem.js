window.PROBLEM = {
 "id": "2769",
 "title": "Find the Maximum Achievable Number",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
