window.PROBLEM = {
 "id": "3026",
 "title": "Maximum Good Subarray Sum",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
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
   "frames": []
  }
 ]
};
