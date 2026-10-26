window.PROBLEM = {
 "id": "1793",
 "title": "Maximum Score of a Good Subarray",
 "level": "Hard",
 "topic": "Two Pointers",
 "question": "",
 "why": "[1,4,3,7,4,5], k=3 → subarray [1..5], min 3, length 5 → 15.",
 "idea": "The subarray must contain index k. Start with the window [k, k] and expand one step at a time toward the side whose next value is larger (this keeps the minimum as large as possible). After each step score = window minimum × window length; keep the best.",
 "input": "nums = [1,4,3,7,4,5], k = 3",
 "output": "15",
 "notes": [],
 "best": "The subarray must contain index k. Start with the window [k, k] and expand one step at a time toward the side whose next value is larger (this keeps the minimum as large as possible). After each step score = window minimum × window length; keep the best.",
 "variants": [
  {
   "name": "Expand from k, always toward the larger neighbour",
   "code": "class Solution:\n    def maximumScore(self, nums, k):\n        n = len(nums)\n        left = right = k\n        low = nums[k]\n        best = low\n        while left > 0 or right < n - 1:\n            if left == 0:\n                right += 1\n            elif right == n - 1:\n                left -= 1\n            elif nums[left - 1] < nums[right + 1]:\n                right += 1\n            else:\n                left -= 1\n            low = min(low, nums[left], nums[right])\n            best = max(best, low * (right - left + 1))\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The subarray must contain index k. Start with the window [k, k] and expand one step at a time toward the side whose next value is larger (this keeps the minimum as large as possible). After each step score = window minimum × window length; keep the best.",
   "frames": []
  }
 ]
};
