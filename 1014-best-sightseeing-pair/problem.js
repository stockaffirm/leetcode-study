window.PROBLEM = {
 "id": "1014",
 "title": "Best Sightseeing Pair",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "A pair of sightseeing spots i < j scores values[i] + values[j] + i − j. Return the maximum score. Example: [8,1,5,2,6] → 11.",
 "why": "[8,1,5,2,6]: 8 + 5 + 0 − 2 = 11.",
 "idea": "Score of a pair i<j is (values[i] + i) + (values[j] − j). Scan j from left to right, keeping the best values[i] + i seen before.",
 "input": "values = [8,1,5,2,6]",
 "output": "11",
 "notes": [],
 "best": "Score of a pair i<j is (values[i] + i) + (values[j] − j). Scan j from left to right, keeping the best values[i] + i seen before.",
 "variants": [
  {
   "name": "Track the best values[i] + i so far",
   "code": "class Solution:\n    def maxScoreSightseeingPair(self, values):\n        best_left = values[0]\n        res = 0\n        for j in range(1, len(values)):\n            res = max(res, best_left + values[j] - j)\n            best_left = max(best_left, values[j] + j)\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Score of a pair i<j is (values[i] + i) + (values[j] − j). Scan j from left to right, keeping the best values[i] + i seen before.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check all pairs",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxScoreSightseeingPair(self, values):\n        n = len(values)\n        return max(values[i] + values[j] + i - j for i in range(n) for j in range(i + 1, n))",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Try every pair.",
   "frames": [],
   "alt": true
  }
 ]
};
