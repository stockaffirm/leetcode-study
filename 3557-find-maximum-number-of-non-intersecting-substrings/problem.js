window.PROBLEM = {
 "id": "3557",
 "title": "Find Maximum Number of Non Intersecting Substrings",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'abcdeafdef' → 'abcdea' and 'fdef' → 2.",
 "idea": "dp[i] = the most substrings in the first i letters. Either skip letter i−1 (dp[i−1]) or end a substring there: it must start at an earlier equal letter at distance ≥ 3. Since dp never decreases, the latest such start is best: dp[start] + 1.",
 "input": "word = \"abcdeafdef\"",
 "output": "2",
 "notes": [],
 "best": "dp[i] = the most substrings in the first i letters. Either skip letter i−1 (dp[i−1]) or end a substring there: it must start at an earlier equal letter at distance ≥ 3. Since dp never decreases, the latest such start is best: dp[start] + 1.",
 "variants": [
  {
   "name": "dp over prefixes with the latest eligible earlier equal letter",
   "code": "class Solution:\n    def maxSubstrings(self, word):\n        n = len(word)\n        dp = [0] * (n + 1)\n        last = {}\n        for i in range(n):\n            if i >= 3:\n                last[word[i - 3]] = i - 3\n            dp[i + 1] = dp[i]\n            if word[i] in last:\n                dp[i + 1] = max(dp[i + 1], dp[last[word[i]]] + 1)\n        return dp[n]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "dp[i] = the most substrings in the first i letters. Either skip letter i−1 (dp[i−1]) or end a substring there: it must start at an earlier equal letter at distance ≥ 3. Since dp never decreases, the latest such start is best: dp[start] + 1.",
   "frames": []
  }
 ]
};
