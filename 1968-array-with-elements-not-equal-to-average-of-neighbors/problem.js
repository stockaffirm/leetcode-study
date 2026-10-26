window.PROBLEM = {
 "id": "1968",
 "title": "Array With Elements Not Equal to Average of Neighbors",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "Rearrange distinct numbers so that no element equals the average of its two neighbours.",
 "idea": "Sort, then alternate the smaller half and the larger half: every inner element is then either bigger than both neighbours or smaller than both, so it cannot be their average.",
 "input": "[1,2,3,4,5]",
 "output": "any valid arrangement",
 "notes": [],
 "best": "Sort, then alternate the smaller half and the larger half: every inner element is then either bigger than both neighbours or smaller than both, so it cannot be their average.",
 "variants": [
  {
   "name": "Sort and interleave small and large halves",
   "code": "class Solution:\n    def rearrangeArray(self, nums):\n        nums = sorted(nums)\n        half = (len(nums) + 1) // 2\n        res = []\n        for i in range(half):\n            res.append(nums[i])\n            if i + half < len(nums): res.append(nums[i + half])\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort, then alternate the smaller half and the larger half: every inner element is then either bigger than both neighbours or smaller than both, so it cannot be their average.",
   "frames": []
  }
 ]
};
