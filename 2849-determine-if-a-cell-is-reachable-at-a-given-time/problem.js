window.PROBLEM = {
 "id": "2849",
 "title": "Determine if a Cell Is Reachable at a Given Time",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "You start at cell (sx, sy) of an infinite grid. In every second you MUST move to one of the 8 neighbouring cells (sideways, up/down or diagonally). Return true if you can be at cell (fx, fy) after EXACTLY t seconds. Example: (2,4) → (7,7) in 6 seconds → true (the target is 5 columns and 3 rows away); (1,1) → (1,1) in 1 second → false.",
 "why": "You must move to one of the 8 neighbouring cells every second. Can you be at the target cell after EXACTLY t seconds?",
 "idea": "With 8-direction moves the shortest time is max(|dx|, |dy|). Any t at least that works (you can wiggle), except when you start on the target and t = 1 (you can't stay still).",
 "input": "start (2,4), target (7,7), t=6",
 "output": "True",
 "notes": [],
 "best": "With 8-direction moves the shortest time is max(|dx|, |dy|). Any t at least that works (you can wiggle), except when you start on the target and t = 1 (you can't stay still).",
 "variants": [
  {
   "name": "Chebyshev distance",
   "code": "class Solution:\n    def isReachableAtTime(self, sx, sy, fx, fy, t):\n        dx, dy = abs(sx - fx), abs(sy - fy)\n        if dx == 0 and dy == 0: return t != 1\n        return max(dx, dy) <= t",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "With 8-direction moves the shortest time is max(|dx|, |dy|). Any t at least that works (you can wiggle), except when you start on the target and t = 1 (you can't stay still).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Steps needed vs time",
   "tag": "Alternative",
   "code": "class Solution:\n    def isReachableAtTime(self, sx, sy, fx, fy, t):\n        d = max(abs(sx - fx), abs(sy - fy))\n        if d == 0: return t == 0 or t >= 2\n        return t >= d",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Same rule written as: if you start on the target you need 0 or ≥ 2 seconds; otherwise at least max(dx, dy).",
   "frames": [],
   "alt": true
  }
 ]
};
