window.PROBLEM = {
 "id": "642",
 "title": "Design Search Autocomplete System",
 "level": "Hard",
 "topic": "Design",
 "question": "Design a search autocomplete system. It starts with a list of past sentences and how many times each was typed. input(c) receives the next typed character; if c is '#', the sentence typed so far is saved (counted once more) and the system returns an empty list. Otherwise it returns the TOP 3 saved sentences that start with everything typed so far, ordered by how often they were typed (most first) and, for ties, alphabetically. Example: ['i love you','island','iroman','i love leetcode'] with counts [5,3,2,2]: typing 'i' suggests ['i love you','island','i love leetcode'], then ' ' gives ['i love you','i love leetcode'], then 'a' gives [], then '#' gives [].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Trie with counts",
   "tag": "Alternative",
   "code": "class AutocompleteSystem:\n    def __init__(self, sentences, times):\n        self.root = {}\n        self.cur = ''\n        self.node = self.root\n        for s, t in zip(sentences, times): self._add(s, t)\n    def _add(self, s, t):\n        node = self.root\n        for ch in s: node = node.setdefault(ch, {})\n        node['#'] = node.get('#', 0) + t\n    def _collect(self, node, prefix, out):\n        for ch, child in node.items():\n            if ch == '#': out.append((-child, prefix))\n            else: self._collect(child, prefix + ch, out)\n    def input(self, c):\n        if c == '#':\n            self._add(self.cur, 1)\n            self.cur = ''\n            self.node = self.root\n            return []\n        self.cur += c\n        if self.node is not None: self.node = self.node.get(c)\n        if self.node is None: return []\n        out = []\n        self._collect(self.node, self.cur, out)\n        return [s for _, s in sorted(out)[:3]]",
   "time": "O(prefix matches)",
   "space": "O(total letters)",
   "explain": "Store sentences in a trie; typing walks down it and only the matching sub-tree is collected.",
   "frames": [],
   "alt": true
  }
 ]
};
