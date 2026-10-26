window.PROBLEM = {
 "id": "3634",
 "title": "Minimum Removals to Balance Array",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "[2,1,5], k=2: keep [1,2] (2 ≤ 2·1) and remove 5 → 1 removal.",
 "idea": "An array is balanced when max ≤ k × min. After sorting, a balanced set to keep is a window whose last value is at most k times its first. Slide a window with two pointers, find the longest, and remove everything else.",
 "input": "nums = [2,1,5], k = 2",
 "output": "1",
 "notes": [],
 "best": "An array is balanced when max ≤ k × min. After sorting, a balanced set to keep is a window whose last value is at most k times its first. Slide a window with two pointers, find the longest, and remove everything else.",
 "variants": [
  {
   "name": "Sort, keep the longest window with max ≤ k·min",
   "code": "class Solution:\n    def minRemoval(self, nums, k):\n        nums.sort()\n        best = l = 0\n        for r in range(len(nums)):\n            while nums[r] > k * nums[l]:\n                l += 1\n            best = max(best, r - l + 1)\n        return len(nums) - best",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "An array is balanced when max ≤ k × min. After sorting, a balanced set to keep is a window whose last value is at most k times its first. Slide a window with two pointers, find the longest, and remove everything else.",
   "frames": []
  }
 ]
};
