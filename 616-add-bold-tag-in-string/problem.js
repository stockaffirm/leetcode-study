window.PROBLEM = {
 "id": "616",
 "title": "Add Bold Tag in String",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
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
   "frames": []
  }
 ]
};
