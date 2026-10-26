window.PROBLEM = {
 "id": "2008",
 "title": "Maximum Earnings From Taxi",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A taxi drives along a road from point 1 to point n in one direction. rides[i] = [start, end, tip] is a passenger going from start to end who pays (end − start + tip). The taxi carries at most ONE passenger at a time (it may drop someone and pick another up at the same point). Return the maximum money the driver can earn. Example: n=5, rides [[2,5,4],[1,5,1]] → take the first ride: (5−2) + 4 = 7 → 7.",
 "why": "A taxi drives from 1 to n picking up passengers (start, end, tip). A ride earns (end − start + tip). Carry one passenger at a time; maximise earnings.",
 "idea": "dp[x] = best earnings once you reach position x: either carry on from x−1 or finish a ride that ends at x and add its earnings to dp[start].",
 "input": "n=5, rides [[2,5,4],[1,5,1]]",
 "output": "7",
 "notes": [],
 "best": "dp[x] = best earnings once you reach position x: either carry on from x−1 or finish a ride that ends at x and add its earnings to dp[start].",
 "variants": [
  {
   "name": "DP over road positions",
   "code": "class Solution:\n    def maxTaxiEarnings(self, n, rides):\n        by_end = defaultdict(list)\n        for s, e, t in rides: by_end[e].append((s, e - s + t))\n        dp = [0] * (n + 1)\n        for pos in range(1, n + 1):\n            dp[pos] = dp[pos - 1]\n            for s, gain in by_end[pos]: dp[pos] = max(dp[pos], dp[s] + gain)\n        return dp[n]",
   "time": "O(n + rides)",
   "space": "O(n)",
   "explain": "dp[x] = best earnings once you reach position x: either carry on from x−1 or finish a ride that ends at x and add its earnings to dp[start].",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion over sorted rides",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxTaxiEarnings(self, n, rides):\n        rides = sorted(rides)\n        starts = [r[0] for r in rides]\n        @lru_cache(None)\n        def go(i):\n            if i == len(rides): return 0\n            s, e, t = rides[i]\n            nxt = bisect_left(starts, e)\n            return max(go(i + 1), e - s + t + go(nxt))\n        return go(0)",
   "time": "O(r log r)",
   "space": "O(r)",
   "explain": "For each ride, either skip it or take it and jump to the first ride starting at or after its end.",
   "frames": [],
   "alt": true
  }
 ]
};
