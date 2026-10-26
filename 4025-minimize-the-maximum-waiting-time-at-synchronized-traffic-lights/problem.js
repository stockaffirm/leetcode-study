window.PROBLEM = {
 "id": "4025",
 "title": "Minimize the Maximum Waiting Time at Synchronized Traffic Lights",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "period 8, greens [2,3]: use the light with 3 green seconds for everyone. A car at r = 2 or 0 waits 0; r = 5 waits 8 − 5 = 3; r = 3 waits 8 − 3 = 5 → the worst wait is 5.",
 "idea": "Cars may share a light, and a longer green phase never hurts. So every car uses the light with the longest green time g. A car arriving at r = t % period waits 0 if r < g, otherwise period − r. The answer is the largest wait.",
 "input": "period = 8, lights = [2,3], arrivalTime = [2,5,8,11]",
 "output": "5",
 "notes": [],
 "best": "Cars may share a light, and a longer green phase never hurts. So every car uses the light with the longest green time g. A car arriving at r = t % period waits 0 if r < g, otherwise period − r. The answer is the largest wait.",
 "variants": [
  {
   "name": "Everybody uses the longest green light",
   "code": "class Solution:\n    def minPenalty(self, period, lights, arrivalTime):\n        g = max(lights)\n        worst = 0\n        for t in arrivalTime:\n            r = t % period\n            if r >= g:\n                worst = max(worst, period - r)\n        return worst",
   "time": "O(n + m)",
   "space": "O(1)",
   "explain": "Cars may share a light, and a longer green phase never hurts. So every car uses the light with the longest green time g. A car arriving at r = t % period waits 0 if r < g, otherwise period − r. The answer is the largest wait.",
   "frames": []
  }
 ]
};
