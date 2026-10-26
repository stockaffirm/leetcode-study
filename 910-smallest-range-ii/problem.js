window.PROBLEM = {
 "id": "910",
 "title": "Smallest Range II",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "[1,3,6], k=3: 1→4, 3→6, 6→3 gives [4,6,3], range 3 (the original range is 5).",
 "idea": "Sort the numbers. Small numbers should go up (+k) and large numbers down (−k); the switch happens at some split i: nums[0..i] get +k, the rest get −k. For each split the max is max(nums[i]+k, nums[-1]−k) and the min is min(nums[0]+k, nums[i+1]−k). Take the smallest range, starting from the no-split value nums[-1] − nums[0].",
 "input": "nums = [1,3,6], k = 3",
 "output": "3",
 "notes": [],
 "best": "Sort the numbers. Small numbers should go up (+k) and large numbers down (−k); the switch happens at some split i: nums[0..i] get +k, the rest get −k. For each split the max is max(nums[i]+k, nums[-1]−k) and the min is min(nums[0]+k, nums[i+1]−k). Take the smallest range, starting from the no-split value nums[-1] − nums[0].",
 "variants": [
  {
   "name": "Sort, then choose where to switch from +k to −k",
   "code": "class Solution:\n    def smallestRangeII(self, nums, k):\n        nums.sort()\n        best = nums[-1] - nums[0]\n        for i in range(len(nums) - 1):\n            hi = max(nums[i] + k, nums[-1] - k)\n            lo = min(nums[0] + k, nums[i + 1] - k)\n            best = min(best, hi - lo)\n        return best",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort the numbers. Small numbers should go up (+k) and large numbers down (−k); the switch happens at some split i: nums[0..i] get +k, the rest get −k. For each split the max is max(nums[i]+k, nums[-1]−k) and the min is min(nums[0]+k, nums[i+1]−k). Take the smallest range, starting from the no-split value nums[-1] − nums[0].",
   "frames": []
  }
 ]
};
