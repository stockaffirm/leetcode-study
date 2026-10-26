window.PROBLEM = {
 "id": "2090",
 "title": "K Radius Subarray Averages",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[7,4,3,9,1,8,5,2,6], k=3 → [-1,-1,-1,5,4,4,-1,-1,-1].",
 "idea": "For an index i with k elements on each side the average is the sum of nums[i−k…i+k] divided by 2k+1 (integer division). Use prefix sums; indices without full radius give −1.",
 "input": "nums = [7,4,3,9,1,8,5,2,6], k = 3",
 "output": "[-1, -1, -1, 5, 4, 4, -1, -1, -1]",
 "notes": [],
 "best": "For an index i with k elements on each side the average is the sum of nums[i−k…i+k] divided by 2k+1 (integer division). Use prefix sums; indices without full radius give −1.",
 "variants": [
  {
   "name": "Prefix sums over windows of 2k+1",
   "code": "class Solution:\n    def getAverages(self, nums, k):\n        n = len(nums)\n        pre = [0]\n        for x in nums:\n            pre.append(pre[-1] + x)\n        res = [-1] * n\n        for i in range(k, n - k):\n            res[i] = (pre[i + k + 1] - pre[i - k]) // (2 * k + 1)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For an index i with k elements on each side the average is the sum of nums[i−k…i+k] divided by 2k+1 (integer division). Use prefix sums; indices without full radius give −1.",
   "frames": []
  }
 ]
};
