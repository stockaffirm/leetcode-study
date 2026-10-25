window.PROBLEM = {
 "id": "2586",
 "title": "Count the Number of Vowel Strings in Range",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Count the words in words[left..right] that start and end with a vowel (a, e, i, o, u). Example: ['are','amy','u'], 0..2 → 2.",
 "why": "['are','amy','u'], indices 0-2: 'are' and 'u' start and end with a vowel → 2.",
 "idea": "In the index range, count words whose first and last letters are both vowels.",
 "input": "words = [\"are\",\"amy\",\"u\"], left = 0, right = 2",
 "output": "2",
 "notes": [],
 "best": "In the index range, count words whose first and last letters are both vowels.",
 "variants": [
  {
   "name": "Check first and last letter",
   "code": "class Solution:\n    def vowelStrings(self, words, left, right):\n        return sum(w[0] in 'aeiou' and w[-1] in 'aeiou' for w in words[left:right + 1])",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "In the index range, count words whose first and last letters are both vowels.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Slice and filter",
   "tag": "Alternative",
   "code": "class Solution:\n    def vowelStrings(self, words, left, right):\n        vowels = set('aeiou')\n        res = 0\n        for i in range(left, right + 1):\n            if words[i][0] in vowels and words[i][-1] in vowels:\n                res += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Use a helper that tests a word.",
   "frames": [],
   "alt": true
  }
 ]
};
