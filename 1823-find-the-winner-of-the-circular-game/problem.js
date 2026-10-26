window.PROBLEM = {
 "id": "1823",
 "title": "Find the Winner of the Circular Game",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "n friends sit in a circle numbered 1…n. Starting at friend 1, count k friends clockwise (including the start); the last counted leaves, and counting restarts from the next friend. Return the winner. Example: n=5, k=2 → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate with a list",
   "tag": "Brute force",
   "code": "class Solution:\n    def findTheWinner(self, n, k):\n        friends = list(range(1, n + 1))\n        i = 0\n        while len(friends) > 1:\n            i = (i + k - 1) % len(friends)\n            friends.pop(i)\n        return friends[0]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Remove the k-th friend repeatedly from a circle until one is left.",
   "frames": [],
   "alt": true
  }
 ]
};
