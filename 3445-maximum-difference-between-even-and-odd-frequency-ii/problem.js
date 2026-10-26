window.PROBLEM = {
 "id": "3445",
 "title": "Maximum Difference Between Even and Odd Frequency II",
 "level": "Hard",
 "topic": "Prefix Sum",
 "question": "",
 "why": "'1122211', k=3: the window '11222' has 2 three times and 1 twice → 3 − 2 = 1.",
 "idea": "The digits are 0–4, so try every ordered pair (a, b). With prefix counts ca, cb, a window (l, r] needs ca odd, cb even and non-zero, and length ≥ k. Keep the minimum of ca[l] − cb[l] for each parity pair (ca%2, cb%2) over left ends that are far enough (r − l ≥ k) and leave at least two b's; the best window at r pairs with the state that flips ca's parity.",
 "input": "s = \"1122211\", k = 3",
 "output": "1",
 "notes": [],
 "best": "The digits are 0–4, so try every ordered pair (a, b). With prefix counts ca, cb, a window (l, r] needs ca odd, cb even and non-zero, and length ≥ k. Keep the minimum of ca[l] − cb[l] for each parity pair (ca%2, cb%2) over left ends that are far enough (r − l ≥ k) and leave at least two b's; the best window at r pairs with the state that flips ca's parity.",
 "variants": [
  {
   "name": "Per digit pair: prefix counts with parity-state minima",
   "code": "class Solution:\n    def maxDifference(self, s, k):\n        n = len(s)\n        best = float('-inf')\n        for a in '01234':\n            for b in '01234':\n                if a == b:\n                    continue\n                ca = [0] * (n + 1)\n                cb = [0] * (n + 1)\n                for i, c in enumerate(s):\n                    ca[i + 1] = ca[i] + (c == a)\n                    cb[i + 1] = cb[i] + (c == b)\n                low = [float('inf')] * 4\n                l = 0\n                for r in range(k, n + 1):\n                    while r - l >= k and cb[r] - cb[l] >= 2:\n                        st = (ca[l] % 2) * 2 + cb[l] % 2\n                        low[st] = min(low[st], ca[l] - cb[l])\n                        l += 1\n                    st = (1 - ca[r] % 2) * 2 + cb[r] % 2\n                    if low[st] < float('inf'):\n                        best = max(best, ca[r] - cb[r] - low[st])\n        return best",
   "time": "O(25·n)",
   "space": "O(n)",
   "explain": "The digits are 0–4, so try every ordered pair (a, b). With prefix counts ca, cb, a window (l, r] needs ca odd, cb even and non-zero, and length ≥ k. Keep the minimum of ca[l] − cb[l] for each parity pair (ca%2, cb%2) over left ends that are far enough (r − l ≥ k) and leave at least two b's; the best window at r pairs with the state that flips ca's parity.",
   "frames": []
  }
 ]
};
