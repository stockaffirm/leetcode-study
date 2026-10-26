window.PROBLEM = {
 "id": "187",
 "title": "Repeated DNA Sequences",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
