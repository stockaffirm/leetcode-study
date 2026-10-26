window.PROBLEM = {
 "id": "676",
 "title": "Implement Magic Dictionary",
 "level": "Medium",
 "topic": "Design",
 "question": "Design MagicDictionary: buildDict(words) stores words; search(word) returns true if changing EXACTLY one letter of word gives a word in the dictionary. Example: dictionary [hello, leetcode]: search('hello')=false, search('hhllo')=true, search('hell')=false, search('leetcoded')=false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Trie with a one-change search",
   "tag": "Alternative",
   "code": "class MagicDictionary:\n    def __init__(self):\n        self.root = {}\n\n    def buildDict(self, dictionary):\n        for w in dictionary:\n            node = self.root\n            for c in w:\n                node = node.setdefault(c, {})\n            node['$'] = True\n\n    def search(self, searchWord):\n        def go(node, i, used):\n            if i == len(searchWord):\n                return used and '$' in node\n            for c, child in node.items():\n                if c == '$':\n                    continue\n                if c == searchWord[i]:\n                    if go(child, i + 1, used):\n                        return True\n                elif not used and go(child, i + 1, True):\n                    return True\n            return False\n        return go(self.root, 0, False)",
   "time": "O(26·L)",
   "space": "O(total length)",
   "explain": "Store words in a trie; search allows exactly one mismatching letter while walking.",
   "frames": [],
   "alt": true
  }
 ]
};
