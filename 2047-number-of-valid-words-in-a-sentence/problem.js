window.PROBLEM = {
 "id": "2047",
 "title": "Number of Valid Words in a Sentence",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A word (a token separated by spaces) is valid if it has no digits, at most one hyphen that has lowercase letters on both sides, and at most one punctuation mark (! . ,) which, if present, is the last character. Return how many words of the sentence are valid. Example: 'cat and  dog' → 3.",
 "why": "'cat and  dog' → 3 valid words; '!this  1-s b8d!' → 0 (leading punctuation, digits).",
 "idea": "Split on spaces. A token is valid if it has no digits, at most one hyphen that sits between two letters, and punctuation (!.,) at most once and only as the last character.",
 "input": "sentence = \"cat and  dog\"",
 "output": "3",
 "notes": [],
 "best": "Split on spaces. A token is valid if it has no digits, at most one hyphen that sits between two letters, and punctuation (!.,) at most once and only as the last character.",
 "variants": [
  {
   "name": "Check each token against the three rules",
   "code": "class Solution:\n    def countValidWords(self, sentence):\n        def ok(w):\n            hyphens = 0\n            for i, c in enumerate(w):\n                if c.isdigit():\n                    return False\n                if c == '-':\n                    hyphens += 1\n                    if hyphens > 1 or i == 0 or i == len(w) - 1:\n                        return False\n                    if not (w[i - 1].isalpha() and w[i + 1].isalpha()):\n                        return False\n                elif c in '!.,' and i != len(w) - 1:\n                    return False\n            return True\n        return sum(ok(w) for w in sentence.split())",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Split on spaces. A token is valid if it has no digits, at most one hyphen that sits between two letters, and punctuation (!.,) at most once and only as the last character.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count characters",
   "tag": "Alternative",
   "code": "class Solution:\n    def countValidWords(self, sentence):\n        res = 0\n        for w in sentence.split():\n            if any(c.isdigit() for c in w):\n                continue\n            if sum(c in '!.,' for c in w) > 1 or (any(c in '!.,' for c in w) and w[-1] not in '!.,'):\n                continue\n            if w.count('-') > 1:\n                continue\n            if '-' in w:\n                i = w.index('-')\n                if i == 0 or i == len(w) - 1 or not (w[i - 1].isalpha() and w[i + 1].isalpha()):\n                    continue\n            res += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Use str.count and positions instead of a per-character loop.",
   "frames": [],
   "alt": true
  }
 ]
};
