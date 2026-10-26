window.PROBLEM = {
 "id": "1610",
 "title": "Maximum Number of Visible Points",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
 "why": "You stand at a spot and can see a slice of angle degrees. Turn to see as many points as possible. Points exactly where you stand are always visible.",
 "idea": "Turn each point into an angle (atan2), sort them, and duplicate the list shifted by 360° so the circle wraps. Then slide a window whose width is at most `angle`.",
 "input": "points [[2,1],[2,2],[3,3]], angle=90, location (1,1)",
 "output": "3",
 "notes": [],
 "best": "Turn each point into an angle (atan2), sort them, and duplicate the list shifted by 360° so the circle wraps. Then slide a window whose width is at most `angle`.",
 "variants": [
  {
   "name": "Sort angles, sliding window over the circle",
   "code": "class Solution:\n    def visiblePoints(self, points, angle, location):\n        same, angs = 0, []\n        for x, y in points:\n            dx, dy = x - location[0], y - location[1]\n            if dx == 0 and dy == 0: same += 1\n            else: angs.append(degrees(atan2(dy, dx)))\n        angs.sort()\n        angs += [a + 360 for a in angs]\n        best, left = 0, 0\n        for right in range(len(angs)):\n            while angs[right] - angs[left] > angle + 1e-9: left += 1\n            best = max(best, right - left + 1)\n        return best + same",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Turn each point into an angle (atan2), sort them, and duplicate the list shifted by 360° so the circle wraps. Then slide a window whose width is at most `angle`.",
   "frames": []
  }
 ]
};
