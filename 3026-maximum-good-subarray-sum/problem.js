window.PROBLEM = {
 "id": "3026",
 "title": "Maximum Good Subarray Sum",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "A run of numbers (subarray) is good if the absolute difference between its first and its last number is exactly k. Given nums and k, return the maximum sum of a good run, or 0 if there is no good run. Example: [1,2,3,4,5,6], k=1 → the run [5,6] has sum 11 and differs by 1 → 11.",
 "why": "A run is 'good' if its first and last numbers differ by exactly k. Largest sum of a good run?",
 "idea": "For the run ending at x, the first number must be x−k or x+k. Keep, for each value, the smallest prefix sum before an occurrence of it; the best run ending here is (prefix through x) − (that smallest prefix).",
 "input": "[1,2,3,4,5,6], k=1",
 "output": "11",
 "notes": [],
 "best": "For the run ending at x, the first number must be x−k or x+k. Keep, for each value, the smallest prefix sum before an occurrence of it; the best run ending here is (prefix through x) − (that smallest prefix).",
 "variants": [
  {
   "name": "Prefix sums + smallest prefix per value",
   "code": "class Solution:\n    def maximumSubarraySum(self, nums, k):\n        best_pre = {}\n        pre, ans = 0, float('-inf')\n        for x in nums:\n            for v in (x - k, x + k):\n                if v in best_pre: ans = max(ans, pre + x - best_pre[v])\n            if x not in best_pre or pre < best_pre[x]: best_pre[x] = pre\n            pre += x\n        return ans if ans != float('-inf') else 0",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For the run ending at x, the first number must be x−k or x+k. Keep, for each value, the smallest prefix sum before an occurrence of it; the best run ending here is (prefix through x) − (that smallest prefix).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every start/end pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumSubarraySum(self, nums, k):\n        pre = [0]\n        for x in nums: pre.append(pre[-1] + x)\n        best = float('-inf')\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if abs(nums[i] - nums[j]) == k: best = max(best, pre[j + 1] - pre[i])\n        return best if best != float('-inf') else 0",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Try every pair of ends and sum the run with prefix sums.",
   "frames": [],
   "alt": true
  }
 ]
};
