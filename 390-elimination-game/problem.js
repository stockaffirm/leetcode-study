window.PROBLEM = {
 "id": "390",
 "title": "Elimination Game",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
