window.PROBLEM = {
 "id": "446",
 "title": "Arithmetic Slices II - Subsequence",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[2,4,6,8,10] → 7 arithmetic subsequences of length ≥ 3.",
 "idea": "For each pair j < i with difference d, every arithmetic subsequence (of length ≥ 2) ending at j with difference d can be extended by nums[i]. Keep cnt[i][d] = number of such subsequences of length ≥ 2 ending at i; the extensions of length ≥ 3 are cnt[j][d], which are added to the answer.",
 "input": "nums = [2,4,6,8,10]",
 "output": "7",
 "notes": [],
 "best": "For each pair j < i with difference d, every arithmetic subsequence (of length ≥ 2) ending at j with difference d can be extended by nums[i]. Keep cnt[i][d] = number of such subsequences of length ≥ 2 ending at i; the extensions of length ≥ 3 are cnt[j][d], which are added to the answer.",
 "variants": [
  {
   "name": "dp[i][difference] = number of sequences ending at i",
   "code": "class Solution:\n    def numberOfArithmeticSlices(self, nums):\n        n = len(nums)\n        cnt = [defaultdict(int) for _ in range(n)]\n        res = 0\n        for i in range(n):\n            for j in range(i):\n                d = nums[i] - nums[j]\n                res += cnt[j][d]\n                cnt[i][d] += cnt[j][d] + 1\n        return res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "For each pair j < i with difference d, every arithmetic subsequence (of length ≥ 2) ending at j with difference d can be extended by nums[i]. Keep cnt[i][d] = number of such subsequences of length ≥ 2 ending at i; the extensions of length ≥ 3 are cnt[j][d], which are added to the answer.",
   "frames": []
  }
 ]
};
