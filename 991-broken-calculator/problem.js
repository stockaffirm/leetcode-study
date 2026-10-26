window.PROBLEM = {
 "id": "991",
 "title": "Broken Calculator",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "start 2, target 3: reverse 3 → 4 (add 1) → 2 (halve) = 2 steps.",
 "idea": "Going forward you can double or subtract 1. Reversed: from the target either halve (if even) or add 1 (if odd), until the target is at most the start; then the remaining gap is closed by decrements (start − target steps).",
 "input": "startValue = 2, target = 3",
 "output": "2",
 "notes": [],
 "best": "Going forward you can double or subtract 1. Reversed: from the target either halve (if even) or add 1 (if odd), until the target is at most the start; then the remaining gap is closed by decrements (start − target steps).",
 "variants": [
  {
   "name": "Work backwards from the target",
   "code": "class Solution:\n    def brokenCalc(self, startValue, target):\n        steps = 0\n        while target > startValue:\n            target = target // 2 if target % 2 == 0 else target + 1\n            steps += 1\n        return steps + startValue - target",
   "time": "O(log target)",
   "space": "O(1)",
   "explain": "Going forward you can double or subtract 1. Reversed: from the target either halve (if even) or add 1 (if odd), until the target is at most the start; then the remaining gap is closed by decrements (start − target steps).",
   "frames": []
  }
 ]
};
