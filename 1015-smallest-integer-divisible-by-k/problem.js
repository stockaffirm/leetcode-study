window.PROBLEM = {
 "id": "1015",
 "title": "Smallest Integer Divisible by K",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "K=3 → 111 is divisible by 3 → length 3.",
 "idea": "We only need the remainder of the repunit (1, 11, 111, …) modulo K: next = (rem·10 + 1) % K. If K is even or a multiple of 5 the answer is −1; otherwise a remainder of 0 appears within K steps (pigeonhole), and that step count is the length.",
 "input": "k = 3",
 "output": "3",
 "notes": [],
 "best": "We only need the remainder of the repunit (1, 11, 111, …) modulo K: next = (rem·10 + 1) % K. If K is even or a multiple of 5 the answer is −1; otherwise a remainder of 0 appears within K steps (pigeonhole), and that step count is the length.",
 "variants": [
  {
   "name": "Grow 1, 11, 111 … modulo K",
   "code": "class Solution:\n    def smallestRepunitDivByK(self, k):\n        if k % 2 == 0 or k % 5 == 0:\n            return -1\n        rem = 0\n        for length in range(1, k + 1):\n            rem = (rem * 10 + 1) % k\n            if rem == 0:\n                return length\n        return -1",
   "time": "O(K)",
   "space": "O(1)",
   "explain": "We only need the remainder of the repunit (1, 11, 111, …) modulo K: next = (rem·10 + 1) % K. If K is even or a multiple of 5 the answer is −1; otherwise a remainder of 0 appears within K steps (pigeonhole), and that step count is the length.",
   "frames": []
  }
 ]
};
