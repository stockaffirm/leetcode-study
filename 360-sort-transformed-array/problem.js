window.PROBLEM = {
 "id": "360",
 "title": "Sort Transformed Array",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Given a sorted list of numbers and three numbers a, b, c, replace every x by a·x² + b·x + c and return the new list sorted ascending. Example: [−4,−2,2,4], a=1, b=3, c=5 → [3,9,15,33].",
 "why": "Apply f(x) = a·x² + b·x + c to every number of a sorted list and return the results sorted.",
 "idea": "f is a parabola. If it opens upward (a ≥ 0) the biggest results are at the two ends of the sorted input, if it opens downward the smallest are. Fill the answer from the end (or start) taking the extreme end each time.",
 "input": "[-4,-2,2,4], a=1, b=3, c=5",
 "output": "[3,9,15,33]",
 "notes": [],
 "best": "f is a parabola. If it opens upward (a ≥ 0) the biggest results are at the two ends of the sorted input, if it opens downward the smallest are. Fill the answer from the end (or start) taking the extreme end each time.",
 "variants": [
  {
   "name": "Two pointers from both ends",
   "code": "class Solution:\n    def sortTransformedArray(self, nums, a, b, c):\n        f = lambda x: a * x * x + b * x + c\n        n = len(nums)\n        res = [0] * n\n        l, r = 0, n - 1\n        i = n - 1 if a >= 0 else 0\n        while l <= r:\n            fl, fr = f(nums[l]), f(nums[r])\n            if a >= 0:\n                if fl > fr:\n                    res[i] = fl\n                    l += 1\n                else:\n                    res[i] = fr\n                    r -= 1\n                i -= 1\n            else:\n                if fl < fr:\n                    res[i] = fl\n                    l += 1\n                else:\n                    res[i] = fr\n                    r -= 1\n                i += 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "f is a parabola. If it opens upward (a ≥ 0) the biggest results are at the two ends of the sorted input, if it opens downward the smallest are. Fill the answer from the end (or start) taking the extreme end each time.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Transform, then sort",
   "tag": "Alternative",
   "code": "class Solution:\n    def sortTransformedArray(self, nums, a, b, c):\n        return sorted(a * x * x + b * x + c for x in nums)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Apply f to every number and sort the results.",
   "frames": [],
   "alt": true
  }
 ]
};
