window.PROBLEM = {
 "id": "676",
 "title": "Implement Magic Dictionary",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Dictionary ['hello','leetcode']: 'hhllo' is one letter away from 'hello' → true; 'hello' itself is not (needs exactly one change).",
 "idea": "For every word and every position store the word with that position replaced by '*' together with the original letter. A search word matches if some wildcard form of it was stored from a word with a different letter at that position.",
 "input": "buildDict([\"hello\",\"leetcode\"]); search(\"hello\"); search(\"hhllo\"); search(\"hell\"); search(\"leetcoded\")",
 "output": "[None, False, True, False, False]",
 "notes": [],
 "best": "For every word and every position store the word with that position replaced by '*' together with the original letter. A search word matches if some wildcard form of it was stored from a word with a different letter at that position.",
 "variants": [
  {
   "name": "Wildcard patterns for each word",
   "code": "class MagicDictionary:\n    def __init__(self):\n        self.pat = defaultdict(set)\n\n    def buildDict(self, dictionary):\n        for w in dictionary:\n            for i, c in enumerate(w):\n                self.pat[w[:i] + '*' + w[i + 1:]].add(c)\n\n    def search(self, searchWord):\n        w = searchWord\n        for i, c in enumerate(w):\n            letters = self.pat.get(w[:i] + '*' + w[i + 1:])\n            if letters and (len(letters) > 1 or c not in letters):\n                return True\n        return False",
   "time": "O(L) per word",
   "space": "O(total length)",
   "explain": "For every word and every position store the word with that position replaced by '*' together with the original letter. A search word matches if some wildcard form of it was stored from a word with a different letter at that position.",
   "frames": []
  }
 ]
};
