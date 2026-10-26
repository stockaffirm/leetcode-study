window.PROBLEM = {
 "id": "2849",
 "title": "Determine if a Cell Is Reachable at a Given Time",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
