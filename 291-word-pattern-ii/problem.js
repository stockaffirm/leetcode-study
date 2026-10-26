window.PROBLEM = {
 "id": "291",
 "title": "Word Pattern II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "Does the string split into words that match the pattern letter by letter (each pattern letter always the same word, different letters different words)?",
 "idea": "Try to assign the next pattern letter to every possible prefix of the remaining string; remember the mapping and the words already used; backtrack on a clash.",
 "input": "pattern 'abab', s 'redblueredblue'",
 "output": "True",
 "notes": [],
 "best": "Try to assign the next pattern letter to every possible prefix of the remaining string; remember the mapping and the words already used; backtrack on a clash.",
 "variants": [
  {
   "name": "Backtracking over letter→word mappings",
   "code": "class Solution:\n    def wordPatternMatch(self, pattern, s):\n        mp, used = {}, set()\n        def go(i, j):\n            if i == len(pattern) and j == len(s): return True\n            if i == len(pattern) or j == len(s): return False\n            ch = pattern[i]\n            if ch in mp:\n                w = mp[ch]\n                return s.startswith(w, j) and go(i + 1, j + len(w))\n            for end in range(j + 1, len(s) + 1):\n                w = s[j:end]\n                if w in used: continue\n                mp[ch] = w\n                used.add(w)\n                if go(i + 1, end): return True\n                del mp[ch]\n                used.discard(w)\n            return False\n        return go(0, 0)",
   "time": "exponential",
   "space": "O(n)",
   "explain": "Try to assign the next pattern letter to every possible prefix of the remaining string; remember the mapping and the words already used; backtrack on a clash.",
   "frames": []
  }
 ]
};
