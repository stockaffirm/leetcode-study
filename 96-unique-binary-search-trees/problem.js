window.PROBLEM = {
 "id": "96",
 "title": "Unique Binary Search Trees",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "How many structurally different binary search trees can store exactly the values 1…n? Example: n=3 → 5.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Catalan formula",
   "tag": "Alternative",
   "code": "class Solution:\n    def numTrees(self, n):\n        return comb(2 * n, n) // (n + 1)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The count is the n-th Catalan number C(2n, n)/(n+1).",
   "frames": [],
   "alt": true
  }
 ]
};
