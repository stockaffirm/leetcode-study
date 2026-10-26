window.PROBLEM = {
 "id": "820",
 "title": "Short Encoding of Words",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Words can be encoded into one string by writing each word followed by '#'; a word can be 'shared' with a longer word that ends with it (like 'me' inside 'time#'). Return the length of the shortest such encoding of all the words. Example: ['time','me','bell'] → 10 ('time#bell#').",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort by reversed word",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumLengthEncoding(self, words):\n        rev = sorted(w[::-1] for w in set(words))\n        total = 0\n        for i, w in enumerate(rev):\n            if i + 1 < len(rev) and rev[i + 1].startswith(w): continue\n            total += len(w) + 1\n        return total",
   "time": "O(Σ len · log n)",
   "space": "O(Σ len)",
   "explain": "Reverse every word and sort; a word is useless if it is a prefix of the next one in order.",
   "frames": [],
   "alt": true
  }
 ]
};
