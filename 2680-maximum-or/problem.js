window.PROBLEM = {
 "id": "2680",
 "title": "Maximum OR",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[12,9], k=1: double 9 → 18, OR with 12 = 30.",
 "idea": "Doubling shifts a number left, so it is best to put all k shifts on one element to make its high bits count. Try each element with prefix OR and suffix OR of the others: prefix[i] | (nums[i] << k) | suffix[i+1].",
 "input": "nums = [12,9], k = 1",
 "output": "30",
 "notes": [],
 "best": "Doubling shifts a number left, so it is best to put all k shifts on one element to make its high bits count. Try each element with prefix OR and suffix OR of the others: prefix[i] | (nums[i] << k) | suffix[i+1].",
 "variants": [
  {
   "name": "Spend all k doublings on one number",
   "code": "class Solution:\n    def maximumOr(self, nums, k):\n        n = len(nums)\n        suf = [0] * (n + 1)\n        for i in range(n - 1, -1, -1):\n            suf[i] = suf[i + 1] | nums[i]\n        pre = 0\n        best = 0\n        for i, x in enumerate(nums):\n            best = max(best, pre | (x << k) | suf[i + 1])\n            pre |= x\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Doubling shifts a number left, so it is best to put all k shifts on one element to make its high bits count. Try each element with prefix OR and suffix OR of the others: prefix[i] | (nums[i] << k) | suffix[i+1].",
   "frames": []
  }
 ]
};
