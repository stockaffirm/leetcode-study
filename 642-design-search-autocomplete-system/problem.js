window.PROBLEM = {
 "id": "642",
 "title": "Design Search Autocomplete System",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "As you type letters, suggest the 3 most used past sentences that start with what you typed (ties alphabetical). Typing '#' saves the sentence.",
 "idea": "Keep a count per sentence and the text typed so far. After each letter, filter sentences by the prefix and sort by (−count, text). '#' adds the finished sentence with count +1 and resets.",
 "input": "sentences [i love you, island, iroman, i love leetcode], counts [5,3,2,2]; type 'i', ' ', 'a', '#'",
 "output": "[..3 suggestions], [2], [], []",
 "notes": [],
 "best": "Keep a count per sentence and the text typed so far. After each letter, filter sentences by the prefix and sort by (−count, text). '#' adds the finished sentence with count +1 and resets.",
 "variants": [
  {
   "name": "Counts per sentence, filter by prefix",
   "code": "class AutocompleteSystem:\n    def __init__(self, sentences, times):\n        self.counts = defaultdict(int)\n        for s, t in zip(sentences, times): self.counts[s] += t\n        self.cur = ''\n    def input(self, c):\n        if c == '#':\n            self.counts[self.cur] += 1\n            self.cur = ''\n            return []\n        self.cur += c\n        hits = [s for s in self.counts if s.startswith(self.cur)]\n        hits.sort(key=lambda s: (-self.counts[s], s))\n        return hits[:3]",
   "time": "O(S log S) per key",
   "space": "O(S)",
   "explain": "Keep a count per sentence and the text typed so far. After each letter, filter sentences by the prefix and sort by (−count, text). '#' adds the finished sentence with count +1 and resets.",
   "frames": []
  }
 ]
};
