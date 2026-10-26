window.PROBLEM = {
 "id": "487",
 "title": "Max Consecutive Ones II",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "[1,0,1,1,0] → flip the first 0: 1,1,1,1 → 4.",
 "idea": "Keep a window containing at most one zero. Move the right end; when a second zero appears, move the left end past the first zero. The longest window is the answer.",
 "input": "nums = [1,0,1,1,0]",
 "output": "4",
 "notes": [],
 "best": "Keep a window containing at most one zero. Move the right end; when a second zero appears, move the left end past the first zero. The longest window is the answer.",
 "variants": [
  {
   "name": "Window with at most one zero",
   "code": "class Solution:\n    def findMaxConsecutiveOnes(self, nums):\n        left = zeros = best = 0\n        for right, v in enumerate(nums):\n            zeros += v == 0\n            while zeros > 1:\n                zeros -= nums[left] == 0\n                left += 1\n            best = max(best, right - left + 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep a window containing at most one zero. Move the right end; when a second zero appears, move the left end past the first zero. The longest window is the answer.",
   "frames": []
  }
 ]
};
