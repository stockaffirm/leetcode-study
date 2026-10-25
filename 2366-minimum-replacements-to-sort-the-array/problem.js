window.PROBLEM = {
 "id": "2366",
 "title": "Minimum Replacements to Sort the Array",
 "level": "Hard",
 "topic": "Greedy",
 "question": "In one operation replace a number by two positive integers that add up to it. Return the minimum operations to make nums non-decreasing. Example: [3,9,3] → 2.",
 "why": "[3,9,3]: split 9 into 3+3+3 (2 operations) → [3,3,3,3,3] sorted → 2.",
 "idea": "Walk from the right keeping the limit prev (the smallest value allowed). If the number is ≤ prev just lower the limit to it. Otherwise it must be split into k = ceil(x / prev) parts; splitting as evenly as possible makes the smallest part x // k as large as possible, so the new limit is x // k. That costs k − 1 operations.",
 "input": "nums = [3,9,3]",
 "output": "2",
 "notes": [],
 "best": "Walk from the right keeping the limit prev (the smallest value allowed). If the number is ≤ prev just lower the limit to it. Otherwise it must be split into k = ceil(x / prev) parts; splitting as evenly as possible makes the smallest part x // k as large as possible, so the new limit is x // k. That costs k − 1 operations.",
 "variants": [
  {
   "name": "From the right, split into the fewest, evenest parts",
   "code": "class Solution:\n    def minimumReplacement(self, nums):\n        ops = 0\n        prev = nums[-1]\n        for x in reversed(nums[:-1]):\n            if x <= prev:\n                prev = x\n                continue\n            k = (x + prev - 1) // prev\n            ops += k - 1\n            prev = x // k\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk from the right keeping the limit prev (the smallest value allowed). If the number is ≤ prev just lower the limit to it. Otherwise it must be split into k = ceil(x / prev) parts; splitting as evenly as possible makes the smallest part x // k as large as possible, so the new limit is x // k. That costs k − 1 operations.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Search the number of parts",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumReplacement(self, nums):\n        ops = 0\n        prev = nums[-1]\n        for x in reversed(nums[:-1]):\n            if x <= prev:\n                prev = x\n                continue\n            k = 2\n            while (x + k - 1) // k > prev:\n                k += 1\n            ops += k - 1\n            prev = x // k\n        return ops",
   "time": "O(n·x)",
   "space": "O(1)",
   "explain": "For a too-large number find the smallest split count whose biggest part fits under the limit, by trying 2, 3, 4 … parts.",
   "frames": [],
   "alt": true
  }
 ]
};
