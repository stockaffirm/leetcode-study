window.PROBLEM = {
 "id": "780",
 "title": "Reaching Points",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "From a point (x, y) you may move to (x + y, y) or to (x, x + y). Given a start (sx, sy) and a target (tx, ty), return true if the target can be reached from the start by a sequence of such moves. Example: (1,1) → (3,5): (1,1) → (1,2) → (3,2) → (3,5) → true.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Search forward with memo",
   "tag": "Brute force",
   "code": "class Solution:\n    def reachingPoints(self, sx, sy, tx, ty):\n        @lru_cache(None)\n        def go(x, y):\n            if x == tx and y == ty: return True\n            if x > tx or y > ty: return False\n            return go(x + y, y) or go(x, x + y)\n        return go(sx, sy)",
   "time": "exponential in the target",
   "space": "O(states)",
   "explain": "Try both moves from the start (only small targets work).",
   "frames": [],
   "alt": true
  }
 ]
};
