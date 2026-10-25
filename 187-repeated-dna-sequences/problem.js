window.PROBLEM = {
 "id": "187",
 "title": "Repeated DNA Sequences",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A DNA string uses the letters A, C, G, T. Return every 10-letter piece that occurs more than once in it (each reported once). Example: 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT' → ['AAAAACCCCC','CCCCCAAAAA'].",
 "why": "List every 10-letter piece of the DNA string that occurs more than once.",
 "idea": "Slide a 10-letter window; remember the pieces seen. When a piece appears a second time, report it (only once).",
 "input": "'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'",
 "output": "['AAAAACCCCC','CCCCCAAAAA']",
 "notes": [],
 "best": "Slide a 10-letter window; remember the pieces seen. When a piece appears a second time, report it (only once).",
 "variants": [
  {
   "name": "Set of 10-letter windows",
   "code": "class Solution:\n    def findRepeatedDnaSequences(self, s):\n        seen, rep, res = set(), set(), []\n        for i in range(len(s) - 9):\n            w = s[i:i + 10]\n            if w in seen and w not in rep:\n                rep.add(w)\n                res.append(w)\n            seen.add(w)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Slide a 10-letter window; remember the pieces seen. When a piece appears a second time, report it (only once).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count all windows",
   "tag": "Alternative",
   "code": "class Solution:\n    def findRepeatedDnaSequences(self, s):\n        cnt = Counter(s[i:i + 10] for i in range(len(s) - 9))\n        return [w for w, c in cnt.items() if c > 1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count every 10-letter window and keep those seen at least twice.",
   "frames": [],
   "alt": true
  }
 ]
};
