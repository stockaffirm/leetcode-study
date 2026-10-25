window.PROBLEM = {
 "id": "291",
 "title": "Word Pattern II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Given a pattern (letters) and a string, decide whether the string can be cut into non-empty words so that each pattern letter always stands for the same word and different letters stand for different words. Example: pattern 'abab', string 'redblueredblue' → True (a = 'red', b = 'blue').",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every way to cut the string",
   "tag": "Brute force",
   "code": "class Solution:\n    def wordPatternMatch(self, pattern, s):\n        k = len(pattern)\n        for cuts in combinations(range(1, len(s)), k - 1):\n            pts = (0,) + cuts + (len(s),)\n            parts = [s[pts[i]:pts[i + 1]] for i in range(k)]\n            m, rev, ok = {}, {}, True\n            for ch, w in zip(pattern, parts):\n                if m.setdefault(ch, w) != w or rev.setdefault(w, ch) != ch:\n                    ok = False\n                    break\n            if ok: return True\n        return False",
   "time": "exponential",
   "space": "O(n)",
   "explain": "Cut s into len(pattern) pieces in every possible way and check the letter↔word mapping.",
   "frames": [],
   "alt": true
  }
 ]
};
