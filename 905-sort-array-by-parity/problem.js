window.PROBLEM = {
 "id": "905",
 "title": "Sort Array By Parity",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "[3,1,2,4] → move the even numbers to the front: [4,2,1,3] (any order inside each group is fine).",
 "idea": "Keep one pointer at the left and one at the right. Skip an even on the left and an odd on the right; when the left is odd and the right is even, swap them.",
 "input": "nums = [3,1,2,4]",
 "output": "[4,2,1,3] (any order works)",
 "notes": [],
 "best": "Keep one pointer at the left and one at the right. Skip an even on the left and an odd on the right; when the left is odd and the right is even, swap them.",
 "variants": [
  {
   "name": "Two pointers, swap in place",
   "code": "class Solution:\n    def sortArrayByParity(self, nums):\n        l, r = 0, len(nums) - 1\n        while l < r:\n            if nums[l] % 2 == 0:\n                l += 1\n            elif nums[r] % 2 == 1:\n                r -= 1\n            else:\n                nums[l], nums[r] = nums[r], nums[l]\n        return nums",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep one pointer at the left and one at the right. Skip an even on the left and an odd on the right; when the left is odd and the right is even, swap them.",
   "frames": []
  }
 ]
};
