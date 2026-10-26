window.PROBLEM = {
 "id": "3660",
 "title": "Jump Game IX",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "[2,1,3] → [2,2,3].",
 "idea": "Jump right to a smaller value or left to a larger one. A boundary between i and i+1 can be crossed in the right direction exactly when the largest value on the left is greater than the smallest value on the right. Scan from the right: ans[i] = ans[i+1] if prefix max of 0…i exceeds the suffix min of i+1…, otherwise the prefix max itself.",
 "input": "nums = [2,1,3]",
 "output": "[2, 2, 3]",
 "notes": [],
 "best": "Jump right to a smaller value or left to a larger one. A boundary between i and i+1 can be crossed in the right direction exactly when the largest value on the left is greater than the smallest value on the right. Scan from the right: ans[i] = ans[i+1] if prefix max of 0…i exceeds the suffix min of i+1…, otherwise the prefix max itself.",
 "variants": [
  {
   "name": "Prefix maximum and suffix minimum",
   "code": "class Solution:\n    def maxValue(self, nums):\n        n = len(nums)\n        pre = nums[:]\n        for i in range(1, n):\n            pre[i] = max(pre[i - 1], nums[i])\n        suf = nums[:]\n        for i in range(n - 2, -1, -1):\n            suf[i] = min(suf[i + 1], nums[i])\n        ans = [0] * n\n        ans[-1] = pre[-1]\n        for i in range(n - 2, -1, -1):\n            ans[i] = ans[i + 1] if pre[i] > suf[i + 1] else pre[i]\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Jump right to a smaller value or left to a larger one. A boundary between i and i+1 can be crossed in the right direction exactly when the largest value on the left is greater than the smallest value on the right. Scan from the right: ans[i] = ans[i+1] if prefix max of 0…i exceeds the suffix min of i+1…, otherwise the prefix max itself.",
   "frames": []
  }
 ]
};
