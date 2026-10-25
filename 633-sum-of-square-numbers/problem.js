window.PROBLEM = {
 "id": "633",
 "title": "Sum of Square Numbers",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "Given a non-negative integer c, decide whether there are two integers a and b (they may be equal, or 0) with a² + b² = c. Example: 5 → True (1² + 2²); 3 → False.",
 "why": "Can the number c be written as a² + b² with whole numbers a and b?",
 "idea": "Put one pointer at 0 and one at √c. If the sum of squares is too small move the left up, if too big move the right down.",
 "input": "c = 5",
 "output": "True (1² + 2²)",
 "notes": [],
 "best": "Put one pointer at 0 and one at √c. If the sum of squares is too small move the left up, if too big move the right down.",
 "variants": [
  {
   "name": "Two pointers on 0..√c",
   "code": "class Solution:\n    def judgeSquareSum(self, c):\n        l, r = 0, isqrt(c)\n        while l <= r:\n            s = l * l + r * r\n            if s == c: return True\n            if s < c: l += 1\n            else: r -= 1\n        return False",
   "time": "O(√c)",
   "space": "O(1)",
   "explain": "Put one pointer at 0 and one at √c. If the sum of squares is too small move the left up, if too big move the right down.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every a",
   "tag": "Alternative",
   "code": "class Solution:\n    def judgeSquareSum(self, c):\n        for a in range(isqrt(c) + 1):\n            b = isqrt(c - a * a)\n            if b * b == c - a * a: return True\n        return False",
   "time": "O(√c)",
   "space": "O(1)",
   "explain": "For each a check whether c − a² is a perfect square.",
   "frames": [],
   "alt": true
  }
 ]
};
