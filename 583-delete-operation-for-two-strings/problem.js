window.PROBLEM = {
 "id": "583",
 "title": "Delete Operation for Two Strings",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'sea' and 'eat' share 'ea' → 3 + 3 − 2·2 = 2 deletions.",
 "idea": "The characters that remain must form a common subsequence. Keeping the longest one (LCS (Longest Common Subsequence)) minimises deletions: len1 + len2 − 2·LCS (Longest Common Subsequence).",
 "input": "word1 = \"sea\", word2 = \"eat\"",
 "output": "2",
 "notes": [],
 "best": "The characters that remain must form a common subsequence. Keeping the longest one (LCS (Longest Common Subsequence)) minimises deletions: len1 + len2 − 2·LCS (Longest Common Subsequence).",
 "variants": [
  {
   "name": "Total length minus twice the LCS",
   "code": "class Solution:\n    def minDistance(self, word1, word2):\n        prev = [0] * (len(word2) + 1)\n        for a in word1:\n            cur = [0]\n            for j, b in enumerate(word2):\n                cur.append(prev[j] + 1 if a == b else max(prev[j + 1], cur[-1]))\n            prev = cur\n        return len(word1) + len(word2) - 2 * prev[-1]",
   "time": "O(n·m)",
   "space": "O(m)",
   "explain": "The characters that remain must form a common subsequence. Keeping the longest one (LCS (Longest Common Subsequence)) minimises deletions: len1 + len2 − 2·LCS (Longest Common Subsequence).",
   "frames": []
  }
 ]
};
