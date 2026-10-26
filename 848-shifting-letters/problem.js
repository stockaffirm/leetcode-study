window.PROBLEM = {
 "id": "848",
 "title": "Shifting Letters",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "'abc' with shifts [3,5,9] → letter 0 shifts 17, letter 1 shifts 14, letter 2 shifts 9 → 'rpl'.",
 "idea": "Shifts[i] applies to the first i+1 letters, so letter j moves by the sum of shifts[j:]. Compute suffix sums (mod 26) from the right.",
 "input": "s = \"abc\", shifts = [3,5,9]",
 "output": "\"rpl\"",
 "notes": [],
 "best": "Shifts[i] applies to the first i+1 letters, so letter j moves by the sum of shifts[j:]. Compute suffix sums (mod 26) from the right.",
 "variants": [
  {
   "name": "Suffix sums of the shifts",
   "code": "class Solution:\n    def shiftingLetters(self, s, shifts):\n        res = []\n        total = 0\n        for c, sh in zip(reversed(s), reversed(shifts)):\n            total = (total + sh) % 26\n            res.append(chr((ord(c) - 97 + total) % 26 + 97))\n        return ''.join(reversed(res))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Shifts[i] applies to the first i+1 letters, so letter j moves by the sum of shifts[j:]. Compute suffix sums (mod 26) from the right.",
   "frames": []
  }
 ]
};
