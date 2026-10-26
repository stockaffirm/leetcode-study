window.PROBLEM = {
 "id": "820",
 "title": "Short Encoding of Words",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Words are written one after another, each followed by '#'. A word may share its letters with a longer word that ends the same way. Find the shortest total length.",
 "idea": "A word that is a suffix of another word is free. Put all words in a set, delete every proper suffix of every word, and add up (length + 1) of what remains.",
 "input": "['time','me','bell']",
 "output": "10",
 "notes": [],
 "best": "A word that is a suffix of another word is free. Put all words in a set, delete every proper suffix of every word, and add up (length + 1) of what remains.",
 "variants": [
  {
   "name": "Drop words that are suffixes of others",
   "code": "class Solution:\n    def minimumLengthEncoding(self, words):\n        keep = set(words)\n        for w in words:\n            for k in range(1, len(w)): keep.discard(w[k:])\n        return sum(len(w) + 1 for w in keep)",
   "time": "O(Σ len²)",
   "space": "O(Σ len)",
   "explain": "A word that is a suffix of another word is free. Put all words in a set, delete every proper suffix of every word, and add up (length + 1) of what remains.",
   "frames": []
  }
 ]
};
