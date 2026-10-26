window.PROBLEM = {
 "id": "2874",
 "title": "Maximum Value of an Ordered Triplet II",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "Return the maximum value of (nums[i] − nums[j]) × nums[k] over all i < j < k, or 0 if every triplet is negative. Example: [12,6,1,2,7] → 77.",
 "why": "[12,6,1,2,7]: (12 − 1) · 7 = 77.",
 "idea": "Maximise (nums[i] − nums[j]) · nums[k] for i<j<k. Scan k from left to right keeping the maximum prefix value and the maximum difference (max prefix − current) seen so far; the candidate is best_diff × nums[k]. The answer is at least 0.",
 "input": "nums = [12,6,1,2,7]",
 "output": "77",
 "notes": [],
 "best": "Maximise (nums[i] − nums[j]) · nums[k] for i<j<k. Scan k from left to right keeping the maximum prefix value and the maximum difference (max prefix − current) seen so far; the candidate is best_diff × nums[k]. The answer is at least 0.",
 "variants": [
  {
   "name": "Best (nums[i] − nums[j]) so far, times nums[k]",
   "code": "class Solution:\n    def maximumTripletValue(self, nums):\n        best = 0\n        top = 0\n        diff = 0\n        for x in nums:\n            best = max(best, diff * x)\n            diff = max(diff, top - x)\n            top = max(top, x)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Maximise (nums[i] − nums[j]) · nums[k] for i<j<k. Scan k from left to right keeping the maximum prefix value and the maximum difference (max prefix − current) seen so far; the candidate is best_diff × nums[k]. The answer is at least 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every triple",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumTripletValue(self, nums):\n        best = 0\n        for i, j, k in combinations(range(len(nums)), 3):\n            best = max(best, (nums[i] - nums[j]) * nums[k])\n        return best",
   "time": "O(n³)",
   "space": "O(1)",
   "explain": "Evaluate (nums[i] − nums[j]) · nums[k] for all i<j<k.",
   "frames": [],
   "alt": true
  }
 ]
};
