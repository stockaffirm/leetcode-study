window.PROBLEM = {
 "id": "2136",
 "title": "Earliest Possible Day to Full Bloom",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "plant [1,4,3], grow [2,3,1] → plant the 3-day grower first, then the 2-day grower, then the 1-day one → day 9.",
 "idea": "Planting takes your own time one seed after another, but growing runs in the background. To finish soonest, plant seeds with the longest grow time first. Then the finish day is the maximum over seeds of (planting finished + grow time).",
 "input": "plantTime = [1,4,3], growTime = [2,3,1]",
 "output": "9",
 "notes": [],
 "best": "Planting takes your own time one seed after another, but growing runs in the background. To finish soonest, plant seeds with the longest grow time first. Then the finish day is the maximum over seeds of (planting finished + grow time).",
 "variants": [
  {
   "name": "Plant the slowest growers first",
   "code": "class Solution:\n    def earliestFullBloom(self, plantTime, growTime):\n        t = best = 0\n        for g, p in sorted(zip(growTime, plantTime), reverse=True):\n            t += p\n            best = max(best, t + g)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Planting takes your own time one seed after another, but growing runs in the background. To finish soonest, plant seeds with the longest grow time first. Then the finish day is the maximum over seeds of (planting finished + grow time).",
   "frames": []
  }
 ]
};
