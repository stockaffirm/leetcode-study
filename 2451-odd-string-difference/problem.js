window.PROBLEM = {
 "id": "2451",
 "title": "Odd String Difference",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "All words have the same length. Turn each word into the list of differences between consecutive letters (a=0 … z=25). All but one word give the same list; return the word that differs. Example: ['adc','wzy','abc'] → 'abc'.",
 "why": "['adc','wzy','abc']: differences are [3,−1], [3,−1], [1,1] → 'abc' is the odd one.",
 "idea": "Turn each word into the list of differences between neighbouring letters. All words but one share the same list; group words by that list and return the one that is alone.",
 "input": "words = [\"adc\",\"wzy\",\"abc\"]",
 "output": "\"abc\"",
 "notes": [],
 "best": "Turn each word into the list of differences between neighbouring letters. All words but one share the same list; group words by that list and return the one that is alone.",
 "variants": [
  {
   "name": "Group by the difference array",
   "code": "class Solution:\n    def oddString(self, words):\n        groups = defaultdict(list)\n        for w in words:\n            key = tuple(ord(b) - ord(a) for a, b in zip(w, w[1:]))\n            groups[key].append(w)\n        for g in groups.values():\n            if len(g) == 1:\n                return g[0]",
   "time": "O(n·L)",
   "space": "O(n·L)",
   "explain": "Turn each word into the list of differences between neighbouring letters. All words but one share the same list; group words by that list and return the one that is alone.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare the first three words",
   "tag": "Alternative",
   "code": "class Solution:\n    def oddString(self, words):\n        def d(w):\n            return tuple(ord(b) - ord(a) for a, b in zip(w, w[1:]))\n        a, b, c = d(words[0]), d(words[1]), d(words[2])\n        if a == b:\n            common = a\n        elif a == c:\n            common = a\n        else:\n            common = b\n        for w in words:\n            if d(w) != common:\n                return w",
   "time": "O(n·L)",
   "space": "O(L)",
   "explain": "Only one word differs: decide from the first three which difference pattern is the majority, then find the word that breaks it.",
   "frames": [],
   "alt": true
  }
 ]
};
