window.PROBLEM = {
 "id": "871",
 "title": "Minimum Number of Refueling Stops",
 "level": "Hard",
 "topic": "Heap",
 "question": "A car starts with startFuel units of fuel and wants to reach a target distance; one unit of fuel drives one unit of distance. stations[i] = [position, fuel] is a fuel station on the way (when you stop there you take ALL its fuel). Return the fewest refuelling stops needed to reach the target, or -1 if it is impossible. Example: target 100, start fuel 10, stations [[10,60],[20,30],[30,30],[60,40]] → stop at 10 (+60) and at 60 (+40) → 2.",
 "why": "A car must travel `target` miles with limited fuel and fuel stations on the way. Fewest refuelling stops?",
 "idea": "Drive as far as the fuel allows, remembering the fuel amount at every station you passed in a max-heap. When you can't go on, retroactively refuel at the biggest passed station.",
 "input": "target 100, start fuel 10, stations [[10,60],[20,30],[30,30],[60,40]]",
 "output": "2",
 "notes": [],
 "best": "Drive as far as the fuel allows, remembering the fuel amount at every station you passed in a max-heap. When you can't go on, retroactively refuel at the biggest passed station.",
 "variants": [
  {
   "name": "Greedy with a max-heap of passed stations",
   "code": "class Solution:\n    def minRefuelStops(self, target, startFuel, stations):\n        heap, fuel, stops, i = [], startFuel, 0, 0\n        while fuel < target:\n            while i < len(stations) and stations[i][0] <= fuel:\n                heappush(heap, -stations[i][1])\n                i += 1\n            if not heap: return -1\n            fuel += -heappop(heap)\n            stops += 1\n        return stops",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Drive as far as the fuel allows, remembering the fuel amount at every station you passed in a max-heap. When you can't go on, retroactively refuel at the biggest passed station.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP on the farthest distance",
   "tag": "Alternative",
   "code": "class Solution:\n    def minRefuelStops(self, target, startFuel, stations):\n        dp = [startFuel] + [0] * len(stations)\n        for i, (loc, cap) in enumerate(stations):\n            for k in range(i, -1, -1):\n                if dp[k] >= loc: dp[k + 1] = max(dp[k + 1], dp[k] + cap)\n        for k, far in enumerate(dp):\n            if far >= target: return k\n        return -1",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "dp[k] = farthest reachable with k stops; update with each station.",
   "frames": [],
   "alt": true
  }
 ]
};
