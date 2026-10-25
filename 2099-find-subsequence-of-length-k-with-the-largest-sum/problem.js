window.PROBLEM = {
 "id": "2099",
 "title": "Find Subsequence of Length K With the Largest Sum",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Return a subsequence of nums (keeping the original order) of length k that has the largest possible sum. Example: [2,1,3,3], k=2 → [3,3].",
 "why": "[2,1,3,3], k=2: the two largest numbers are the 3s → [3,3].",
 "idea": "The k numbers with the largest values give the largest sum. Find their indices and read the numbers in index order so the subsequence keeps the original order.",
 "input": "nums = [2,1,3,3], k = 2",
 "output": "[3, 3]",
 "notes": [],
 "best": "The k numbers with the largest values give the largest sum. Find their indices and read the numbers in index order so the subsequence keeps the original order.",
 "variants": [
  {
   "name": "Take the k biggest, keep their order",
   "code": "class Solution:\n    def maxSubsequence(self, nums, k):\n        idx = sorted(range(len(nums)), key=lambda i: -nums[i])[:k]\n        return [nums[i] for i in sorted(idx)]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The k numbers with the largest values give the largest sum. Find their indices and read the numbers in index order so the subsequence keeps the original order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Threshold value",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxSubsequence(self, nums, k):\n        t = sorted(nums, reverse=True)[k - 1]\n        need = k - sum(x > t for x in nums)\n        res = []\n        for x in nums:\n            if x > t:\n                res.append(x)\n            elif x == t and need > 0:\n                res.append(x)\n                need -= 1\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Find the k-th largest value t, keep every number above t and just enough numbers equal to t, in the original order.",
   "frames": [],
   "alt": true
  }
 ]
};
