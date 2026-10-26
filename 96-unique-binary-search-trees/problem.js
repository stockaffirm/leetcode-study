window.PROBLEM = {
 "id": "96",
 "title": "Unique Binary Search Trees",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "How many structurally different binary search trees store the values 1..n?",
 "idea": "Pick a root j. The j−1 smaller values form its left subtree and the n−j larger ones its right: count[n] = Σ count[j−1]·count[n−j].",
 "input": "n = 3",
 "output": "5",
 "notes": [],
 "best": "Pick a root j. The j−1 smaller values form its left subtree and the n−j larger ones its right: count[n] = Σ count[j−1]·count[n−j].",
 "variants": [
  {
   "name": "Catalan numbers by DP",
   "code": "class Solution:\n    def numTrees(self, n):\n        dp = [1] + [0] * n\n        for size in range(1, n + 1):\n            for root in range(1, size + 1):\n                dp[size] += dp[root - 1] * dp[size - root]\n        return dp[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Pick a root j. The j−1 smaller values form its left subtree and the n−j larger ones its right: count[n] = Σ count[j−1]·count[n−j].",
   "frames": []
  }
 ]
};
