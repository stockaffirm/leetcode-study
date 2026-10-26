window.PROBLEM = {
 "id": "1464",
 "title": "Maximum Product of Two Elements in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[3,4,5,2] → (5−1)(4−1) = 12.",
 "idea": "The product (nums[i]−1)(nums[j]−1) is largest for the two largest numbers.",
 "input": "nums = [3,4,5,2]",
 "output": "12",
 "notes": [],
 "best": "The product (nums[i]−1)(nums[j]−1) is largest for the two largest numbers.",
 "variants": [
  {
   "name": "(largest − 1)(second largest − 1)",
   "code": "class Solution:\n    def maxProduct(self, nums):\n        a, b = sorted(nums)[-2:]\n        return (a - 1) * (b - 1)",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "The product (nums[i]−1)(nums[j]−1) is largest for the two largest numbers.",
   "frames": []
  }
 ]
};
