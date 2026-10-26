window.PROBLEM = {
 "id": "755",
 "title": "Pour Water",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
