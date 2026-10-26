window.PROBLEM = {
 "id": "2778",
 "title": "Sum of Squares of Special Elements",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,2,3,4] (n=4): indices 1, 2, 4 divide 4 → 1 + 4 + 16 = 21.",
 "idea": "With 1-based indexing, element i is special if i divides n. Add the squares of those elements.",
 "input": "nums = [1,2,3,4]",
 "output": "21",
 "notes": [],
 "best": "With 1-based indexing, element i is special if i divides n. Add the squares of those elements.",
 "variants": [
  {
   "name": "Indices that divide n",
   "code": "class Solution:\n    def sumOfSquares(self, nums):\n        n = len(nums)\n        return sum(nums[i - 1] ** 2 for i in range(1, n + 1) if n % i == 0)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "With 1-based indexing, element i is special if i divides n. Add the squares of those elements.",
   "frames": []
  }
 ]
};
