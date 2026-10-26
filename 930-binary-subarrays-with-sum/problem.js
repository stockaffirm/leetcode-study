window.PROBLEM = {
 "id": "930",
 "title": "Binary Subarrays With Sum",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "Count the runs of a 0/1 list whose total equals goal. [1,0,1,0,1], goal=2 → 4.",
 "idea": "Same trick as 'subarray sum equals k': count how often each running total has occurred and add the count of (running total − goal).",
 "input": "[1, 0, 1, 0, 1], goal=2",
 "output": "4",
 "notes": [],
 "best": "Same trick as 'subarray sum equals k': count how often each running total has occurred and add the count of (running total − goal).",
 "variants": [
  {
   "name": "Prefix sums + hash map",
   "code": "class Solution:\n    def numSubarraysWithSum(self, nums, goal):\n        count, prefix, seen = 0, 0, {0: 1}\n        for x in nums:\n            prefix += x\n            count += seen.get(prefix - goal, 0)\n            seen[prefix] = seen.get(prefix, 0) + 1\n        return count",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Same trick as 'subarray sum equals k': count how often each running total has occurred and add the count of (running total − goal).",
   "frames": []
  }
 ]
};
