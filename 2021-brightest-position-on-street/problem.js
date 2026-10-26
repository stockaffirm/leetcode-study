window.PROBLEM = {
 "id": "2021",
 "title": "Brightest Position on Street",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "Street lamps light a stretch of the street around them. Find the position lit by the MOST lamps (the leftmost if tied).",
 "idea": "Each lamp is an interval [pos − range, pos + range]. Record +1 where it starts and −1 just after it ends, sort these events and sweep left to right keeping a running count.",
 "input": "lights [[-3,2],[1,2],[3,3]]",
 "output": "-1",
 "notes": [],
 "best": "Each lamp is an interval [pos − range, pos + range]. Record +1 where it starts and −1 just after it ends, sort these events and sweep left to right keeping a running count.",
 "variants": [
  {
   "name": "Sweep line over light edges",
   "code": "class Solution:\n    def brightestPosition(self, lights):\n        events = defaultdict(int)\n        for pos, rng in lights:\n            events[pos - rng] += 1\n            events[pos + rng + 1] -= 1\n        best = cur = 0\n        ans = None\n        for p in sorted(events):\n            cur += events[p]\n            if cur > best:\n                best, ans = cur, p\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Each lamp is an interval [pos − range, pos + range]. Record +1 where it starts and −1 just after it ends, sort these events and sweep left to right keeping a running count.",
   "frames": []
  }
 ]
};
