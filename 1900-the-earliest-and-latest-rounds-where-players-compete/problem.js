window.PROBLEM = {
 "id": "1900",
 "title": "The Earliest and Latest Rounds Where Players Compete",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=11, first 2, second 4 → they can meet as early as round 3 and as late as round 4.",
 "idea": "Only the positions of the two special players matter. If they are mirror images (positions add to n+1) they meet this round. Otherwise reflect so the pair is in the left part, then try every way the other players can win: how many survivors land before the first, and between the two. Recurse on the halved row.",
 "input": "n = 11, firstPlayer = 2, secondPlayer = 4",
 "output": "[3, 4]",
 "notes": [],
 "best": "Only the positions of the two special players matter. If they are mirror images (positions add to n+1) they meet this round. Otherwise reflect so the pair is in the left part, then try every way the other players can win: how many survivors land before the first, and between the two. Recurse on the halved row.",
 "variants": [
  {
   "name": "Memoised recursion on (players, position of first, position of second)",
   "code": "class Solution:\n    def earliestAndLatest(self, n, firstPlayer, secondPlayer):\n        @lru_cache(None)\n        def dp(n, f, s):\n            if f + s == n + 1:\n                return (1, 1)\n            if f + s > n + 1:\n                return dp(n, n + 1 - s, n + 1 - f)\n            half = (n + 1) // 2\n            lo, hi = float('inf'), 0\n            if s <= n + 1 - s:\n                for a in range(f):\n                    for b in range(s - f):\n                        r = dp(half, a + 1, a + b + 2)\n                        lo, hi = min(lo, r[0] + 1), max(hi, r[1] + 1)\n            else:\n                o = n + 1 - s\n                for a in range(f):\n                    for b in range(o - f):\n                        r = dp(half, a + 1, a + b + (s - o) // 2 + 2)\n                        lo, hi = min(lo, r[0] + 1), max(hi, r[1] + 1)\n            return (lo, hi)\n        return list(dp(n, firstPlayer, secondPlayer))",
   "time": "O(n⁴)",
   "space": "O(n³)",
   "explain": "Only the positions of the two special players matter. If they are mirror images (positions add to n+1) they meet this round. Otherwise reflect so the pair is in the left part, then try every way the other players can win: how many survivors land before the first, and between the two. Recurse on the halved row.",
   "frames": []
  }
 ]
};
