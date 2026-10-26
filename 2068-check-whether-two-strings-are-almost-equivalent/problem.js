window.PROBLEM = {
 "id": "2068",
 "title": "Check Whether Two Strings are Almost Equivalent",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'aaaa' vs 'bccb': 'a' appears 4 times in one and 0 in the other, difference 4 > 3 → false.",
 "idea": "Two words are almost equivalent when, for every letter, the counts differ by at most 3. Count letters of one word up and the other down; no letter may end beyond ±3.",
 "input": "word1 = \"aaaa\", word2 = \"bccb\"",
 "output": "false",
 "notes": [],
 "best": "Two words are almost equivalent when, for every letter, the counts differ by at most 3. Count letters of one word up and the other down; no letter may end beyond ±3.",
 "variants": [
  {
   "name": "Compare the 26 letter counts",
   "code": "class Solution:\n    def checkAlmostEquivalent(self, word1, word2):\n        diff = Counter(word1)\n        diff.subtract(Counter(word2))\n        return all(abs(v) <= 3 for v in diff.values())",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Two words are almost equivalent when, for every letter, the counts differ by at most 3. Count letters of one word up and the other down; no letter may end beyond ±3.",
   "frames": []
  }
 ]
};
