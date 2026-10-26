window.PROBLEM = {
 "id": "3680",
 "title": "Generate Schedule",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
