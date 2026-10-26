window.PROBLEM = {
 "id": "720",
 "title": "Longest Word in Dictionary",
 "level": "Medium",
 "topic": "Trie",
 "question": "Return the longest word in words that can be built one character at a time by other words in the list (every prefix is also in the list). On ties return the lexicographically smallest. Example: ['a','banana','app','appl','ap','apply','apple'] → 'apple'.",
 "why": "['a','banana','app','appl','ap','apply','apple'] → 'apple' (a, ap, app, appl, apple are all present).",
 "idea": "A buildable word has every prefix in the list. Sort the words (shorter and alphabetical first). Keep a set of buildable words: a word is buildable if its prefix without the last letter is buildable (or it has length 1). Track the longest, preferring the lexicographically smaller on ties — sorted order gives that for free.",
 "input": "words = [\"a\",\"banana\",\"app\",\"appl\",\"ap\",\"apply\",\"apple\"]",
 "output": "\"apple\"",
 "notes": [],
 "best": "A buildable word has every prefix in the list. Sort the words (shorter and alphabetical first). Keep a set of buildable words: a word is buildable if its prefix without the last letter is buildable (or it has length 1). Track the longest, preferring the lexicographically smaller on ties — sorted order gives that for free.",
 "variants": [
  {
   "name": "Sort, keep words whose prefix was built",
   "code": "class Solution:\n    def longestWord(self, words):\n        built = {\"\"}\n        best = \"\"\n        for w in sorted(words):\n            if w[:-1] in built:\n                built.add(w)\n                if len(w) > len(best):\n                    best = w\n        return best",
   "time": "O(n log n · L)",
   "space": "O(n·L)",
   "explain": "A buildable word has every prefix in the list. Sort the words (shorter and alphabetical first). Keep a set of buildable words: a word is buildable if its prefix without the last letter is buildable (or it has length 1). Track the longest, preferring the lexicographically smaller on ties — sorted order gives that for free.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Trie of all words",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestWord(self, words):\n        trie = {}\n        for w in words:\n            node = trie\n            for c in w:\n                node = node.setdefault(c, {})\n            node['$'] = w\n        best = \"\"\n        st = [trie]\n        while st:\n            node = st.pop()\n            for c, child in node.items():\n                if c == '$':\n                    continue\n                if '$' in child:\n                    w = child['$']\n                    if len(w) > len(best) or (len(w) == len(best) and w < best):\n                        best = w\n                    st.append(child)\n        return best",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Insert all words into a trie, then DFS (Depth-First Search) only through nodes that end a word; keep the deepest, alphabetically first.",
   "frames": [],
   "alt": true
  }
 ]
};
