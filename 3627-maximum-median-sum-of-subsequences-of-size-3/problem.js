window.PROBLEM = {
 "id": "3627",
 "title": "Maximum Median Sum of Subsequences of Size 3",
 "level": "Medium",
 "topic": "Greedy",
 "question": "nums has length divisible by 3. In each step pick any three elements, add their median to the score and remove them. Return the maximum possible score. Example: [2,1,3,2,1,3] → 5.",
 "why": "[2,1,3,2,1,3] sorted [1,1,2,2,3,3]: medians 3 and 2 → 5.",
 "idea": "Each step removes three numbers and scores their median. The best step takes the two largest numbers plus the smallest: the median is the second largest. Sort, then repeatedly take the second largest of what remains, jumping two positions each time, for n/3 steps.",
 "input": "nums = [2,1,3,2,1,3]",
 "output": "5",
 "notes": [],
 "best": "Each step removes three numbers and scores their median. The best step takes the two largest numbers plus the smallest: the median is the second largest. Sort, then repeatedly take the second largest of what remains, jumping two positions each time, for n/3 steps.",
 "variants": [
  {
   "name": "Take the second largest, then every second one",
   "code": "class Solution:\n    def maximumMedianSum(self, nums):\n        nums.sort()\n        steps = len(nums) // 3\n        return sum(nums[-2 - 2 * i] for i in range(steps))",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Each step removes three numbers and scores their median. The best step takes the two largest numbers plus the smallest: the median is the second largest. Sort, then repeatedly take the second largest of what remains, jumping two positions each time, for n/3 steps.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two pointers over the sorted array",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumMedianSum(self, nums):\n        nums.sort()\n        lo, hi = 0, len(nums) - 1\n        total = 0\n        while lo < hi:\n            total += nums[hi - 1]\n            lo += 1\n            hi -= 2\n        return total",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Each step removes the smallest plus the two largest remaining numbers and scores the second largest.",
   "frames": [],
   "alt": true
  }
 ]
};
