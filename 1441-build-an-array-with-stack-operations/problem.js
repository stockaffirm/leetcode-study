window.PROBLEM = {
 "id": "1441",
 "title": "Build an Array With Stack Operations",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "target [1,3], n=3 → Push, Push, Pop, Push.",
 "idea": "Read the numbers 1, 2, 3, … in order. Always Push; if the number is not the next target value, Pop it again. Stop after the last target value.",
 "input": "target = [1,3], n = 3",
 "output": "['Push', 'Push', 'Pop', 'Push']",
 "notes": [],
 "best": "Read the numbers 1, 2, 3, … in order. Always Push; if the number is not the next target value, Pop it again. Stop after the last target value.",
 "variants": [
  {
   "name": "Push every number, pop the ones not wanted",
   "code": "class Solution:\n    def buildArray(self, target, n):\n        ops = []\n        want = 0\n        for x in range(1, n + 1):\n            if want == len(target):\n                break\n            ops.append(\"Push\")\n            if x == target[want]:\n                want += 1\n            else:\n                ops.append(\"Pop\")\n        return ops",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Read the numbers 1, 2, 3, … in order. Always Push; if the number is not the next target value, Pop it again. Stop after the last target value.",
   "frames": []
  }
 ]
};
