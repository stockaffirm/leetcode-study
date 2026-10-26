window.PROBLEM = {
 "id": "3045",
 "title": "Count Prefix and Suffix Pairs II",
 "level": "Hard",
 "topic": "Trie",
 "question": "",
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
   "frames": []
  }
 ]
};
