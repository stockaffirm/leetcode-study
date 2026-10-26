window.PROBLEM = {
 "id": "922",
 "title": "Sort Array By Parity II",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "[4,2,5,7] → [4,5,2,7].",
 "idea": "Keep a pointer on the even indices and one on the odd indices. Advance the even pointer to an index holding an odd number and the odd pointer to an index holding an even number; swap them. Repeat until the even pointer runs out.",
 "input": "nums = [4,2,5,7]",
 "output": "[4, 5, 2, 7]",
 "notes": [],
 "best": "Keep a pointer on the even indices and one on the odd indices. Advance the even pointer to an index holding an odd number and the odd pointer to an index holding an even number; swap them. Repeat until the even pointer runs out.",
 "variants": [
  {
   "name": "Two pointers: fix wrong-parity positions",
   "code": "class Solution:\n    def sortArrayByParityII(self, nums):\n        i, j = 0, 1\n        n = len(nums)\n        while i < n and j < n:\n            while i < n and nums[i] % 2 == 0:\n                i += 2\n            while j < n and nums[j] % 2 == 1:\n                j += 2\n            if i < n and j < n:\n                nums[i], nums[j] = nums[j], nums[i]\n        return nums",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep a pointer on the even indices and one on the odd indices. Advance the even pointer to an index holding an odd number and the odd pointer to an index holding an even number; swap them. Repeat until the even pointer runs out.",
   "frames": []
  }
 ]
};
