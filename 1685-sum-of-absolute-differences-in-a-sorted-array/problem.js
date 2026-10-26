window.PROBLEM = {
 "id": "1685",
 "title": "Sum of Absolute Differences in a Sorted Array",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "nums is sorted. For each index i return the sum of |nums[i] − nums[j]| over all j. Example: [2,3,5] → [4,3,5].",
 "why": "[2,3,5]: for 3: |3−2| + |3−5| = 3; the answers are [4,3,5].",
 "idea": "The array is sorted, so for index i every earlier element is ≤ nums[i] and every later one is ≥. The sum is nums[i]·i − prefix_left + suffix_right − nums[i]·(n−i−1).",
 "input": "nums = [2,3,5]",
 "output": "[4, 3, 5]",
 "notes": [],
 "best": "The array is sorted, so for index i every earlier element is ≤ nums[i] and every later one is ≥. The sum is nums[i]·i − prefix_left + suffix_right − nums[i]·(n−i−1).",
 "variants": [
  {
   "name": "Left and right prefix sums",
   "code": "class Solution:\n    def getSumAbsoluteDifferences(self, nums):\n        total = sum(nums)\n        left = 0\n        n = len(nums)\n        res = []\n        for i, x in enumerate(nums):\n            right = total - left - x\n            res.append(x * i - left + right - x * (n - i - 1))\n            left += x\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The array is sorted, so for index i every earlier element is ≤ nums[i] and every later one is ≥. The sum is nums[i]·i − prefix_left + suffix_right − nums[i]·(n−i−1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sum every difference",
   "tag": "Brute force",
   "code": "class Solution:\n    def getSumAbsoluteDifferences(self, nums):\n        return [sum(abs(a - b) for b in nums) for a in nums]",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Add |nums[i] − nums[j]| over all j for each i.",
   "frames": [],
   "alt": true
  }
 ]
};
