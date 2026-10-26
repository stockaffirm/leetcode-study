window.PROBLEM = {
 "id": "692",
 "title": "Top K Frequent Words",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Return the k most frequent words, most frequent first; words with the same count go in alphabetical order.",
 "idea": "Count the words, then sort by two keys: highest count first, then alphabetical. Take the first k.",
 "input": "[i, love, leetcode, i, love, coding], k=2",
 "output": "[\"i\", \"love\"]",
 "notes": [],
 "best": "Count the words, then sort by two keys: highest count first, then alphabetical. Take the first k.",
 "variants": [
  {
   "name": "Count + sort by (−count, word)",
   "code": "class Solution:\n    def topKFrequent(self, words, k):\n        cnt = Counter(words)\n        return sorted(cnt, key=lambda w: (-cnt[w], w))[:k]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Count the words, then sort by two keys: highest count first, then alphabetical. Take the first k.",
   "frames": []
  }
 ]
};
