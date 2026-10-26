window.PROBLEM = {
 "id": "2913",
 "title": "Subarrays Distinct Element Sum of Squares I",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,1] → distinct counts 1,1,1,2,2,2 → 1+1+1+4+4+4 = 15.",
 "idea": "For every start index extend the end one element at a time while keeping a set of the values; after each extension add (size of the set)² to the total.",
 "input": "nums = [1,2,1]",
 "output": "15",
 "notes": [],
 "best": "For every start index extend the end one element at a time while keeping a set of the values; after each extension add (size of the set)² to the total.",
 "variants": [
  {
   "name": "Grow each subarray, track its distinct count",
   "code": "class Solution:\n    def sumCounts(self, nums):\n        total = 0\n        for i in range(len(nums)):\n            seen = set()\n            for j in range(i, len(nums)):\n                seen.add(nums[j])\n                total += len(seen) ** 2\n        return total",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For every start index extend the end one element at a time while keeping a set of the values; after each extension add (size of the set)² to the total.",
   "frames": []
  }
 ]
};
