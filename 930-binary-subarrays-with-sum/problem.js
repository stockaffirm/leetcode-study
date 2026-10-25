window.PROBLEM = {
 "id": "930",
 "title": "Binary Subarrays With Sum",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "Given a list nums of 0s and 1s and a whole number goal, return how many runs of numbers sitting next to each other (subarrays) add up to exactly goal. Example: [1,0,1,0,1], goal=2 → the runs [1,0,1] (first three), [1,0,1,0], [0,1,0,1] and [1,0,1] (last three) each add to 2 → 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sliding window: atMost(goal) − atMost(goal−1)",
   "tag": "Alternative",
   "code": "class Solution:\n    def numSubarraysWithSum(self, nums, goal):\n        def at_most(g):\n            if g < 0: return 0\n            left = total = res = 0\n            for right, x in enumerate(nums):\n                total += x\n                while total > g:\n                    total -= nums[left]\n                    left += 1\n                res += right - left + 1\n            return res\n        return at_most(goal) - at_most(goal - 1)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count windows with sum ≤ goal and subtract those with sum ≤ goal−1.",
   "frames": [],
   "alt": true
  }
 ]
};
