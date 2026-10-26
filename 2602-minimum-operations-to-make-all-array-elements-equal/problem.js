window.PROBLEM = {
 "id": "2602",
 "title": "Minimum Operations to Make All Array Elements Equal",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "nums [3,1,6,8], query 5: |3−5|+|1−5|+|6−5|+|8−5| = 10.",
 "idea": "For each query q the cost is Σ|nums[i] − q|. Sort the numbers and build prefix sums. Binary search how many numbers are below q; those cost q·count − their sum, the rest cost their sum − q·count.",
 "input": "nums = [3,1,6,8], queries = [1,5]",
 "output": "[14, 10]",
 "notes": [],
 "best": "For each query q the cost is Σ|nums[i] − q|. Sort the numbers and build prefix sums. Binary search how many numbers are below q; those cost q·count − their sum, the rest cost their sum − q·count.",
 "variants": [
  {
   "name": "Sorted prefix sums and binary search",
   "code": "class Solution:\n    def minOperations(self, nums, queries):\n        nums.sort()\n        n = len(nums)\n        pre = [0]\n        for x in nums:\n            pre.append(pre[-1] + x)\n        res = []\n        for q in queries:\n            i = bisect_left(nums, q)\n            left = q * i - pre[i]\n            right = (pre[n] - pre[i]) - q * (n - i)\n            res.append(left + right)\n        return res",
   "time": "O((n + q) log n)",
   "space": "O(n)",
   "explain": "For each query q the cost is Σ|nums[i] − q|. Sort the numbers and build prefix sums. Binary search how many numbers are below q; those cost q·count − their sum, the rest cost their sum − q·count.",
   "frames": []
  }
 ]
};
