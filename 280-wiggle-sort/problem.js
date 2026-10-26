window.PROBLEM = {
 "id": "280",
 "title": "Wiggle Sort",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "[3,5,2,1,6,4] → [3,5,1,6,2,4] satisfies nums[0] ≤ nums[1] ≥ nums[2] ≤ nums[3] ≥ …",
 "idea": "For every index i ≥ 1: if i is odd we need nums[i−1] ≤ nums[i], if i is even we need nums[i−1] ≥ nums[i]. When the pair is out of order swap them; swapping never breaks the earlier pairs.",
 "input": "nums = [3,5,2,1,6,4]",
 "output": "[3, 5, 1, 6, 2, 4]",
 "notes": [],
 "best": "For every index i ≥ 1: if i is odd we need nums[i−1] ≤ nums[i], if i is even we need nums[i−1] ≥ nums[i]. When the pair is out of order swap them; swapping never breaks the earlier pairs.",
 "variants": [
  {
   "name": "One pass: fix each neighbouring pair",
   "code": "class Solution:\n    def wiggleSort(self, nums):\n        for i in range(1, len(nums)):\n            if (i % 2 == 1 and nums[i] < nums[i - 1]) or (i % 2 == 0 and nums[i] > nums[i - 1]):\n                nums[i], nums[i - 1] = nums[i - 1], nums[i]\n        return nums",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For every index i ≥ 1: if i is odd we need nums[i−1] ≤ nums[i], if i is even we need nums[i−1] ≥ nums[i]. When the pair is out of order swap them; swapping never breaks the earlier pairs.",
   "frames": []
  }
 ]
};
