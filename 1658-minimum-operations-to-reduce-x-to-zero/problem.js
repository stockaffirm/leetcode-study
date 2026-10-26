window.PROBLEM = {
 "id": "1658",
 "title": "Minimum Operations to Reduce X to Zero",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "nums [1,1,4,2,3], x=5 → remove 2 and 3 from the right (2 operations).",
 "idea": "Removing from both ends leaves a contiguous middle that sums to total − x. Find the longest such window with a sliding window (all numbers are positive); the answer is n − its length, or −1.",
 "input": "nums = [1,1,4,2,3], x = 5",
 "output": "2",
 "notes": [],
 "best": "Removing from both ends leaves a contiguous middle that sums to total − x. Find the longest such window with a sliding window (all numbers are positive); the answer is n − its length, or −1.",
 "variants": [
  {
   "name": "Longest middle window with sum total − x",
   "code": "class Solution:\n    def minOperations(self, nums, x):\n        target = sum(nums) - x\n        if target < 0:\n            return -1\n        best = -1\n        left = cur = 0\n        for r, v in enumerate(nums):\n            cur += v\n            while cur > target:\n                cur -= nums[left]\n                left += 1\n            if cur == target:\n                best = max(best, r - left + 1)\n        return len(nums) - best if best >= 0 else -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Removing from both ends leaves a contiguous middle that sums to total − x. Find the longest such window with a sliding window (all numbers are positive); the answer is n − its length, or −1.",
   "frames": []
  }
 ]
};
