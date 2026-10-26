window.PROBLEM = {
 "id": "977",
 "title": "Squares of a Sorted Array",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "Square every number of a sorted list (it may contain negatives) and return the squares sorted.",
 "idea": "The biggest square is at one of the two ends. Compare the ends and fill the answer from the back.",
 "input": "[-4,-1,0,3,10]",
 "output": "[0,1,9,16,100]",
 "notes": [],
 "best": "The biggest square is at one of the two ends. Compare the ends and fill the answer from the back.",
 "variants": [
  {
   "name": "Two pointers from both ends",
   "code": "class Solution:\n    def sortedSquares(self, nums):\n        n = len(nums)\n        res = [0] * n\n        l, r = 0, n - 1\n        for i in range(n - 1, -1, -1):\n            if abs(nums[l]) > abs(nums[r]):\n                res[i] = nums[l] ** 2\n                l += 1\n            else:\n                res[i] = nums[r] ** 2\n                r -= 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The biggest square is at one of the two ends. Compare the ends and fill the answer from the back.",
   "frames": []
  }
 ]
};
