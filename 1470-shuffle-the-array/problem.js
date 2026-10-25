window.PROBLEM = {
 "id": "1470",
 "title": "Shuffle the Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "An array has 2n numbers [x1, …, xn, y1, …, yn]. Return [x1, y1, x2, y2, …, xn, yn]. Example: [2,5,1,3,4,7], n=3 → [2,3,5,4,1,7].",
 "why": "[2,5,1,3,4,7] with n = 3: take 2, 3 then 5, 4 then 1, 7 → [2,3,5,4,1,7].",
 "idea": "The array is [x1…xn, y1…yn]; the answer is x1, y1, x2, y2 … so alternate the first and the second half.",
 "input": "nums = [2,5,1,3,4,7], n = 3",
 "output": "[2,3,5,4,1,7]",
 "notes": [],
 "best": "The array is [x1…xn, y1…yn]; the answer is x1, y1, x2, y2 … so alternate the first and the second half.",
 "variants": [
  {
   "name": "Interleave the two halves",
   "code": "class Solution:\n    def shuffle(self, nums, n):\n        res = []\n        for i in range(n):\n            res += [nums[i], nums[i + n]]\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The array is [x1…xn, y1…yn]; the answer is x1, y1, x2, y2 … so alternate the first and the second half.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Slice assignment",
   "tag": "Pythonic",
   "code": "class Solution:\n    def shuffle(self, nums, n):\n        res = [0] * (2 * n)\n        res[0::2] = nums[:n]\n        res[1::2] = nums[n:]\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Fill the even slots with the first half and the odd slots with the second half.",
   "frames": [],
   "alt": true
  }
 ]
};
