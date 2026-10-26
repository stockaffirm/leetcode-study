window.PROBLEM = {
 "id": "3680",
 "title": "Generate Schedule",
 "level": "Medium",
 "topic": "Greedy",
 "question": "n teams must play every other team twice (once at home, once away): n(n−1) matches, one match per day, and no team may play on two consecutive days. Return a schedule as a list of [home, away] pairs (any valid one), or an empty list if none exists. Example: n=3 → []; n=5 has a 20-day schedule.",
 "why": "n=5 gives a 20-day schedule such as [0,1],[2,3],[0,4],[1,2],… with no team playing two days in a row; n ≤ 4 is impossible.",
 "idea": "There are n(n−1) matches (every ordered pair). For n ≤ 4 no schedule exists. Otherwise build the days one by one: among the remaining matches that use neither team from the previous day, play the one whose two teams still have the most matches left (ties: smallest ids). This keeps busy teams from getting stuck at the end.",
 "input": "n = 5",
 "output": "20 matches, e.g. [[0,1],[2,3],[0,4],[1,2],…]",
 "notes": [],
 "best": "There are n(n−1) matches (every ordered pair). For n ≤ 4 no schedule exists. Otherwise build the days one by one: among the remaining matches that use neither team from the previous day, play the one whose two teams still have the most matches left (ties: smallest ids). This keeps busy teams from getting stuck at the end.",
 "variants": [
  {
   "name": "Greedy: busiest teams first, never repeat a team",
   "code": "class Solution:\n    def generateSchedule(self, n):\n        if n < 5:\n            return []\n        rem = {(i, j) for i in range(n) for j in range(n) if i != j}\n        left = [2 * (n - 1)] * n\n        res = []\n        last = set()\n        while rem:\n            best = None\n            for a, b in rem:\n                if a in last or b in last:\n                    continue\n                key = (left[a] + left[b], -a, -b)\n                if best is None or key > best[0]:\n                    best = (key, (a, b))\n            a, b = best[1]\n            rem.discard((a, b))\n            left[a] -= 1\n            left[b] -= 1\n            res.append([a, b])\n            last = {a, b}\n        return res",
   "time": "O(n⁴)",
   "space": "O(n²)",
   "explain": "There are n(n−1) matches (every ordered pair). For n ≤ 4 no schedule exists. Otherwise build the days one by one: among the remaining matches that use neither team from the previous day, play the one whose two teams still have the most matches left (ties: smallest ids). This keeps busy teams from getting stuck at the end.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Same greedy over a sorted pool",
   "tag": "Alternative",
   "code": "class Solution:\n    def generateSchedule(self, n):\n        if n < 5:\n            return []\n        pool = sorted((i, j) for i in range(n) for j in range(n) if i != j)\n        left = {t: 2 * (n - 1) for t in range(n)}\n        res = []\n        prev = ()\n        while pool:\n            ok = [m for m in pool if m[0] not in prev and m[1] not in prev]\n            a, b = max(ok, key=lambda m: (left[m[0]] + left[m[1]], -m[0], -m[1]))\n            pool.remove((a, b))\n            left[a] -= 1\n            left[b] -= 1\n            res.append([a, b])\n            prev = (a, b)\n        return res",
   "time": "O(n⁴)",
   "space": "O(n²)",
   "explain": "Keep the unplayed matches in a sorted list and pick the allowed one with the largest total of remaining matches.",
   "frames": [],
   "alt": true
  }
 ]
};
