window.PROBLEM = {
 "id": "966",
 "title": "Vowel Spellchecker",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'KiTe' matches 'kite' case-insensitively and 'keti' matches 'KiTe' when vowels are ignored.",
 "idea": "Answer each query by priority: exact match; else the first word equal ignoring case; else the first word equal after lowercasing and replacing every vowel by '*'. Build the three tables once, keeping the first word for each key.",
 "input": "wordlist = [\"KiTe\",\"kite\",\"hare\",\"Hare\"], queries = [\"kite\",\"Kite\",\"KiTe\",\"Hare\",\"HARE\",\"Hear\",\"hear\",\"keti\",\"keet\",\"keto\"]",
 "output": "['kite', 'KiTe', 'KiTe', 'Hare', 'hare', '', '', 'KiTe', '', 'KiTe']",
 "notes": [],
 "best": "Answer each query by priority: exact match; else the first word equal ignoring case; else the first word equal after lowercasing and replacing every vowel by '*'. Build the three tables once, keeping the first word for each key.",
 "variants": [
  {
   "name": "Three lookup tables: exact, case-insensitive, vowel-masked",
   "code": "class Solution:\n    def spellchecker(self, wordlist, queries):\n        def mask(w):\n            return ''.join('*' if c in 'aeiou' else c for c in w.lower())\n        exact = set(wordlist)\n        case, vowel = {}, {}\n        for w in wordlist:\n            case.setdefault(w.lower(), w)\n            vowel.setdefault(mask(w), w)\n        res = []\n        for q in queries:\n            if q in exact:\n                res.append(q)\n            elif q.lower() in case:\n                res.append(case[q.lower()])\n            else:\n                res.append(vowel.get(mask(q), \"\"))\n        return res",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Answer each query by priority: exact match; else the first word equal ignoring case; else the first word equal after lowercasing and replacing every vowel by '*'. Build the three tables once, keeping the first word for each key.",
   "frames": []
  }
 ]
};
