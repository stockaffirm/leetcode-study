window.PROBLEM = {
 "id": "3700",
 "title": "Number of ZigZag Arrays II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=3, values 4…5: [4,5,4] and [5,4,5] → 2.",
 "idea": "State = (last value, did the last step go up or down). From an 'up' ending the next step must go down to a smaller value and vice versa, so the counts for length t+1 are linear in those for length t. The values range over at most 75 numbers, so build the 2m×2m transition matrix and raise it to the power n − 2 by repeated squaring, starting from the counts for length 2. Modulo 1e9+7.",
 "input": "n = 3, l = 4, r = 5",
 "output": "2",
 "notes": [],
 "best": "State = (last value, did the last step go up or down). From an 'up' ending the next step must go down to a smaller value and vice versa, so the counts for length t+1 are linear in those for length t. The values range over at most 75 numbers, so build the 2m×2m transition matrix and raise it to the power n − 2 by repeated squaring, starting from the counts for length 2. Modulo 1e9+7.",
 "variants": [
  {
   "name": "Transition matrix raised to the power n − 2",
   "code": "class Solution:\n    def zigZagArrays(self, n, l, r):\n        MOD = 10**9 + 7\n        m = r - l + 1\n        size = 2 * m\n        vec = [v for v in range(m)] + [m - 1 - v for v in range(m)]\n        T = [[0] * size for _ in range(size)]\n        for v in range(m):\n            for u in range(v):\n                T[v][m + u] = 1\n            for u in range(v + 1, m):\n                T[m + v][u] = 1\n        def mul(A, B):\n            return [[sum(A[i][k] * B[k][j] for k in range(size)) % MOD for j in range(size)] for i in range(size)]\n        R = [[int(i == j) for j in range(size)] for i in range(size)]\n        e = n - 2\n        while e:\n            if e & 1:\n                R = mul(R, T)\n            T = mul(T, T)\n            e >>= 1\n        return sum(sum(R[i][k] * vec[k] for k in range(size)) for i in range(size)) % MOD",
   "time": "O((2m)³ log n)",
   "space": "O((2m)²)",
   "explain": "State = (last value, did the last step go up or down). From an 'up' ending the next step must go down to a smaller value and vice versa, so the counts for length t+1 are linear in those for length t. The values range over at most 75 numbers, so build the 2m×2m transition matrix and raise it to the power n − 2 by repeated squaring, starting from the counts for length 2. Modulo 1e9+7.",
   "frames": []
  }
 ]
};
