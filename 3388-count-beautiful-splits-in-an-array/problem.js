window.PROBLEM = {
 "id": "3388",
 "title": "Count Beautiful Splits in an Array",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,1,2,1]: splits ([1],[1],[2,1]) and ([1],[1,2],[1]) are beautiful → 2.",
 "idea": "Split nums into three non-empty parts A, B, C. It is beautiful if A is a prefix of B, or B is a prefix of C. Precompute lcp[i][j] = longest common prefix of the suffixes starting at i and j (LCP (Longest Common Prefix) table built from the end). Then A = nums[0:i] is a prefix of B = nums[i:j] when len(B) ≥ i and lcp[0][i] ≥ i; B is a prefix of C when len(C) ≥ len(B) and lcp[i][j] ≥ j − i.",
 "input": "nums = [1,1,2,1]",
 "output": "2",
 "notes": [],
 "best": "Split nums into three non-empty parts A, B, C. It is beautiful if A is a prefix of B, or B is a prefix of C. Precompute lcp[i][j] = longest common prefix of the suffixes starting at i and j (LCP (Longest Common Prefix) table built from the end). Then A = nums[0:i] is a prefix of B = nums[i:j] when len(B) ≥ i and lcp[0][i] ≥ i; B is a prefix of C when len(C) ≥ len(B) and lcp[i][j] ≥ j − i.",
 "variants": [
  {
   "name": "Longest-common-prefix table of suffixes",
   "code": "class Solution:\n    def beautifulSplits(self, nums):\n        n = len(nums)\n        lcp = [[0] * (n + 1) for _ in range(n + 1)]\n        for i in range(n - 1, -1, -1):\n            for j in range(n - 1, -1, -1):\n                if nums[i] == nums[j]:\n                    lcp[i][j] = lcp[i + 1][j + 1] + 1\n        res = 0\n        for i in range(1, n - 1):\n            for j in range(i + 1, n):\n                if (j - i >= i and lcp[0][i] >= i) or (n - j >= j - i and lcp[i][j] >= j - i):\n                    res += 1\n        return res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Split nums into three non-empty parts A, B, C. It is beautiful if A is a prefix of B, or B is a prefix of C. Precompute lcp[i][j] = longest common prefix of the suffixes starting at i and j (LCP (Longest Common Prefix) table built from the end). Then A = nums[0:i] is a prefix of B = nums[i:j] when len(B) ≥ i and lcp[0][i] ≥ i; B is a prefix of C when len(C) ≥ len(B) and lcp[i][j] ≥ j − i.",
   "frames": []
  }
 ]
};
