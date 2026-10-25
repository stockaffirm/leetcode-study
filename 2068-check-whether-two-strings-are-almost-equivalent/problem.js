window.PROBLEM = {
 "id": "2068",
 "title": "Check Whether Two Strings are Almost Equivalent",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Two words are almost equivalent if, for every letter a–z, the number of times it appears in the two words differs by at most 3. Return true or false. Example: 'aaaa' and 'bccb' → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check each of the 26 letters",
   "tag": "Alternative",
   "code": "class Solution:\n    def checkAlmostEquivalent(self, word1, word2):\n        for c in 'abcdefghijklmnopqrstuvwxyz':\n            if abs(word1.count(c) - word2.count(c)) > 3:\n                return False\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Use str.count for every lowercase letter and compare.",
   "frames": [],
   "alt": true
  }
 ]
};
