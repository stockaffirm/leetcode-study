window.PROBLEM = {
 "id": "220",
 "title": "Contains Duplicate III",
 "level": "Hard",
 "topic": "Hash Map / Set",
 "question": "Given a list nums and two numbers indexDiff and valueDiff, return true if there are two DIFFERENT positions i and j with |i − j| ≤ indexDiff and |nums[i] − nums[j]| ≤ valueDiff. Example: nums [1,2,3,1], indexDiff 3, valueDiff 0 → positions 0 and 3 hold 1 and 1 → true.",
 "why": "Are there two numbers at most k positions apart whose values differ by at most t?",
 "idea": "Group values into buckets of width t+1: two numbers in the same bucket always differ by ≤ t, and only the two neighbouring buckets need a check. Keep buckets only for the last k numbers.",
 "input": "nums [1,2,3,1], indexDiff=3, valueDiff=0",
 "output": "True",
 "notes": [],
 "best": "Group values into buckets of width t+1: two numbers in the same bucket always differ by ≤ t, and only the two neighbouring buckets need a check. Keep buckets only for the last k numbers.",
 "variants": [
  {
   "name": "Sliding window of value buckets",
   "code": "class Solution:\n    def containsNearbyAlmostDuplicate(self, nums, indexDiff, valueDiff):\n        w = valueDiff + 1\n        buckets = {}\n        for i, x in enumerate(nums):\n            b = x // w\n            if b in buckets: return True\n            if b - 1 in buckets and x - buckets[b - 1] <= valueDiff: return True\n            if b + 1 in buckets and buckets[b + 1] - x <= valueDiff: return True\n            buckets[b] = x\n            if i >= indexDiff: del buckets[nums[i - indexDiff] // w]\n        return False",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Group values into buckets of width t+1: two numbers in the same bucket always differ by ≤ t, and only the two neighbouring buckets need a check. Keep buckets only for the last k numbers.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare every nearby pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def containsNearbyAlmostDuplicate(self, nums, indexDiff, valueDiff):\n        for i in range(len(nums)):\n            for j in range(i + 1, min(len(nums), i + indexDiff + 1)):\n                if abs(nums[i] - nums[j]) <= valueDiff: return True\n        return False",
   "time": "O(n·k)",
   "space": "O(1)",
   "explain": "For each number look at the next k numbers.",
   "frames": [],
   "alt": true
  }
 ]
};
