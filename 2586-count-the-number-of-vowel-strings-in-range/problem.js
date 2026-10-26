window.PROBLEM = {
 "id": "2586",
 "title": "Count the Number of Vowel Strings in Range",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
