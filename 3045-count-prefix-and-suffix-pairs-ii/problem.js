window.PROBLEM = {
 "id": "3045",
 "title": "Count Prefix and Suffix Pairs II",
 "level": "Hard",
 "topic": "Trie",
 "question": "You are given a list of words. Count the pairs of positions (i, j) with i < j such that words[i] is BOTH a prefix and a suffix of words[j]. This version has many long words, so checking every pair is too slow. Example: ['a','aba','ababa','aa'] → 4.",
 "why": "Same question as part I, but with very many long words — testing every pair is far too slow.",
 "idea": "Build a trie whose steps are PAIRS (letter from the front, letter from the back). A previous word that is both a prefix and a suffix of the current word is exactly a path of those pairs that ends at a word marker. Count markers while walking.",
 "input": "[\"a\", \"aba\", \"ababa\", \"aa\"]",
 "output": "4",
 "notes": [],
 "best": "Build a trie whose steps are PAIRS (letter from the front, letter from the back). A previous word that is both a prefix and a suffix of the current word is exactly a path of those pairs that ends at a word marker. Count markers while walking.",
 "variants": [
  {
   "name": "Trie of (first letter, last letter) pairs",
   "code": "class Solution:\n    def countPrefixSuffixPairs(self, words):\n        trie = {}\n        count = 0\n        for w in words:\n            node = trie\n            n = len(w)\n            for i in range(n):\n                node = node.setdefault((w[i], w[n - 1 - i]), {})\n                count += node.get('#', 0)\n            node['#'] = node.get('#', 0) + 1\n        return count",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Build a trie whose steps are PAIRS (letter from the front, letter from the back). A previous word that is both a prefix and a suffix of the current word is exactly a path of those pairs that ends at a word marker. Count markers while walking.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Counter of earlier words",
   "tag": "Alternative",
   "code": "class Solution:\n    def countPrefixSuffixPairs(self, words):\n        seen = Counter()\n        count = 0\n        for w in words:\n            n = len(w)\n            for k in range(1, n + 1):\n                if w[:k] == w[n - k:]: count += seen[w[:k]]\n            seen[w] += 1\n        return count",
   "time": "O(total length²)",
   "space": "O(total length)",
   "explain": "For each word, every length where prefix = suffix counts how many earlier words equal it.",
   "frames": [],
   "alt": true
  }
 ]
};
