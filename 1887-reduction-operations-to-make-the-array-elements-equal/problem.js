window.PROBLEM = {
 "id": "1887",
 "title": "Reduction Operations to Make the Array Elements Equal",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "[5,1,3] → 5 → 3 → 1 (2 steps), 3 → 1 (1 step) → 3.",
 "idea": "Each operation lowers the largest value to the next smaller distinct value. After sorting, an element whose value is the r-th smallest distinct value needs r operations. Sum those ranks over all elements.",
 "input": "nums = [5,1,3]",
 "output": "3",
 "notes": [],
 "best": "Each operation lowers the largest value to the next smaller distinct value. After sorting, an element whose value is the r-th smallest distinct value needs r operations. Sum those ranks over all elements.",
 "variants": [
  {
   "name": "Sort; every distinct value above the minimum costs its rank",
   "code": "class Solution:\n    def reductionOperations(self, nums):\n        nums.sort()\n        rank = res = 0\n        for i in range(1, len(nums)):\n            if nums[i] != nums[i - 1]:\n                rank += 1\n            res += rank\n        return res",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Each operation lowers the largest value to the next smaller distinct value. After sorting, an element whose value is the r-th smallest distinct value needs r operations. Sum those ranks over all elements.",
   "frames": []
  }
 ]
};
