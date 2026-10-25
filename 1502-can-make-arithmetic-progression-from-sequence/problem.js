window.PROBLEM = {
 "id": "1502",
 "title": "Can Make Arithmetic Progression From Sequence",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Return true if the numbers of arr can be rearranged to form an arithmetic progression (every two consecutive terms differ by the same value). Example: [3,5,1] → true.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Use min, max and a set",
   "tag": "Alternative",
   "code": "class Solution:\n    def canMakeArithmeticProgression(self, arr):\n        n = len(arr)\n        mn, mx = min(arr), max(arr)\n        if mn == mx:\n            return True\n        if (mx - mn) % (n - 1):\n            return False\n        d = (mx - mn) // (n - 1)\n        return set(range(mn, mx + 1, d)) == set(arr)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The step must be (max − min) / (n − 1); check that every value of that progression is present.",
   "frames": [],
   "alt": true
  }
 ]
};
