window.PROBLEM = {
 "id": "1668",
 "title": "Maximum Repeating Substring",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "sequence 'ababc', word 'ab' → 'abab' fits twice → 2.",
 "idea": "Find the largest k such that word repeated k times is a substring of the sequence. Keep multiplying the word and testing with `in`.",
 "input": "sequence = \"ababc\", word = \"ab\"",
 "output": "2",
 "notes": [],
 "best": "Find the largest k such that word repeated k times is a substring of the sequence. Keep multiplying the word and testing with `in`.",
 "variants": [
  {
   "name": "Grow the repetition until it no longer fits",
   "code": "class Solution:\n    def maxRepeating(self, sequence, word):\n        k = 0\n        while word * (k + 1) in sequence:\n            k += 1\n        return k",
   "time": "O(n²/m)",
   "space": "O(n)",
   "explain": "Find the largest k such that word repeated k times is a substring of the sequence. Keep multiplying the word and testing with `in`.",
   "frames": []
  }
 ]
};
