window.PROBLEM = {
 "id": "616",
 "title": "Add Bold Tag in String",
 "level": "Medium",
 "topic": "Intervals",
 "question": "Wrap in <b>…</b> every substring of s that matches one of the words; overlapping or touching matches are merged into one bold tag. Example: 'abcxyz123' with ['abc','123'] → '<b>abc</b>xyz<b>123</b>'.",
 "why": "s 'abcxyz123' with words ['abc','123'] → '<b>abc</b>xyz<b>123</b>'.",
 "idea": "Mark every character covered by an occurrence of any word. Maximal runs of marked characters (which automatically merges overlapping and touching matches) are wrapped in <b>…</b>.",
 "input": "s = \"abcxyz123\", words = [\"abc\",\"123\"]",
 "output": "\"<b>abc</b>xyz<b>123</b>\"",
 "notes": [],
 "best": "Mark every character covered by an occurrence of any word. Maximal runs of marked characters (which automatically merges overlapping and touching matches) are wrapped in <b>…</b>.",
 "variants": [
  {
   "name": "Mark covered positions, merge into bold runs",
   "code": "class Solution:\n    def addBoldTag(self, s, words):\n        bold = [False] * len(s)\n        for w in words:\n            start = s.find(w)\n            while start != -1:\n                for i in range(start, start + len(w)):\n                    bold[i] = True\n                start = s.find(w, start + 1)\n        res = []\n        for i, ch in enumerate(s):\n            if bold[i] and (i == 0 or not bold[i - 1]):\n                res.append('<b>')\n            res.append(ch)\n            if bold[i] and (i == len(s) - 1 or not bold[i + 1]):\n                res.append('</b>')\n        return ''.join(res)",
   "time": "O(n·w·L)",
   "space": "O(n)",
   "explain": "Mark every character covered by an occurrence of any word. Maximal runs of marked characters (which automatically merges overlapping and touching matches) are wrapped in <b>…</b>.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Merge intervals of matches",
   "tag": "Alternative",
   "code": "class Solution:\n    def addBoldTag(self, s, words):\n        spans = []\n        for w in words:\n            i = s.find(w)\n            while i != -1:\n                spans.append((i, i + len(w)))\n                i = s.find(w, i + 1)\n        spans.sort()\n        merged = []\n        for a, b in spans:\n            if merged and a <= merged[-1][1]:\n                merged[-1][1] = max(merged[-1][1], b)\n            else:\n                merged.append([a, b])\n        res = []\n        prev = 0\n        for a, b in merged:\n            res.append(s[prev:a] + '<b>' + s[a:b] + '</b>')\n            prev = b\n        res.append(s[prev:])\n        return ''.join(res)",
   "time": "O(n·w·L)",
   "space": "O(n)",
   "explain": "Collect every match as an interval, merge touching ones, and insert the tags.",
   "frames": [],
   "alt": true
  }
 ]
};
