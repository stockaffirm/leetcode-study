window.PROBLEM = {
 "id": "3396",
 "title": "Minimum Number of Operations to Make Elements in Array Distinct",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,3,4,2,3,3,5,7]: remove the first 6 elements (2 operations) to leave the distinct suffix [3,5,7].",
 "idea": "Each operation removes up to 3 elements from the front. The remaining suffix must have distinct elements. Find the longest distinct suffix by scanning from the right until a repeated value; if the first bad index is p (0-based), you need ceil((p + 1) / 3) operations.",
 "input": "nums = [1,2,3,4,2,3,3,5,7]",
 "output": "2",
 "notes": [],
 "best": "Each operation removes up to 3 elements from the front. The remaining suffix must have distinct elements. Find the longest distinct suffix by scanning from the right until a repeated value; if the first bad index is p (0-based), you need ceil((p + 1) / 3) operations.",
 "variants": [
  {
   "name": "Scan from the right until a repeat",
   "code": "class Solution:\n    def minimumOperations(self, nums):\n        seen = set()\n        for i in range(len(nums) - 1, -1, -1):\n            if nums[i] in seen:\n                return (i + 3) // 3\n            seen.add(nums[i])\n        return 0",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Each operation removes up to 3 elements from the front. The remaining suffix must have distinct elements. Find the longest distinct suffix by scanning from the right until a repeated value; if the first bad index is p (0-based), you need ceil((p + 1) / 3) operations.",
   "frames": []
  }
 ]
};
