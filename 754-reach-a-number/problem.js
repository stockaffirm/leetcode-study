window.PROBLEM = {
 "id": "754",
 "title": "Reach a Number",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "target 2: 1+2 = 3 overshoots by 1 (odd), 1+2+3 = 6 overshoots by 4 (even) → flip −2: 1−2+3 = 2 → 3 moves.",
 "idea": "On move i you step i left or right. Work with |target|. Take the smallest k with 1+…+k ≥ target. The overshoot (sum − target) can be fixed by flipping a step of size overshoot/2 to the other direction, which needs the overshoot to be even; otherwise keep increasing k until it is.",
 "input": "target = 2",
 "output": "3",
 "notes": [],
 "best": "On move i you step i left or right. Work with |target|. Take the smallest k with 1+…+k ≥ target. The overshoot (sum − target) can be fixed by flipping a step of size overshoot/2 to the other direction, which needs the overshoot to be even; otherwise keep increasing k until it is.",
 "variants": [
  {
   "name": "Smallest k whose sum covers the target with right parity",
   "code": "class Solution:\n    def reachNumber(self, target):\n        target = abs(target)\n        k = 0\n        total = 0\n        while total < target or (total - target) % 2:\n            k += 1\n            total += k\n        return k",
   "time": "O(√target)",
   "space": "O(1)",
   "explain": "On move i you step i left or right. Work with |target|. Take the smallest k with 1+…+k ≥ target. The overshoot (sum − target) can be fixed by flipping a step of size overshoot/2 to the other direction, which needs the overshoot to be even; otherwise keep increasing k until it is.",
   "frames": []
  }
 ]
};
