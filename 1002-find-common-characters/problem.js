window.PROBLEM = {
 "id": "1002",
 "title": "Find Common Characters",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Return the characters (with multiplicity) that appear in every word. Example: ['bella','label','roller'] → ['e','l','l'].",
 "why": "['bella','label','roller'] share e, l, l → ['e','l','l'].",
 "idea": "Intersect the Counters of all words (minimum count per letter) and expand the result.",
 "input": "words = [\"bella\",\"label\",\"roller\"]",
 "output": "['e', 'l', 'l']",
 "notes": [],
 "best": "Intersect the Counters of all words (minimum count per letter) and expand the result.",
 "variants": [
  {
   "name": "Intersect the letter counters",
   "code": "class Solution:\n    def commonChars(self, words):\n        common = Counter(words[0])\n        for w in words[1:]:\n            common &= Counter(w)\n        return sorted(common.elements())",
   "time": "O(total length)",
   "space": "O(1)",
   "explain": "Intersect the Counters of all words (minimum count per letter) and expand the result.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check each letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def commonChars(self, words):\n        res = []\n        for c in 'abcdefghijklmnopqrstuvwxyz':\n            res += [c] * min(w.count(c) for w in words)\n        return res",
   "time": "O(26·n)",
   "space": "O(1)",
   "explain": "For each letter take the minimum count over words.",
   "frames": [],
   "alt": true
  }
 ]
};
