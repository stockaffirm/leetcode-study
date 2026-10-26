window.PROBLEM = {
 "id": "2788",
 "title": "Split Strings by Separator",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given a list of words and a separator character, split every word at the separator and return all the non-empty pieces, in order. Example: ['one.two.three','four.five','six'], '.' → ['one','two','three','four','five','six'].",
 "why": "Split every word by a separator character and return all the non-empty pieces in order.",
 "idea": "Use the built-in split on each word and keep only the non-empty parts.",
 "input": "['one.two.three','four.five','six'], '.'",
 "output": "['one','two','three','four','five','six']",
 "notes": [],
 "best": "Use the built-in split on each word and keep only the non-empty parts.",
 "variants": [
  {
   "name": "Split and drop empties",
   "code": "class Solution:\n    def splitWordsBySeparator(self, words, separator):\n        return [part for w in words for part in w.split(separator) if part]",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Use the built-in split on each word and keep only the non-empty parts.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Replace separator and split once",
   "tag": "Alternative",
   "code": "class Solution:\n    def splitWordsBySeparator(self, words, separator):\n        res = []\n        for w in words:\n            cur = ''\n            for ch in w:\n                if ch == separator:\n                    if cur: res.append(cur)\n                    cur = ''\n                else: cur += ch\n            if cur: res.append(cur)\n        return res",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Join with spaces-like marker then split.",
   "frames": [],
   "alt": true
  }
 ]
};
