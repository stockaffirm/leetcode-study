window.PROBLEM = {
 "id": "3042",
 "title": "Count Prefix and Suffix Pairs I",
 "level": "Easy",
 "topic": "Array / String",
 "question": "You are given a list of words. Count the pairs of positions (i, j) with i < j such that words[i] is BOTH a prefix (the beginning) and a suffix (the ending) of words[j]. Example: ['a','aba','ababa','aa'] → ('a','aba'), ('a','ababa'), ('a','aa') and ('aba','ababa') → 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count earlier equal words",
   "tag": "Alternative",
   "code": "class Solution:\n    def countPrefixSuffixPairs(self, words):\n        seen = Counter()\n        count = 0\n        for w in words:\n            n = len(w)\n            for k in range(1, n + 1):\n                if w[:k] == w[n - k:]: count += seen[w[:k]]\n            seen[w] += 1\n        return count",
   "time": "O(n·L)",
   "space": "O(n·L)",
   "explain": "For every length k where the word's first k letters equal its last k letters, add how many earlier words equal that string.",
   "frames": [],
   "alt": true
  }
 ]
};
