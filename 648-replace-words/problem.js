window.PROBLEM = {
 "id": "648",
 "title": "Replace Words",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
