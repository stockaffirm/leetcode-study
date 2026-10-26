window.PROBLEM = {
 "id": "2052",
 "title": "Minimum Cost to Separate Sentence into Rows",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'i love leetcode', k=12 → rows 'i love' and 'leetcode' → 36.",
 "idea": "The cost of a row of length len is (k − len)², but the last row is free. dp[i] = minimum cost to place words i… onward. Try to fit words i … j into one row (length = sum of lengths + spaces ≤ k): if j is the last word the cost is 0, otherwise (k − len)² + dp[j + 1].",
 "input": "sentence = \"i love leetcode\", k = 12",
 "output": "36",
 "notes": [],
 "best": "The cost of a row of length len is (k − len)², but the last row is free. dp[i] = minimum cost to place words i… onward. Try to fit words i … j into one row (length = sum of lengths + spaces ≤ k): if j is the last word the cost is 0, otherwise (k − len)² + dp[j + 1].",
 "variants": [
  {
   "name": "dp over word index: best way to finish from here",
   "code": "class Solution:\n    def minimumCost(self, sentence, k):\n        words = sentence.split()\n        n = len(words)\n        dp = [float('inf')] * (n + 1)\n        dp[n] = 0\n        for i in range(n - 1, -1, -1):\n            length = -1\n            for j in range(i, n):\n                length += len(words[j]) + 1\n                if length > k:\n                    break\n                if j == n - 1:\n                    dp[i] = 0\n                else:\n                    dp[i] = min(dp[i], (k - length) ** 2 + dp[j + 1])\n        return dp[0]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "The cost of a row of length len is (k − len)², but the last row is free. dp[i] = minimum cost to place words i… onward. Try to fit words i … j into one row (length = sum of lengths + spaces ≤ k): if j is the last word the cost is 0, otherwise (k − len)² + dp[j + 1].",
   "frames": []
  }
 ]
};
