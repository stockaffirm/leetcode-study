window.PROBLEM = {
 "id": "720",
 "title": "Longest Word in Dictionary",
 "level": "Medium",
 "topic": "Trie",
 "question": "",
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
   "frames": []
  }
 ]
};
