window.PROBLEM = {
 "id": "2958",
 "title": "Length of Longest Subarray With at Most K Frequency",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Return the length of the longest subarray in which every value occurs at most k times. Example: [1,2,3,1,2,3,1,2], k=2 → 6.",
 "why": "[1,2,3,1,2,3,1,2], k=2: the window [2,3,1,2,3,1] has every value at most twice → 6.",
 "idea": "Slide a window and count each value. When adding the right element makes its count exceed k, move the left end forward until that count is back to k. Track the longest window.",
 "input": "nums = [1,2,3,1,2,3,1,2], k = 2",
 "output": "6",
 "notes": [],
 "best": "Slide a window and count each value. When adding the right element makes its count exceed k, move the left end forward until that count is back to k. Track the longest window.",
 "variants": [
  {
   "name": "Shrink while a value is too frequent",
   "code": "class Solution:\n    def maxSubarrayLength(self, nums, k):\n        cnt = Counter()\n        left = best = 0\n        for r, x in enumerate(nums):\n            cnt[x] += 1\n            while cnt[x] > k:\n                cnt[nums[left]] -= 1\n                left += 1\n            best = max(best, r - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Slide a window and count each value. When adding the right element makes its count exceed k, move the left end forward until that count is back to k. Track the longest window.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Longest window with a max-count check",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxSubarrayLength(self, nums, k):\n        best = 0\n        for i in range(len(nums)):\n            cnt = Counter()\n            for j in range(i, len(nums)):\n                cnt[nums[j]] += 1\n                if cnt[nums[j]] > k:\n                    break\n                best = max(best, j - i + 1)\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each start extend while no value exceeds k occurrences.",
   "frames": [],
   "alt": true
  }
 ]
};
