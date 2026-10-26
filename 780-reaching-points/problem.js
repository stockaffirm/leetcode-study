window.PROBLEM = {
 "id": "780",
 "title": "Reaching Points",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "From (x, y) you may go to (x+y, y) or (x, x+y). Can (sx, sy) become (tx, ty)?",
 "idea": "Go BACKWARDS: the bigger coordinate must have come from subtracting the smaller. Subtract in bulk with the remainder (%) until you reach the start or can't continue.",
 "input": "start (1,1), target (3,5)",
 "output": "True",
 "notes": [],
 "best": "Go BACKWARDS: the bigger coordinate must have come from subtracting the smaller. Subtract in bulk with the remainder (%) until you reach the start or can't continue.",
 "variants": [
  {
   "name": "Work backwards from the target with %",
   "code": "class Solution:\n    def reachingPoints(self, sx, sy, tx, ty):\n        while tx >= sx and ty >= sy:\n            if tx == ty: break\n            if tx > ty:\n                if ty > sy: tx %= ty\n                else: return (tx - sx) % ty == 0\n            else:\n                if tx > sx: ty %= tx\n                else: return (ty - sy) % tx == 0\n        return tx == sx and ty == sy",
   "time": "O(log max)",
   "space": "O(1)",
   "explain": "Go BACKWARDS: the bigger coordinate must have come from subtracting the smaller. Subtract in bulk with the remainder (%) until you reach the start or can't continue.",
   "frames": []
  }
 ]
};
