window.PROBLEM = {
 "id": "1839",
 "title": "Longest Substring Of All Vowels in Order",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "…'aeiaaioaaaaeiiiiouuuooaauuaeiu' → the best beautiful block is 'aaaaeiiiiouuu' of length 13.",
 "idea": "A beautiful substring is a run of a's, then e's, then i's, o's, u's (each at least once). Compress the word into runs of equal letters; any five consecutive runs spelling 'aeiou' form a beautiful substring, and its length is the sum of the five run lengths.",
 "input": "word = \"aeiaaioaaaaeiiiiouuuooaauuaeiu\"",
 "output": "13",
 "notes": [],
 "best": "A beautiful substring is a run of a's, then e's, then i's, o's, u's (each at least once). Compress the word into runs of equal letters; any five consecutive runs spelling 'aeiou' form a beautiful substring, and its length is the sum of the five run lengths.",
 "variants": [
  {
   "name": "Five consecutive letter-runs a, e, i, o, u",
   "code": "class Solution:\n    def longestBeautifulSubstring(self, word):\n        runs = [(c, len(list(g))) for c, g in groupby(word)]\n        best = 0\n        for i in range(len(runs) - 4):\n            window = runs[i:i + 5]\n            if ''.join(c for c, _ in window) == 'aeiou':\n                best = max(best, sum(l for _, l in window))\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A beautiful substring is a run of a's, then e's, then i's, o's, u's (each at least once). Compress the word into runs of equal letters; any five consecutive runs spelling 'aeiou' form a beautiful substring, and its length is the sum of the five run lengths.",
   "frames": []
  }
 ]
};
