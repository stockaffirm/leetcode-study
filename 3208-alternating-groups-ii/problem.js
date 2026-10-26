window.PROBLEM = {
 "id": "3208",
 "title": "Alternating Groups II",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
