window.PROBLEM = {
 "id": "648",
 "title": "Replace Words",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "In English, a 'root' can be followed by other letters to make a longer word (the root 'help' makes 'helpful'). You are given a dictionary of roots and a sentence. Replace every word in the sentence that starts with a root by that root; if a word starts with several roots, use the SHORTEST one. Return the new sentence. Example: roots [cat, bat, rat], 'the cattle was rattled by the battery' → 'the cat was rat by the bat'.",
 "why": "Replace each word of a sentence by its shortest 'root' from a dictionary, if any root is its beginning. 'cattle' with root 'cat' → 'cat'.",
 "idea": "For each word try its prefixes from shortest to longest and stop at the first one found in the root set.",
 "input": "roots [cat, bat, rat], \"the cattle was rattled by the battery\"",
 "output": "\"the cat was rat by the bat\"",
 "notes": [],
 "best": "For each word try its prefixes from shortest to longest and stop at the first one found in the root set.",
 "variants": [
  {
   "name": "Set of roots, try prefixes",
   "code": "class Solution:\n    def replaceWords(self, dictionary, sentence):\n        roots = set(dictionary)\n        out = []\n        for w in sentence.split():\n            for i in range(1, len(w) + 1):\n                if w[:i] in roots:\n                    w = w[:i]\n                    break\n            out.append(w)\n        return ' '.join(out)",
   "time": "O(total letters²)",
   "space": "O(roots)",
   "explain": "For each word try its prefixes from shortest to longest and stop at the first one found in the root set.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Trie of roots",
   "tag": "Alternative",
   "code": "class Solution:\n    def replaceWords(self, dictionary, sentence):\n        trie = {}\n        for r in dictionary:\n            node = trie\n            for ch in r: node = node.setdefault(ch, {})\n            node['$'] = r\n        def root_of(w):\n            node = trie\n            for ch in w:\n                if ch not in node: break\n                node = node[ch]\n                if '$' in node: return node['$']\n            return w\n        return ' '.join(root_of(w) for w in sentence.split())",
   "time": "O(total letters)",
   "space": "O(total root letters)",
   "explain": "Store roots in a letter tree; walk a word down the tree and stop at the first root end.",
   "frames": [],
   "alt": true
  }
 ]
};
