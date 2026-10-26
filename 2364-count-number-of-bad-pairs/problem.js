window.PROBLEM = {
 "id": "2364",
 "title": "Count Number of Bad Pairs",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[4,1,3,3]: 6 pairs in total, 1 good pair (indices 1 and 3) → 5 bad pairs.",
 "idea": "A pair i<j is good when j − i == nums[j] − nums[i], i.e. nums[i] − i == nums[j] − j. Count good pairs by grouping equal nums[i] − i values, and subtract from n(n−1)/2.",
 "input": "nums = [4,1,3,3]",
 "output": "5",
 "notes": [],
 "best": "A pair i<j is good when j − i == nums[j] − nums[i], i.e. nums[i] − i == nums[j] − j. Count good pairs by grouping equal nums[i] − i values, and subtract from n(n−1)/2.",
 "variants": [
  {
   "name": "All pairs minus pairs with equal nums[i] − i",
   "code": "class Solution:\n    def countBadPairs(self, nums):\n        n = len(nums)\n        cnt = Counter(x - i for i, x in enumerate(nums))\n        good = sum(c * (c - 1) // 2 for c in cnt.values())\n        return n * (n - 1) // 2 - good",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A pair i<j is good when j − i == nums[j] − nums[i], i.e. nums[i] − i == nums[j] − j. Count good pairs by grouping equal nums[i] − i values, and subtract from n(n−1)/2.",
   "frames": []
  }
 ]
};
