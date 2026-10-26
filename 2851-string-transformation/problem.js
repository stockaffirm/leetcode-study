window.PROBLEM = {
 "id": "2851",
 "title": "String Transformation",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "You are given two strings s and t of the same length and a number k. In one operation you take a suffix of s (the last l letters, 0 < l < n) and move it to the front (so 'abcd' with l=2 becomes 'cdab'). Return the number of different sequences of EXACTLY k operations that turn s into t, modulo 1,000,000,007. Two sequences are different if at some step they use different values of l. Example: s='abcd', t='cdab', k=2 → 2 ways.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate k operations",
   "tag": "Brute force",
   "code": "class Solution:\n    def numberOfWays(self, s, t, k):\n        MOD = 10 ** 9 + 7\n        n = len(s)\n        ways = [0] * n\n        ways[0] = 1\n        for _ in range(k):\n            nxt = [0] * n\n            for r in range(n):\n                if ways[r]:\n                    for l in range(1, n):\n                        nxt[(r + l) % n] = (nxt[(r + l) % n] + ways[r]) % MOD\n            ways = nxt\n        ss = s + s\n        return sum(ways[r] for r in range(n) if ss[r:r + n] == t) % MOD",
   "time": "O(k·n²)",
   "space": "O(n)",
   "explain": "Track how many operation sequences end at each net rotation, step by step (fine for small k).",
   "frames": [],
   "alt": true
  }
 ]
};
