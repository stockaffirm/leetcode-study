window.PROBLEM = {
 "id": "1508",
 "title": "Range Sum of Sorted Subarray Sums",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "nums [1,2,3,4], left=1, right=5 → sorted sums 1,2,3,3,4 → 13.",
 "idea": "Compute the sums of all n(n+1)/2 non-empty subarrays, sort them and add the elements from position left to right (1-based) modulo 1e9+7.",
 "input": "nums = [1,2,3,4], n = 4, left = 1, right = 5",
 "output": "13",
 "notes": [],
 "best": "Compute the sums of all n(n+1)/2 non-empty subarrays, sort them and add the elements from position left to right (1-based) modulo 1e9+7.",
 "variants": [
  {
   "name": "Sort all subarray sums, add positions left…right",
   "code": "class Solution:\n    def rangeSum(self, nums, n, left, right):\n        sums = []\n        for i in range(n):\n            run = 0\n            for j in range(i, n):\n                run += nums[j]\n                sums.append(run)\n        sums.sort()\n        return sum(sums[left - 1:right]) % (10**9 + 7)",
   "time": "O(n² log n)",
   "space": "O(n²)",
   "explain": "Compute the sums of all n(n+1)/2 non-empty subarrays, sort them and add the elements from position left to right (1-based) modulo 1e9+7.",
   "frames": []
  }
 ]
};
