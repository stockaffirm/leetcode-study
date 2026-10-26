window.PROBLEM = {
 "id": "3516",
 "title": "Find Closest Person",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "x=2, y=7, z=4 → |2−4| = 2, |7−4| = 3 → person 1 arrives first.",
 "idea": "Person 1 needs |x − z| steps and person 2 needs |y − z|. Return 1, 2 or 0 (tie).",
 "input": "x = 2, y = 7, z = 4",
 "output": "1",
 "notes": [],
 "best": "Person 1 needs |x − z| steps and person 2 needs |y − z|. Return 1, 2 or 0 (tie).",
 "variants": [
  {
   "name": "Compare two distances",
   "code": "class Solution:\n    def findClosest(self, x, y, z):\n        a, b = abs(x - z), abs(y - z)\n        return 1 if a < b else 2 if b < a else 0",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Person 1 needs |x − z| steps and person 2 needs |y − z|. Return 1, 2 or 0 (tie).",
   "frames": []
  }
 ]
};
