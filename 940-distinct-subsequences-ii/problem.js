window.PROBLEM = {
 "id": "940",
 "title": "Distinct Subsequences II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'abc' has 7 distinct non-empty subsequences; 'aaa' has 3.",
 "idea": "Let end[c] be the number of distinct subsequences ending with letter c. When a letter c arrives, every existing subsequence (and the empty one) can be extended by c, so end[c] = 1 + sum of all end[·] — this replaces the old count for c instead of adding to it, which removes duplicates. Answer = sum of end, modulo 1e9+7.",
 "input": "s = \"abc\"",
 "output": "7",
 "notes": [],
 "best": "Let end[c] be the number of distinct subsequences ending with letter c. When a letter c arrives, every existing subsequence (and the empty one) can be extended by c, so end[c] = 1 + sum of all end[·] — this replaces the old count for c instead of adding to it, which removes duplicates. Answer = sum of end, modulo 1e9+7.",
 "variants": [
  {
   "name": "Count by last character",
   "code": "class Solution:\n    def distinctSubseqII(self, s):\n        MOD = 10**9 + 7\n        end = defaultdict(int)\n        for c in s:\n            end[c] = (1 + sum(end.values())) % MOD\n        return sum(end.values()) % MOD",
   "time": "O(26·n)",
   "space": "O(26)",
   "explain": "Let end[c] be the number of distinct subsequences ending with letter c. When a letter c arrives, every existing subsequence (and the empty one) can be extended by c, so end[c] = 1 + sum of all end[·] — this replaces the old count for c instead of adding to it, which removes duplicates. Answer = sum of end, modulo 1e9+7.",
   "frames": []
  }
 ]
};
