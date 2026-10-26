window.PROBLEM = {
 "id": "3507",
 "title": "Minimum Pair Removal to Sort Array I",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Repeatedly take the adjacent pair with the smallest sum (the leftmost if tied) and replace it by their sum. Return the minimum number of such operations until the array is non-decreasing. Example: [5,2,3,1] → 2.",
 "why": "[5,2,3,1]: merge the cheapest pair 3+1 → [5,2,4]; merge 2+4 → [5,6]. Two operations, and the array is non-decreasing.",
 "idea": "Do exactly what the statement says: while the array is not sorted, find the leftmost adjacent pair with the smallest sum, replace it by that sum and count one operation.",
 "input": "nums = [5,2,3,1]",
 "output": "2",
 "notes": [],
 "best": "Do exactly what the statement says: while the array is not sorted, find the leftmost adjacent pair with the smallest sum, replace it by that sum and count one operation.",
 "variants": [
  {
   "name": "Simulate the merges",
   "code": "class Solution:\n    def minimumPairRemoval(self, nums):\n        a = list(nums)\n        ops = 0\n        while any(a[i] > a[i + 1] for i in range(len(a) - 1)):\n            idx = min(range(len(a) - 1), key=lambda i: a[i] + a[i + 1])\n            a[idx:idx + 2] = [a[idx] + a[idx + 1]]\n            ops += 1\n        return ops",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Do exactly what the statement says: while the array is not sorted, find the leftmost adjacent pair with the smallest sum, replace it by that sum and count one operation.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumPairRemoval(self, nums):\n        if all(nums[i] <= nums[i + 1] for i in range(len(nums) - 1)):\n            return 0\n        sums = [nums[i] + nums[i + 1] for i in range(len(nums) - 1)]\n        i = sums.index(min(sums))\n        return 1 + self.minimumPairRemoval(nums[:i] + [sums[i]] + nums[i + 2:])",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Return 0 if sorted, otherwise merge the cheapest pair and add one to the answer for the shorter array.",
   "frames": [],
   "alt": true
  }
 ]
};
