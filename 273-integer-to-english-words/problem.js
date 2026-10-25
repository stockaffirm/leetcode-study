window.PROBLEM = {
 "id": "273",
 "title": "Integer to English Words",
 "level": "Hard",
 "topic": "Array / String",
 "question": "Given a non-negative whole number num (up to about 2 billion), return its English words, with each word starting with a capital letter and words separated by single spaces — no 'and', no hyphens. Example: 1234567 → 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'. 0 → 'Zero'.",
 "why": "Write a number in words: 1234567 → 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'.",
 "idea": "Split the number into chunks of three digits (billions, millions, thousands, rest). Spell each chunk with a small recursive helper (hundreds, tens, ones) and add the unit name after it.",
 "input": "1234567",
 "output": "\"One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven\"",
 "notes": [],
 "best": "Split the number into chunks of three digits (billions, millions, thousands, rest). Spell each chunk with a small recursive helper (hundreds, tens, ones) and add the unit name after it.",
 "variants": [
  {
   "name": "Billions / millions / thousands in chunks",
   "code": "class Solution:\n    def numberToWords(self, num):\n        if num == 0: return 'Zero'\n        ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']\n        tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']\n        def below1000(n):\n            if n == 0: return []\n            if n < 20: return [ones[n]]\n            if n < 100: return [tens[n // 10]] + below1000(n % 10)\n            return [ones[n // 100], 'Hundred'] + below1000(n % 100)\n        parts = []\n        for unit, name in ((10 ** 9, 'Billion'), (10 ** 6, 'Million'), (1000, 'Thousand'), (1, '')):\n            chunk, num = divmod(num, unit)\n            if chunk:\n                parts += below1000(chunk)\n                if name: parts.append(name)\n        return ' '.join(parts)",
   "time": "O(1) (at most 10 digits)",
   "space": "O(1)",
   "explain": "Split the number into chunks of three digits (billions, millions, thousands, rest). Spell each chunk with a small recursive helper (hundreds, tens, ones) and add the unit name after it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group from the right",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberToWords(self, num):\n        if num == 0: return 'Zero'\n        small = 'One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split()\n        tens = 'Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split()\n        def three(n):\n            out = []\n            if n >= 100:\n                out += [small[n // 100 - 1], 'Hundred']\n                n %= 100\n            if n >= 20:\n                out.append(tens[n // 10 - 2])\n                n %= 10\n            if n: out.append(small[n - 1])\n            return out\n        groups, i = [], 0\n        while num:\n            num, r = divmod(num, 1000)\n            if r: groups.append(three(r) + ([['', 'Thousand', 'Million', 'Billion'][i]] if i else []))\n            i += 1\n        return ' '.join(w for g in reversed(groups) for w in g)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Peel off three digits at a time from the right and attach Thousand / Million / Billion.",
   "frames": [],
   "alt": true
  }
 ]
};
