window.PROBLEM = {
 "id": "3163",
 "title": "String Compression III",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Compress a string: repeatedly take the longest prefix made of one repeated letter with at most 9 letters, and write its length followed by the letter. Return the compressed string. Example: 'aaaaaaaaaaaaaabb' → '9a5a2b'.",
 "why": "Compress a string: replace each run of the same letter by (count)(letter), with counts at most 9 (longer runs are split).",
 "idea": "Walk through the string; for each run take up to 9 equal letters at a time and write count + letter.",
 "input": "'aaaaaaaaaaaaaabb'",
 "output": "'9a5a2b'",
 "notes": [],
 "best": "Walk through the string; for each run take up to 9 equal letters at a time and write count + letter.",
 "variants": [
  {
   "name": "Runs capped at 9",
   "code": "class Solution:\n    def compressedString(self, word):\n        res = []\n        i = 0\n        while i < len(word):\n            c = word[i]\n            j = i\n            while j < len(word) and word[j] == c and j - i < 9: j += 1\n            res.append(str(j - i) + c)\n            i = j\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Walk through the string; for each run take up to 9 equal letters at a time and write count + letter.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "groupby and chunks of 9",
   "tag": "Alternative",
   "code": "class Solution:\n    def compressedString(self, word):\n        res = []\n        for ch, g in groupby(word):\n            L = len(list(g))\n            while L > 0:\n                take = min(9, L)\n                res.append(str(take) + ch)\n                L -= take\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Group equal letters, then split each run into chunks of at most 9.",
   "frames": [],
   "alt": true
  }
 ]
};
