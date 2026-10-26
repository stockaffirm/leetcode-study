window.PROBLEM = {
 "id": "755",
 "title": "Pour Water",
 "level": "Medium",
 "topic": "Array / String",
 "question": "You are given a terrain as a list of heights and `volume` units of water that fall, one at a time, at position k. Each unit moves like this: it tries to go LEFT (moving as far as the ground keeps getting lower or staying flat, and settling at the lowest, nearest spot); if it cannot settle lower on the left it tries the RIGHT in the same way; if it cannot settle lower on either side it stays at k. The unit then raises that position's height by 1. Return the final heights. Example: [2,1,1,2,1,2,2], volume 4, k=3 → [2,2,2,3,2,2,2].",
 "why": "Water drops fall one at a time at a position of a terrain; each drop flows left if it can go down that way, otherwise right, otherwise stays. Where does the water end up?",
 "idea": "For each drop: scan left while the ground does not rise, remembering the lowest (nearest) spot reached; if one lower than the start exists drop there. Otherwise do the same to the right. Otherwise stay at the start.",
 "input": "heights [2,1,1,2,1,2,2], volume 4, position 3",
 "output": "[2,2,2,3,2,2,2]",
 "notes": [],
 "best": "For each drop: scan left while the ground does not rise, remembering the lowest (nearest) spot reached; if one lower than the start exists drop there. Otherwise do the same to the right. Otherwise stay at the start.",
 "variants": [
  {
   "name": "Simulate each drop",
   "code": "class Solution:\n    def pourWater(self, heights, volume, k):\n        for _ in range(volume):\n            for step in (-1, 1):\n                i = best = k\n                while 0 <= i + step < len(heights) and heights[i + step] <= heights[i]:\n                    if heights[i + step] < heights[i]: best = i + step\n                    i += step\n                if best != k:\n                    heights[best] += 1\n                    break\n            else:\n                heights[k] += 1\n        return heights",
   "time": "O(volume · n)",
   "space": "O(1)",
   "explain": "For each drop: scan left while the ground does not rise, remembering the lowest (nearest) spot reached; if one lower than the start exists drop there. Otherwise do the same to the right. Otherwise stay at the start.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remember the best spot per side",
   "tag": "Alternative",
   "code": "class Solution:\n    def pourWater(self, heights, volume, k):\n        for _ in range(volume):\n            pos = k\n            for step in (-1, 1):\n                i, cand = k, None\n                while 0 <= i + step < len(heights) and heights[i + step] <= heights[i]:\n                    i += step\n                    if heights[i] < heights[i - step]: cand = i\n                if cand is not None:\n                    pos = cand\n                    break\n            heights[pos] += 1\n        return heights",
   "time": "O(volume·n)",
   "space": "O(1)",
   "explain": "For each drop look for the nearest strictly lower spot on the left, then on the right.",
   "frames": [],
   "alt": true
  }
 ]
};
