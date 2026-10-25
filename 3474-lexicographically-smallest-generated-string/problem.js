window.PROBLEM = {
 "id": "3474",
 "title": "Lexicographically Smallest Generated String",
 "level": "Hard",
 "topic": "Greedy",
 "question": "str1 has length n of 'T'/'F' and str2 has length m. Build a word of length n + m − 1 such that for each i: if str1[i] is 'T' then word[i..i+m−1] equals str2, if 'F' it does not. Return the lexicographically smallest such word, or '' if none exists. Example: 'TFTF', 'ab' → 'ababa'.",
 "why": "str1 'TFTF', str2 'ab' → 'ababa'.",
 "idea": "The word has length n + m − 1. Every 'T' position i forces word[i…i+m−1] = str2 (a conflict means impossible). Fill every unforced slot with 'a' (smallest). Then check each 'F' window: if it accidentally equals str2, change the rightmost unforced slot in that window to 'b' (the smallest change that breaks the match with the least lexicographic damage); if no slot is free the answer is empty.",
 "input": "str1 = \"TFTF\", str2 = \"ab\"",
 "output": "\"ababa\"",
 "notes": [],
 "best": "The word has length n + m − 1. Every 'T' position i forces word[i…i+m−1] = str2 (a conflict means impossible). Fill every unforced slot with 'a' (smallest). Then check each 'F' window: if it accidentally equals str2, change the rightmost unforced slot in that window to 'b' (the smallest change that breaks the match with the least lexicographic damage); if no slot is free the answer is empty.",
 "variants": [
  {
   "name": "Force the T windows, fill with 'a', repair the F windows",
   "code": "class Solution:\n    def generateString(self, str1, str2):\n        n, m = len(str1), len(str2)\n        w = [None] * (n + m - 1)\n        for i, c in enumerate(str1):\n            if c == 'T':\n                for j in range(m):\n                    if w[i + j] is not None and w[i + j] != str2[j]:\n                        return \"\"\n                    w[i + j] = str2[j]\n        forced = [x is not None for x in w]\n        w = [x if x is not None else 'a' for x in w]\n        for i, c in enumerate(str1):\n            if c == 'F' and ''.join(w[i:i + m]) == str2:\n                for j in range(i + m - 1, i - 1, -1):\n                    if not forced[j]:\n                        w[j] = 'b'\n                        break\n                else:\n                    return \"\"\n        return ''.join(w)",
   "time": "O(n·m)",
   "space": "O(n + m)",
   "explain": "The word has length n + m − 1. Every 'T' position i forces word[i…i+m−1] = str2 (a conflict means impossible). Fill every unforced slot with 'a' (smallest). Then check each 'F' window: if it accidentally equals str2, change the rightmost unforced slot in that window to 'b' (the smallest change that breaks the match with the least lexicographic damage); if no slot is free the answer is empty.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every word over a, b, c",
   "tag": "Brute force",
   "code": "class Solution:\n    def generateString(self, str1, str2):\n        n, m = len(str1), len(str2)\n        for t in product('abc', repeat=n + m - 1):\n            w = ''.join(t)\n            if all((w[i:i + m] == str2) == (str1[i] == 'T') for i in range(n)):\n                return w\n        return \"\"",
   "time": "O(3^(n+m))",
   "space": "O(n+m)",
   "explain": "For tiny inputs enumerate all strings over {a, b, c} in order and return the first that satisfies every T/F condition.",
   "frames": [],
   "alt": true
  }
 ]
};
