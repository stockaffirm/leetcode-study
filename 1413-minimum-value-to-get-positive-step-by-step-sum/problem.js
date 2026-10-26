window.PROBLEM = {
 "id": "1413",
 "title": "Minimum Value to Get Positive Step by Step Sum",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[-3,2,-3,4,2]: prefix sums −3,−1,−4,0,2; lowest is −4 so the start must be 5.",
 "idea": "With start value v the running sum after i steps is v + prefix[i]; it must stay ≥ 1. The worst case is the lowest prefix, so v = 1 − min prefix (at least 1).",
 "input": "nums = [-3,2,-3,4,2]",
 "output": "5",
 "notes": [],
 "best": "With start value v the running sum after i steps is v + prefix[i]; it must stay ≥ 1. The worst case is the lowest prefix, so v = 1 − min prefix (at least 1).",
 "variants": [
  {
   "name": "Lift the lowest prefix sum to 1",
   "code": "class Solution:\n    def minStartValue(self, nums):\n        lowest = run = 0\n        for x in nums:\n            run += x\n            lowest = min(lowest, run)\n        return 1 - lowest",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "With start value v the running sum after i steps is v + prefix[i]; it must stay ≥ 1. The worst case is the lowest prefix, so v = 1 − min prefix (at least 1).",
   "frames": []
  }
 ]
};
