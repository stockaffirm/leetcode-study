window.PROBLEM = {
 "id": "2851",
 "title": "String Transformation",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "In one operation you move a suffix of s to the front (a rotation). In how many ways can you turn s into t using exactly k operations?",
 "idea": "Each operation rotates by 1..n−1 positions. Track the net rotation: from 'rotation 0' there are n−1 ways to leave; from any other rotation, one way returns to 0 and n−2 ways stay non-zero. A 2×2 matrix raised to the power k counts this fast; multiply by how many rotations of s equal t.",
 "input": "s=\"abcd\", t=\"cdab\", k=2",
 "output": "2",
 "notes": [],
 "best": "Each operation rotates by 1..n−1 positions. Track the net rotation: from 'rotation 0' there are n−1 ways to leave; from any other rotation, one way returns to 0 and n−2 ways stay non-zero. A 2×2 matrix raised to the power k counts this fast; multiply by how many rotations of s equal t.",
 "variants": [
  {
   "name": "Rotation counting + 2×2 matrix power",
   "code": "class Solution:\n    def numberOfWays(self, s, t, k):\n        MOD = 10 ** 9 + 7\n        n = len(s)\n        zero, nonzero = 0, 0\n        ss = s + s\n        for r in range(n):\n            if ss[r:r + n] == t:\n                if r == 0: zero = 1\n                else: nonzero += 1\n        def mul(A, B):\n            return [[sum(A[i][x] * B[x][j] for x in range(2)) % MOD for j in range(2)] for i in range(2)]\n        M = [[0, n - 1], [1, n - 2]]\n        R = [[1, 0], [0, 1]]\n        e = k\n        while e:\n            if e & 1: R = mul(R, M)\n            M = mul(M, M)\n            e >>= 1\n        a, b = R[0][0], R[1][0]\n        return (zero * a + nonzero * b) % MOD",
   "time": "O(n² + log k)",
   "space": "O(1)",
   "explain": "Each operation rotates by 1..n−1 positions. Track the net rotation: from 'rotation 0' there are n−1 ways to leave; from any other rotation, one way returns to 0 and n−2 ways stay non-zero. A 2×2 matrix raised to the power k counts this fast; multiply by how many rotations of s equal t.",
   "frames": []
  }
 ]
};
