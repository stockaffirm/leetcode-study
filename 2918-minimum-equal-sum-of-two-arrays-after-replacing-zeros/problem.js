window.PROBLEM = {
 "id": "2918",
 "title": "Minimum Equal Sum of Two Arrays After Replacing Zeros",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[3,2,0,1,0] → 3+2+1+1+1 = 8 and [6,5,0] → 12: the first has zeros to grow, so both become 12.",
 "idea": "Every zero must become at least 1, so the smallest possible sums are a = sum1 + zeros1 and b = sum2 + zeros2. The answer is max(a, b) — unless the smaller side has no zeros to grow, then it is impossible (−1).",
 "input": "nums1 = [3,2,0,1,0], nums2 = [6,5,0]",
 "output": "12",
 "notes": [],
 "best": "Every zero must become at least 1, so the smallest possible sums are a = sum1 + zeros1 and b = sum2 + zeros2. The answer is max(a, b) — unless the smaller side has no zeros to grow, then it is impossible (−1).",
 "variants": [
  {
   "name": "Replace every zero by 1, then compare",
   "code": "class Solution:\n    def minSum(self, nums1, nums2):\n        z1, z2 = nums1.count(0), nums2.count(0)\n        a = sum(nums1) + z1\n        b = sum(nums2) + z2\n        if (a < b and z1 == 0) or (b < a and z2 == 0):\n            return -1\n        return max(a, b)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Every zero must become at least 1, so the smallest possible sums are a = sum1 + zeros1 and b = sum2 + zeros2. The answer is max(a, b) — unless the smaller side has no zeros to grow, then it is impossible (−1).",
   "frames": []
  }
 ]
};
