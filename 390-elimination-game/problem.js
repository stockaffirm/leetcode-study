window.PROBLEM = {
 "id": "390",
 "title": "Elimination Game",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "List 1…n. Remove the first number and every other number after it (left to right); then from the remaining list remove the last number and every other one going right to left; alternate until one number remains. Return it. Example: n=9 → 6.",
 "why": "n=9: left pass, right pass, left pass leaves 6.",
 "idea": "Each pass halves the list. Keep the first element of the remaining arithmetic progression, its step and the remaining count. Passing left always moves the head; passing right moves it only if the count is odd.",
 "input": "n = 9",
 "output": "6",
 "notes": [],
 "best": "Each pass halves the list. Keep the first element of the remaining arithmetic progression, its step and the remaining count. Passing left always moves the head; passing right moves it only if the count is odd.",
 "variants": [
  {
   "name": "Track the head of the remaining list",
   "code": "class Solution:\n    def lastRemaining(self, n):\n        head, step, left, remaining = 1, 1, True, n\n        while remaining > 1:\n            if left or remaining % 2 == 1:\n                head += step\n            remaining //= 2\n            step *= 2\n            left = not left\n        return head",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Each pass halves the list. Keep the first element of the remaining arithmetic progression, its step and the remaining count. Passing left always moves the head; passing right moves it only if the count is odd.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate with lists",
   "tag": "Brute force",
   "code": "class Solution:\n    def lastRemaining(self, n):\n        a = list(range(1, n + 1))\n        left = True\n        while len(a) > 1:\n            a = a[1::2] if left else a[::-1][1::2][::-1]\n            left = not left\n        return a[0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Remove alternating elements from alternating sides.",
   "frames": [],
   "alt": true
  }
 ]
};
