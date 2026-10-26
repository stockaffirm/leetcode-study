window.PROBLEM = {
 "id": "3234",
 "title": "Count the Number of Substrings With Dominant Ones",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'00011' → the dominant substrings (ones ≥ zeros²) number 5.",
 "idea": "A substring is dominant when ones ≥ zeros², so it has at most √n zeros. For each start i, look at the first zero, second zero and so on (at most √n of them). With exactly z zeros the end lies between the z-th zero and just before the next zero, and the length must be at least z² + z (z zeros plus z² ones). Count those ends by arithmetic. z = 0 counts the all-ones substrings.",
 "input": "s = \"00011\"",
 "output": "5",
 "notes": [],
 "best": "A substring is dominant when ones ≥ zeros², so it has at most √n zeros. For each start i, look at the first zero, second zero and so on (at most √n of them). With exactly z zeros the end lies between the z-th zero and just before the next zero, and the length must be at least z² + z (z zeros plus z² ones). Count those ends by arithmetic. z = 0 counts the all-ones substrings.",
 "variants": [
  {
   "name": "For each start, walk at most √n zeros and count the valid ends",
   "code": "class Solution:\n    def numberOfSubstrings(self, s):\n        n = len(s)\n        nxt = [n] * (n + 2)\n        for i in range(n - 1, -1, -1):\n            nxt[i] = i if s[i] == '0' else nxt[i + 1]\n        total = 0\n        for i in range(n):\n            cur = nxt[i]\n            total += cur - i\n            z = 1\n            while cur < n and z * z <= n:\n                nz = nxt[cur + 1]\n                lo = max(cur, i + z * z + z - 1)\n                if nz - 1 >= lo:\n                    total += nz - lo\n                cur = nz\n                z += 1\n        return total",
   "time": "O(n√n)",
   "space": "O(n)",
   "explain": "A substring is dominant when ones ≥ zeros², so it has at most √n zeros. For each start i, look at the first zero, second zero and so on (at most √n of them). With exactly z zeros the end lies between the z-th zero and just before the next zero, and the length must be at least z² + z (z zeros plus z² ones). Count those ends by arithmetic. z = 0 counts the all-ones substrings.",
   "frames": []
  }
 ]
};
