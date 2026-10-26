window.PROBLEM = {
 "id": "367",
 "title": "Valid Perfect Square",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "Decide whether a positive integer is a perfect square (the square of an integer) — without calling a built-in square-root function. Example: 16 → True; 14 → False.",
 "why": "Decide whether a positive integer is a perfect square, without using a square-root function.",
 "idea": "Binary search a number r in [1, n] with r·r compared to n.",
 "input": "num = 16",
 "output": "True",
 "notes": [],
 "best": "Binary search a number r in [1, n] with r·r compared to n.",
 "variants": [
  {
   "name": "Binary search for the root",
   "code": "class Solution:\n    def isPerfectSquare(self, num):\n        lo, hi = 1, num\n        while lo <= hi:\n            mid = (lo + hi) // 2\n            if mid * mid == num: return True\n            if mid * mid < num: lo = mid + 1\n            else: hi = mid - 1\n        return False",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Binary search a number r in [1, n] with r·r compared to n.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Newton's method",
   "tag": "Alternative",
   "code": "class Solution:\n    def isPerfectSquare(self, num):\n        x = num\n        while x * x > num: x = (x + num // x) // 2\n        return x * x == num",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Newton iteration converges to ⌊√n⌋ quickly.",
   "frames": [],
   "alt": true
  }
 ]
};
