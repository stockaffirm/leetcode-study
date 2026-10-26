window.PROBLEM = {
 "id": "935",
 "title": "Knight Dialer",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=2: from each of the 10 keys the knight has some moves; total 20 numbers.",
 "idea": "On a phone keypad a knight moves from each digit to a fixed list of digits (e.g. 1 → 6, 8). Let ways[d] be the number of numbers of the current length ending on digit d; for the next length each digit's ways are the sum over the digits that can jump to it. Repeat n − 1 times and add everything up modulo 1e9+7.",
 "input": "n = 2",
 "output": "20",
 "notes": [],
 "best": "On a phone keypad a knight moves from each digit to a fixed list of digits (e.g. 1 → 6, 8). Let ways[d] be the number of numbers of the current length ending on digit d; for the next length each digit's ways are the sum over the digits that can jump to it. Repeat n − 1 times and add everything up modulo 1e9+7.",
 "variants": [
  {
   "name": "Count paths along the knight's moves",
   "code": "class Solution:\n    def knightDialer(self, n):\n        MOD = 10**9 + 7\n        moves = {0: (4, 6), 1: (6, 8), 2: (7, 9), 3: (4, 8), 4: (0, 3, 9), 5: (), 6: (0, 1, 7), 7: (2, 6), 8: (1, 3), 9: (2, 4)}\n        ways = [1] * 10\n        for _ in range(n - 1):\n            new = [0] * 10\n            for d in range(10):\n                for t in moves[d]:\n                    new[t] = (new[t] + ways[d]) % MOD\n            ways = new\n        return sum(ways) % MOD",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "On a phone keypad a knight moves from each digit to a fixed list of digits (e.g. 1 → 6, 8). Let ways[d] be the number of numbers of the current length ending on digit d; for the next length each digit's ways are the sum over the digits that can jump to it. Repeat n − 1 times and add everything up modulo 1e9+7.",
   "frames": []
  }
 ]
};
