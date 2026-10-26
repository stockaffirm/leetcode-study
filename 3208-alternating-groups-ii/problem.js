window.PROBLEM = {
 "id": "3208",
 "title": "Alternating Groups II",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Coloured tiles are arranged in a CIRCLE: colors[i] is 0 (red) or 1 (blue), and the last tile is next to the first. A group is k tiles in a row (going round the circle if needed) whose colours alternate (every tile differs from its neighbour). Return the number of alternating groups. Example: colors [0,1,0,1,0], k=3 → the groups starting at positions 0, 1 and 2 alternate (and so do some that wrap) → 3.",
 "why": "Tiles in a circle are red (0) or blue (1). A 'group' is k tiles in a row whose colours alternate. Count the groups (the circle wraps around).",
 "idea": "Append the first k−1 tiles to the end to handle the wrap-around. Walk along keeping the length of the current alternating run; every position where that run is at least k ends one group.",
 "input": "colors [0,1,0,1,0], k=3",
 "output": "3",
 "notes": [],
 "best": "Append the first k−1 tiles to the end to handle the wrap-around. Walk along keeping the length of the current alternating run; every position where that run is at least k ends one group.",
 "variants": [
  {
   "name": "Extend the circle, track the alternating run",
   "code": "class Solution:\n    def numberOfAlternatingGroups(self, colors, k):\n        n = len(colors)\n        ext = colors + colors[:k - 1]\n        count = 0\n        run = 1\n        for i in range(1, len(ext)):\n            run = run + 1 if ext[i] != ext[i - 1] else 1\n            if run >= k: count += 1\n        return count",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Append the first k−1 tiles to the end to handle the wrap-around. Walk along keeping the length of the current alternating run; every position where that run is at least k ends one group.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every starting tile",
   "tag": "Brute force",
   "code": "class Solution:\n    def numberOfAlternatingGroups(self, colors, k):\n        n = len(colors)\n        count = 0\n        for s in range(n):\n            if all(colors[(s + i) % n] != colors[(s + i + 1) % n] for i in range(k - 1)): count += 1\n        return count",
   "time": "O(n·k)",
   "space": "O(1)",
   "explain": "For each start walk k tiles around the circle and check they alternate.",
   "frames": [],
   "alt": true
  }
 ]
};
