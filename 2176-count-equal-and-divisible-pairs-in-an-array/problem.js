window.PROBLEM = {
 "id": "2176",
 "title": "Count Equal and Divisible Pairs in an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[3,1,2,2,2,1,3], k=2 → 4 pairs.",
 "idea": "Count pairs i<j with nums[i] == nums[j] and i·j divisible by k. n ≤ 100, so test all pairs.",
 "input": "nums = [3,1,2,2,2,1,3], k = 2",
 "output": "4",
 "notes": [],
 "best": "Count pairs i<j with nums[i] == nums[j] and i·j divisible by k. n ≤ 100, so test all pairs.",
 "variants": [
  {
   "name": "Check every pair",
   "code": "class Solution:\n    def countPairs(self, nums, k):\n        n = len(nums)\n        return sum(1 for i in range(n) for j in range(i + 1, n) if nums[i] == nums[j] and i * j % k == 0)",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Count pairs i<j with nums[i] == nums[j] and i·j divisible by k. n ≤ 100, so test all pairs.",
   "frames": []
  }
 ]
};
