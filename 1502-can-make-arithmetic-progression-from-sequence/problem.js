window.PROBLEM = {
 "id": "1502",
 "title": "Can Make Arithmetic Progression From Sequence",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[3,5,1] sorted is 1,3,5 — every gap is 2 → true.",
 "idea": "Sort the numbers and check that all neighbouring differences are equal.",
 "input": "arr = [3,5,1]",
 "output": "true",
 "notes": [],
 "best": "Sort the numbers and check that all neighbouring differences are equal.",
 "variants": [
  {
   "name": "Sort and compare the gaps",
   "code": "class Solution:\n    def canMakeArithmeticProgression(self, arr):\n        a = sorted(arr)\n        d = a[1] - a[0]\n        return all(a[i + 1] - a[i] == d for i in range(len(a) - 1))",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort the numbers and check that all neighbouring differences are equal.",
   "frames": []
  }
 ]
};
