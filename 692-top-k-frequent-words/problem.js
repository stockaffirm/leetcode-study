window.PROBLEM = {
 "id": "692",
 "title": "Top K Frequent Words",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Given a list of words and a number k, return the k words that appear most often. Put the most frequent first; if two words appear the same number of times, the one that comes first in the alphabet goes first. Example: [i, love, leetcode, i, love, coding], k=2 → 'i' and 'love' each appear twice → ['i','love'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Min-heap of (−count, word)",
   "tag": "Alternative",
   "code": "class Solution:\n    def topKFrequent(self, words, k):\n        cnt = Counter(words)\n        heap = [(-c, w) for w, c in cnt.items()]\n        heapify(heap)\n        return [heappop(heap)[1] for _ in range(k)]",
   "time": "O(n + k log n)",
   "space": "O(n)",
   "explain": "Put (−count, word) pairs in a heap; the smallest tuple is the most frequent, alphabetical on ties.",
   "frames": [],
   "alt": true
  }
 ]
};
