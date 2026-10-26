window.PROBLEM = {
 "id": "2062",
 "title": "Count Vowel Substrings of a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Count the pieces of the word made ONLY of vowels that contain all five vowels (a, e, i, o, u).",
 "idea": "From each start position extend to the right while letters are vowels, tracking the set of vowels seen; every time the set reaches 5 vowels count one piece.",
 "input": "\"aeiouu\"",
 "output": "2",
 "notes": [],
 "best": "From each start position extend to the right while letters are vowels, tracking the set of vowels seen; every time the set reaches 5 vowels count one piece.",
 "variants": [
  {
   "name": "Extend from every start until a consonant",
   "code": "class Solution:\n    def countVowelSubstrings(self, word):\n        count = 0\n        for i in range(len(word)):\n            seen = set()\n            for j in range(i, len(word)):\n                if word[j] not in 'aeiou': break\n                seen.add(word[j])\n                if len(seen) == 5: count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "From each start position extend to the right while letters are vowels, tracking the set of vowels seen; every time the set reaches 5 vowels count one piece.",
   "frames": []
  }
 ]
};
