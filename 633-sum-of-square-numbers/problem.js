window.PROBLEM = {
 "id": "633",
 "title": "Sum of Square Numbers",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
