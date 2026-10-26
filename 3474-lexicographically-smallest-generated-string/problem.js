window.PROBLEM = {
 "id": "3474",
 "title": "Lexicographically Smallest Generated String",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
