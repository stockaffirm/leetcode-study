window.PROBLEM = {
 "id": "3191",
 "title": "Minimum Operations to Make Binary Array Elements Equal to One I",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "In one operation flip three consecutive bits. Make all bits 1 with the fewest operations, or return −1.",
 "idea": "The leftmost 0 can only be fixed by flipping the window that starts there. Go left to right flipping whenever you see a 0; at the end the last two bits must be 1.",
 "input": "[0,1,1,1,0,0]",
 "output": "3",
 "notes": [],
 "best": "The leftmost 0 can only be fixed by flipping the window that starts there. Go left to right flipping whenever you see a 0; at the end the last two bits must be 1.",
 "variants": [
  {
   "name": "Greedy left to right",
   "code": "class Solution:\n    def minOperations(self, nums):\n        nums = nums[:]\n        ops = 0\n        for i in range(len(nums) - 2):\n            if nums[i] == 0:\n                for j in range(i, i + 3): nums[j] ^= 1\n                ops += 1\n        return ops if nums[-1] == nums[-2] == 1 else -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The leftmost 0 can only be fixed by flipping the window that starts there. Go left to right flipping whenever you see a 0; at the end the last two bits must be 1.",
   "frames": []
  }
 ]
};
