window.PROBLEM = {
 "id": "2270",
 "title": "Number of Ways to Split Array",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "Given a list nums, a split position i (0 ≤ i < n−1) cuts it into a left part nums[0..i] and a right part nums[i+1..], both non-empty. A split is valid if the sum of the left part is at least the sum of the right part. Return the number of valid splits. Example: [10,4,-8,7] → splits after position 0 (10 ≥ 3) and position 1 (14 ≥ −1) are valid; after position 2 (6 ≥ 7) is not → 2.",
 "why": "Cut the list into a non-empty left part and non-empty right part so that the left sum is at least the right sum. How many cuts work?",
 "idea": "Know the total once. Walking left to right, the right sum is total − left sum, so each cut is checked in O(1).",
 "input": "[10, 4, -8, 7]",
 "output": "2",
 "notes": [],
 "best": "Know the total once. Walking left to right, the right sum is total − left sum, so each cut is checked in O(1).",
 "variants": [
  {
   "name": "Running left sum vs the rest",
   "code": "class Solution:\n    def waysToSplitArray(self, nums):\n        total, left, ways = sum(nums), 0, 0\n        for i in range(len(nums) - 1):\n            left += nums[i]\n            if left >= total - left: ways += 1\n        return ways",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Know the total once. Walking left to right, the right sum is total − left sum, so each cut is checked in O(1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix sum array",
   "tag": "Alternative",
   "code": "class Solution:\n    def waysToSplitArray(self, nums):\n        pre = list(accumulate(nums))\n        return sum(1 for i in range(len(nums) - 1) if pre[i] >= pre[-1] - pre[i])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build all prefix sums first, then check each cut against the total.",
   "frames": [],
   "alt": true
  }
 ]
};
