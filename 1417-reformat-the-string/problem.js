window.PROBLEM = {
 "id": "1417",
 "title": "Reformat The String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'a0b1c2' → '0a1b2c'.",
 "idea": "Split into letters and digits. Their counts may differ by at most 1, otherwise return ''. Start with the larger group (letters first on a tie) and alternate taking one from each.",
 "input": "s = \"a0b1c2\"",
 "output": "\"a0b1c2\"",
 "notes": [],
 "best": "Split into letters and digits. Their counts may differ by at most 1, otherwise return ''. Start with the larger group (letters first on a tie) and alternate taking one from each.",
 "variants": [
  {
   "name": "Interleave the larger group first",
   "code": "class Solution:\n    def reformat(self, s):\n        letters = [c for c in s if c.isalpha()]\n        digits = [c for c in s if c.isdigit()]\n        if abs(len(letters) - len(digits)) > 1:\n            return \"\"\n        if len(digits) > len(letters):\n            letters, digits = digits, letters\n        out = []\n        for i in range(len(letters)):\n            out.append(letters[i])\n            if i < len(digits):\n                out.append(digits[i])\n        return ''.join(out)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Split into letters and digits. Their counts may differ by at most 1, otherwise return ''. Start with the larger group (letters first on a tie) and alternate taking one from each.",
   "frames": []
  }
 ]
};
