window.PROBLEM = {
 "id": "837",
 "title": "New 21 Game",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=6, k=1, maxPts=10: Alice draws once; the chance of ending ≤ 6 is 0.6.",
 "idea": "dp[s] = probability of ever having s points. Alice stops once she has ≥ k points. dp[s] = (sum of dp[s − j] for j = 1…maxPts over states < k) / maxPts, kept with a sliding window sum. The answer is the sum of dp[s] for k ≤ s ≤ n.",
 "input": "n = 6, k = 1, maxPts = 10",
 "output": "0.6",
 "notes": [],
 "best": "dp[s] = probability of ever having s points. Alice stops once she has ≥ k points. dp[s] = (sum of dp[s − j] for j = 1…maxPts over states < k) / maxPts, kept with a sliding window sum. The answer is the sum of dp[s] for k ≤ s ≤ n.",
 "variants": [
  {
   "name": "Sliding window of probabilities",
   "code": "class Solution:\n    def new21Game(self, n, k, maxPts):\n        if k == 0 or n >= k + maxPts - 1:\n            return 1.0\n        dp = [0.0] * (n + 1)\n        dp[0] = 1.0\n        window = 1.0\n        for s in range(1, n + 1):\n            dp[s] = window / maxPts\n            if s < k:\n                window += dp[s]\n            if s - maxPts >= 0 and s - maxPts < k:\n                window -= dp[s - maxPts]\n        return sum(dp[k:])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[s] = probability of ever having s points. Alice stops once she has ≥ k points. dp[s] = (sum of dp[s − j] for j = 1…maxPts over states < k) / maxPts, kept with a sliding window sum. The answer is the sum of dp[s] for k ≤ s ≤ n.",
   "frames": []
  }
 ]
};
