window.PROBLEM = {
 "id": "560",
 "title": "Subarray Sum Equals K",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "Count the runs of consecutive numbers that add up to k. [1,2,3], k=3 → [1,2] and [3] → 2.",
 "idea": "A run from i to j sums to k exactly when (prefix sum up to j) − (prefix sum before i) = k. Keep a map of how many times each prefix sum has occurred and look up prefix − k.",
 "input": "[1, 2, 3], k=3",
 "output": "2",
 "notes": [],
 "best": "A run from i to j sums to k exactly when (prefix sum up to j) − (prefix sum before i) = k. Keep a map of how many times each prefix sum has occurred and look up prefix − k.",
 "variants": [
  {
   "name": "Prefix sums + hash map",
   "code": "class Solution:\n    def subarraySum(self, nums, k):\n        count, prefix, seen = 0, 0, {0: 1}\n        for x in nums:\n            prefix += x\n            count += seen.get(prefix - k, 0)\n            seen[prefix] = seen.get(prefix, 0) + 1\n        return count",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A run from i to j sums to k exactly when (prefix sum up to j) − (prefix sum before i) = k. Keep a map of how many times each prefix sum has occurred and look up prefix − k.",
   "frames": []
  }
 ]
};
