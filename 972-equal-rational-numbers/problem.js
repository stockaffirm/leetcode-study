window.PROBLEM = {
 "id": "972",
 "title": "Equal Rational Numbers",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "'0.(52)' and '0.5(25)' are both 52/99 → true.",
 "idea": "A number looks like <int>, <int>.<frac>, or <int>.<frac>(<repeat>). Convert exactly: value = int + frac / 10^len(frac) + repeat / (10^len(frac) · (10^len(repeat) − 1)). Compare the two exact fractions.",
 "input": "s = \"0.(52)\", t = \"0.5(25)\"",
 "output": "true",
 "notes": [],
 "best": "A number looks like <int>, <int>.<frac>, or <int>.<frac>(<repeat>). Convert exactly: value = int + frac / 10^len(frac) + repeat / (10^len(frac) · (10^len(repeat) − 1)). Compare the two exact fractions.",
 "variants": [
  {
   "name": "Convert each string to an exact fraction",
   "code": "class Solution:\n    def isRationalEqual(self, s, t):\n        def value(x):\n            if '(' in x:\n                head, rest = x.split('(')\n                rep = rest[:-1]\n            else:\n                head, rep = x, ''\n            if '.' in head:\n                whole, frac = head.split('.')\n            else:\n                whole, frac = head, ''\n            v = Fraction(int(whole))\n            if frac:\n                v += Fraction(int(frac), 10 ** len(frac))\n            if rep:\n                v += Fraction(int(rep), 10 ** len(frac) * (10 ** len(rep) - 1))\n            return v\n        return value(s) == value(t)",
   "time": "O(L)",
   "space": "O(L)",
   "explain": "A number looks like <int>, <int>.<frac>, or <int>.<frac>(<repeat>). Convert exactly: value = int + frac / 10^len(frac) + repeat / (10^len(frac) · (10^len(repeat) − 1)). Compare the two exact fractions.",
   "frames": []
  }
 ]
};
