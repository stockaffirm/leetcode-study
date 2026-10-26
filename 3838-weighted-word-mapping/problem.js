window.PROBLEM = {
 "id": "3838",
 "title": "Weighted Word Mapping",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'abcd' weighs 5+3+12+14 = 34 → 34 % 26 = 8 → 'r'.",
 "idea": "The weight of a word is the sum of its letters' weights. Take it modulo 26 and map 0 → 'z', 1 → 'y', …, 25 → 'a' (the character with code 122 − r). Join the mapped letters.",
 "input": "words = [\"abcd\",\"def\",\"xyz\"], weights = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2]",
 "output": "\"rij\"",
 "notes": [],
 "best": "The weight of a word is the sum of its letters' weights. Take it modulo 26 and map 0 → 'z', 1 → 'y', …, 25 → 'a' (the character with code 122 − r). Join the mapped letters.",
 "variants": [
  {
   "name": "Weight mod 26, mapped from the back of the alphabet",
   "code": "class Solution:\n    def mapWordWeights(self, words, weights):\n        out = []\n        for w in words:\n            total = sum(weights[ord(c) - 97] for c in w)\n            out.append(chr(122 - total % 26))\n        return ''.join(out)",
   "time": "O(total length)",
   "space": "O(n)",
   "explain": "The weight of a word is the sum of its letters' weights. Take it modulo 26 and map 0 → 'z', 1 → 'y', …, 25 → 'a' (the character with code 122 − r). Join the mapped letters.",
   "frames": []
  }
 ]
};
