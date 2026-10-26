window.PROBLEM = {
 "id": "1823",
 "title": "Find the Winner of the Circular Game",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=5, k=2: friends leave in order 2, 4, 1, 5 → friend 3 wins.",
 "idea": "With i friends the survivor's index f(i) satisfies f(i) = (f(i−1) + k) mod i, starting from f(1) = 0. The answer is f(n) + 1.",
 "input": "n = 5, k = 2",
 "output": "3",
 "notes": [],
 "best": "With i friends the survivor's index f(i) satisfies f(i) = (f(i−1) + k) mod i, starting from f(1) = 0. The answer is f(n) + 1.",
 "variants": [
  {
   "name": "Josephus recurrence",
   "code": "class Solution:\n    def findTheWinner(self, n, k):\n        pos = 0\n        for i in range(2, n + 1):\n            pos = (pos + k) % i\n        return pos + 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "With i friends the survivor's index f(i) satisfies f(i) = (f(i−1) + k) mod i, starting from f(1) = 0. The answer is f(n) + 1.",
   "frames": []
  }
 ]
};
