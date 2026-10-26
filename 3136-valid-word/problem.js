window.PROBLEM = {
 "id": "3136",
 "title": "Valid Word",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'234Adas' is valid: ≥ 3 chars, letters/digits, has a vowel (A) and a consonant (d).",
 "idea": "A valid word has at least 3 characters, consists only of letters and digits, and contains at least one vowel and one consonant (letters only).",
 "input": "word = \"234Adas\"",
 "output": "true",
 "notes": [],
 "best": "A valid word has at least 3 characters, consists only of letters and digits, and contains at least one vowel and one consonant (letters only).",
 "variants": [
  {
   "name": "Check length, characters, one vowel and one consonant",
   "code": "class Solution:\n    def isValid(self, word):\n        if len(word) < 3 or not all(c.isalnum() for c in word):\n            return False\n        letters = [c.lower() for c in word if c.isalpha()]\n        vowel = any(c in 'aeiou' for c in letters)\n        consonant = any(c not in 'aeiou' for c in letters)\n        return vowel and consonant",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A valid word has at least 3 characters, consists only of letters and digits, and contains at least one vowel and one consonant (letters only).",
   "frames": []
  }
 ]
};
