window.PROBLEM = {
 "id": "1751",
 "title": "Maximum Number of Events That Can Be Attended II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Each event has a start, an end and a value. Attend at most k non-overlapping events to maximise the total value.",
 "idea": "Sort by start. For event i you either skip it or take it and jump to the first event starting after it ends (binary search), with one fewer event allowed. Cache by (i, left).",
 "input": "[[1,2,4],[3,4,3],[2,3,1]], k=2",
 "output": "7",
 "notes": [],
 "best": "Sort by start. For event i you either skip it or take it and jump to the first event starting after it ends (binary search), with one fewer event allowed. Cache by (i, left).",
 "variants": [
  {
   "name": "Memo over (event, events left)",
   "code": "class Solution:\n    def maxValue(self, events, k):\n        events.sort()\n        starts = [e[0] for e in events]\n        n = len(events)\n        @lru_cache(None)\n        def go(i, left):\n            if i == n or left == 0: return 0\n            nxt = bisect_right(starts, events[i][1])\n            return max(go(i + 1, left), events[i][2] + go(nxt, left - 1))\n        return go(0, k)",
   "time": "O(n·k log n)",
   "space": "O(n·k)",
   "explain": "Sort by start. For event i you either skip it or take it and jump to the first event starting after it ends (binary search), with one fewer event allowed. Cache by (i, left).",
   "frames": []
  }
 ]
};
