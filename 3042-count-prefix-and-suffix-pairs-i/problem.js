window.PROBLEM = {
 "id": "3042",
 "title": "Count Prefix and Suffix Pairs I",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Count pairs of words (i < j) where words[i] is both the start AND the end of words[j].",
 "idea": "With few, short words just test every pair with startswith and endswith.",
 "input": "[\"a\", \"aba\", \"ababa\", \"aa\"]",
 "output": "4",
 "notes": [],
 "best": "With few, short words just test every pair with startswith and endswith.",
 "variants": [
  {
   "name": "Check every pair",
   "code": "class Solution:\n    def countPrefixSuffixPairs(self, words):\n        count = 0\n        for i in range(len(words)):\n            for j in range(i + 1, len(words)):\n                w = words[i]\n                if words[j].startswith(w) and words[j].endswith(w): count += 1\n        return count",
   "time": "O(n²·L)",
   "space": "O(1)",
   "explain": "With few, short words just test every pair with startswith and endswith.",
   "frames": []
  }
 ]
};
