window.PROBLEM = {
 "id": "2008",
 "title": "Maximum Earnings From Taxi",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
