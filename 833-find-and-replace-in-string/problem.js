window.PROBLEM = {
 "id": "833",
 "title": "Find And Replace in String",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "s 'abcd', index 0 'a'→'eee', index 2 'cd'→'ffff' → 'eeebffff'.",
 "idea": "All replacements are checked against the original string. Order them by index, copy the untouched parts, and when s really has sources[i] at indices[i] write targets[i] instead and skip over the replaced characters.",
 "input": "s = \"abcd\", indices = [0,2], sources = [\"a\",\"cd\"], targets = [\"eee\",\"ffff\"]",
 "output": "\"eeebffff\"",
 "notes": [],
 "best": "All replacements are checked against the original string. Order them by index, copy the untouched parts, and when s really has sources[i] at indices[i] write targets[i] instead and skip over the replaced characters.",
 "variants": [
  {
   "name": "Apply the replacements left to right with a pointer",
   "code": "class Solution:\n    def findReplaceString(self, s, indices, sources, targets):\n        out = []\n        pos = 0\n        for i, src, tgt in sorted(zip(indices, sources, targets)):\n            if s.startswith(src, i):\n                out.append(s[pos:i])\n                out.append(tgt)\n                pos = i + len(src)\n        out.append(s[pos:])\n        return ''.join(out)",
   "time": "O(n + k log k)",
   "space": "O(n)",
   "explain": "All replacements are checked against the original string. Order them by index, copy the untouched parts, and when s really has sources[i] at indices[i] write targets[i] instead and skip over the replaced characters.",
   "frames": []
  }
 ]
};
