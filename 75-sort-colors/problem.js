window.PROBLEM = {
 "id": "75",
 "title": "Sort Colors",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "A list contains only 0s, 1s and 2s. Sort it in place in a single pass: [2,0,2,1,1,0] → [0,0,1,1,2,2].",
 "idea": "Keep three zones: 0s on the left (lo), 2s on the right (hi), and an unknown middle. Look at the middle element: send 0s left, 2s right, leave 1s.",
 "input": "[2, 0, 2, 1, 1, 0]",
 "output": "[0, 0, 1, 1, 2, 2]",
 "notes": [],
 "best": "Keep three zones: 0s on the left (lo), 2s on the right (hi), and an unknown middle. Look at the middle element: send 0s left, 2s right, leave 1s.",
 "variants": [
  {
   "name": "Dutch flag (one pass, three pointers)",
   "code": "class Solution:\n    def sortColors(self, nums):\n        lo, mid, hi = 0, 0, len(nums) - 1\n        while mid <= hi:\n            if nums[mid] == 0:\n                nums[lo], nums[mid] = nums[mid], nums[lo]\n                lo += 1\n                mid += 1\n            elif nums[mid] == 1:\n                mid += 1\n            else:\n                nums[mid], nums[hi] = nums[hi], nums[mid]\n                hi -= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep three zones: 0s on the left (lo), 2s on the right (hi), and an unknown middle. Look at the middle element: send 0s left, 2s right, leave 1s.",
   "frames": []
  }
 ]
};
