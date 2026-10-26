window.PROBLEM = {
 "id": "3443",
 "title": "Maximum Manhattan Distance After K Changes",
 "level": "Medium",
 "topic": "Greedy",
 "question": "A string of moves N, S, E, W describes a walk from (0,0). You may change at most k characters to any other direction. Return the largest Manhattan distance (|x|+|y|) from the start that you can be at at ANY moment of the walk. Example: 'NWSE', k=1 → 3.",
 "why": "'NWSE' with 1 change: after N, W, S we stand 1 away from the start; changing S to the opposite way adds 2, so 3 is reachable.",
 "idea": "At every prefix of length i, each change can turn a step that goes 'back' into a step that goes 'forward', adding 2 to the distance. The best distance there is min(current distance + 2k, i). Keep the maximum over all prefixes.",
 "input": "s = \"NWSE\", k = 1",
 "output": "3",
 "notes": [],
 "best": "At every prefix of length i, each change can turn a step that goes 'back' into a step that goes 'forward', adding 2 to the distance. The best distance there is min(current distance + 2k, i). Keep the maximum over all prefixes.",
 "variants": [
  {
   "name": "Greedy: distance so far + 2 per change",
   "code": "class Solution:\n    def maxDistance(self, s, k):\n        x = y = best = 0\n        for i, ch in enumerate(s, 1):\n            if ch == \"N\":\n                y += 1\n            elif ch == \"S\":\n                y -= 1\n            elif ch == \"E\":\n                x += 1\n            else:\n                x -= 1\n            best = max(best, min(abs(x) + abs(y) + 2 * k, i))\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "At every prefix of length i, each change can turn a step that goes 'back' into a step that goes 'forward', adding 2 to the distance. The best distance there is min(current distance + 2k, i). Keep the maximum over all prefixes.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pick a direction and flip the worst moves",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxDistance(self, s, k):\n        best = 0\n        dxs = {\"E\": 1, \"W\": -1}\n        dys = {\"N\": 1, \"S\": -1}\n        for sx in (1, -1):\n            for sy in (1, -1):\n                cur = bad = 0\n                for ch in s:\n                    v = dxs.get(ch, 0) * sx + dys.get(ch, 0) * sy\n                    cur += v\n                    if v < 0:\n                        bad += 1\n                    best = max(best, cur + 2 * min(bad, k))\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each of the 4 diagonal targets, a move is +1 if it heads there and −1 if not; flipping up to k of the −1 moves adds 2 each.",
   "frames": [],
   "alt": true
  }
 ]
};
