window.PROBLEM = {
 "id": "1921",
 "title": "Eliminate Maximum Number of Monsters",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "dist [1,3,4], speed [1,1,1] → arrival times 1, 3, 4 → all 3 can be shot.",
 "idea": "Monster i reaches the city at time ceil(dist/speed). You shoot once per minute starting at minute 0, so the k-th shot (k = 0, 1, …) must happen before the k-th earliest arrival. Sort arrival times and count how many shots fit.",
 "input": "dist = [1,3,4], speed = [1,1,1]",
 "output": "3",
 "notes": [],
 "best": "Monster i reaches the city at time ceil(dist/speed). You shoot once per minute starting at minute 0, so the k-th shot (k = 0, 1, …) must happen before the k-th earliest arrival. Sort arrival times and count how many shots fit.",
 "variants": [
  {
   "name": "Sort by arrival time, shoot one per minute",
   "code": "class Solution:\n    def eliminateMaximum(self, dist, speed):\n        arrivals = sorted((d + s - 1) // s for d, s in zip(dist, speed))\n        for minute, t in enumerate(arrivals):\n            if t <= minute:\n                return minute\n        return len(dist)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Monster i reaches the city at time ceil(dist/speed). You shoot once per minute starting at minute 0, so the k-th shot (k = 0, 1, …) must happen before the k-th earliest arrival. Sort arrival times and count how many shots fit.",
   "frames": []
  }
 ]
};
