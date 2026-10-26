window.PROBLEM = {
 "id": "2451",
 "title": "Odd String Difference",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
