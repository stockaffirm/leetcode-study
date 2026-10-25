window.PROBLEM = {
 "id": "324",
 "title": "Wiggle Sort II",
 "level": "Medium",
 "topic": "Sorting",
 "question": "Reorder nums in place so that nums[0] < nums[1] > nums[2] < nums[3] > … (strict inequalities); a valid answer is guaranteed. Example: [1,5,1,1,6,4] → [1,6,1,5,1,4].",
 "why": "[1,5,1,1,6,4] → [1,6,1,5,1,4] has nums[0] < nums[1] > nums[2] < nums[3] > …",
 "idea": "Sort the array. Put the smaller half, in reverse order, into the even positions and the larger half, in reverse order, into the odd positions. Reversing keeps equal middle values apart so strict inequalities hold.",
 "input": "nums = [1,5,1,1,6,4]",
 "output": "[1, 6, 1, 5, 1, 4]",
 "notes": [],
 "best": "Sort the array. Put the smaller half, in reverse order, into the even positions and the larger half, in reverse order, into the odd positions. Reversing keeps equal middle values apart so strict inequalities hold.",
 "variants": [
  {
   "name": "Smaller half to even slots, larger half to odd slots (both reversed)",
   "code": "class Solution:\n    def wiggleSort(self, nums):\n        s = sorted(nums)\n        half = (len(nums) + 1) // 2\n        nums[::2] = s[:half][::-1]\n        nums[1::2] = s[half:][::-1]\n        return nums",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the array. Put the smaller half, in reverse order, into the even positions and the larger half, in reverse order, into the odd positions. Reversing keeps equal middle values apart so strict inequalities hold.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Virtual index mapping",
   "tag": "Alternative",
   "code": "class Solution:\n    def wiggleSort(self, nums):\n        s = sorted(nums, reverse=True)\n        n = len(nums)\n        for i, v in enumerate(s):\n            nums[(1 + 2 * i) % (n | 1)] = v\n        return nums",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Write the sorted values from largest to smallest into positions 1, 3, 5 … then 0, 2, 4 … using (1 + 2i) mod (n | 1).",
   "frames": [],
   "alt": true
  }
 ]
};
