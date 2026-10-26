window.PROBLEM = {
 "id": "3443",
 "title": "Maximum Manhattan Distance After K Changes",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
