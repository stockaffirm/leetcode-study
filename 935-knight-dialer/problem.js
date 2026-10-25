window.PROBLEM = {
 "id": "935",
 "title": "Knight Dialer",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A chess knight stands on a phone keypad and makes n−1 knight moves, writing down the digit under it after each move (it may start on any digit). Return the number of different digit strings of length n it can produce, modulo 1 000 000 007. Example: n=2 → 20.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Matrix exponentiation",
   "tag": "Alternative",
   "code": "class Solution:\n    def knightDialer(self, n):\n        MOD = 10**9 + 7\n        moves = {0: (4, 6), 1: (6, 8), 2: (7, 9), 3: (4, 8), 4: (0, 3, 9), 5: (), 6: (0, 1, 7), 7: (2, 6), 8: (1, 3), 9: (2, 4)}\n        A = [[0] * 10 for _ in range(10)]\n        for d, ts in moves.items():\n            for t in ts:\n                A[d][t] = 1\n        def mul(X, Y):\n            return [[sum(X[i][k] * Y[k][j] for k in range(10)) % MOD for j in range(10)] for i in range(10)]\n        R = [[int(i == j) for j in range(10)] for i in range(10)]\n        e = n - 1\n        while e:\n            if e & 1:\n                R = mul(R, A)\n            A = mul(A, A)\n            e >>= 1\n        return sum(map(sum, R)) % MOD",
   "time": "O(100·log n)",
   "space": "O(100)",
   "explain": "The move graph is a 10×10 matrix; the answer is the sum of entries of its (n−1)-th power.",
   "frames": [],
   "alt": true
  }
 ]
};
