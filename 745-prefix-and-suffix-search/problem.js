window.PROBLEM = {
 "id": "745",
 "title": "Prefix and Suffix Search",
 "level": "Hard",
 "topic": "Trie",
 "question": "",
 "why": "WordFilter(['apple']).f('a','e') → 0: the word 'apple' starts with 'a' and ends with 'e'.",
 "idea": "Words are short, so precompute every (suffix, prefix) pair of every word as the key 'suffix#prefix' and store the largest word index. A query is then one dictionary lookup of 'suff#pref'.",
 "input": "WordFilter([\"apple\"]); f(\"a\",\"e\")",
 "output": "0",
 "notes": [],
 "best": "Words are short, so precompute every (suffix, prefix) pair of every word as the key 'suffix#prefix' and store the largest word index. A query is then one dictionary lookup of 'suff#pref'.",
 "variants": [
  {
   "name": "Index every 'suffix#prefix' combination",
   "code": "class WordFilter:\n    def __init__(self, words):\n        self.d = {}\n        for idx, w in enumerate(words):\n            for i in range(len(w) + 1):\n                for j in range(len(w) + 1):\n                    self.d[w[i:] + \"#\" + w[:j]] = idx\n    def f(self, pref, suff):\n        return self.d.get(suff + \"#\" + pref, -1)",
   "time": "query O(1)",
   "space": "O(n · L²)",
   "explain": "Words are short, so precompute every (suffix, prefix) pair of every word as the key 'suffix#prefix' and store the largest word index. A query is then one dictionary lookup of 'suff#pref'.",
   "frames": []
  }
 ]
};
