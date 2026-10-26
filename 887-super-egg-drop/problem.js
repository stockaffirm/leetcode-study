window.PROBLEM = {
 "id": "887",
 "title": "Super Egg Drop",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You have k identical eggs and a building with n floors. There is a threshold floor above which eggs break when dropped. Return the minimum number of drops that guarantees finding the threshold. Example: k=2, n=6 → 3.",
 "why": "2 eggs, 6 floors: 3 moves are enough (and 2 are not) → 3.",
 "idea": "Flip the question: with m moves and k eggs, how many floors can we distinguish? f(m, k) = f(m−1, k−1) + f(m−1, k) + 1 (drop from a floor: if the egg breaks we continue with one egg fewer, otherwise with the same eggs above). Increase m until f(m, k) ≥ n.",
 "input": "k = 2, n = 6",
 "output": "3",
 "notes": [],
 "best": "Flip the question: with m moves and k eggs, how many floors can we distinguish? f(m, k) = f(m−1, k−1) + f(m−1, k) + 1 (drop from a floor: if the egg breaks we continue with one egg fewer, otherwise with the same eggs above). Increase m until f(m, k) ≥ n.",
 "variants": [
  {
   "name": "How many floors can m moves with k eggs cover?",
   "code": "class Solution:\n    def superEggDrop(self, k, n):\n        dp = [0] * (k + 1)\n        moves = 0\n        while dp[k] < n:\n            moves += 1\n            for e in range(k, 0, -1):\n                dp[e] = dp[e] + dp[e - 1] + 1\n        return moves",
   "time": "O(k·answer)",
   "space": "O(k)",
   "explain": "Flip the question: with m moves and k eggs, how many floors can we distinguish? f(m, k) = f(m−1, k−1) + f(m−1, k) + 1 (drop from a floor: if the egg breaks we continue with one egg fewer, otherwise with the same eggs above). Increase m until f(m, k) ≥ n.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dynamic programming on floors",
   "tag": "Brute force",
   "code": "class Solution:\n    def superEggDrop(self, k, n):\n        @lru_cache(None)\n        def go(e, f):\n            if f == 0:\n                return 0\n            if e == 1:\n                return f\n            return 1 + min(max(go(e - 1, x - 1), go(e, f - x)) for x in range(1, f + 1))\n        return go(k, n)",
   "time": "O(k·n²)",
   "space": "O(k·n)",
   "explain": "dp[e][f] = fewest drops to settle f floors with e eggs: try each floor x, worst of (breaks → below, survives → above).",
   "frames": [],
   "alt": true
  }
 ]
};
