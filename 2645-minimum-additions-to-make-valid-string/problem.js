window.PROBLEM = {
 "id": "2645",
 "title": "Minimum Additions to Make Valid String",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Insert as few letters a, b, c as needed anywhere in word so that it becomes a concatenation of the string 'abc' (abcabc…). Return the number of insertions. Example: 'b' → 2.",
 "why": "'b' needs an 'a' before and a 'c' after → 2 insertions.",
 "idea": "A valid string is a concatenation of 'abc'. Scan the word: a new group starts whenever a letter is not greater than the previous one. With g groups the final length is 3g, so the additions are 3g − len(word).",
 "input": "word = \"b\"",
 "output": "2",
 "notes": [],
 "best": "A valid string is a concatenation of 'abc'. Scan the word: a new group starts whenever a letter is not greater than the previous one. With g groups the final length is 3g, so the additions are 3g − len(word).",
 "variants": [
  {
   "name": "Count the 'abc' groups needed",
   "code": "class Solution:\n    def addMinimum(self, word):\n        groups = 1\n        for a, b in zip(word, word[1:]):\n            if b <= a:\n                groups += 1\n        return 3 * groups - len(word)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A valid string is a concatenation of 'abc'. Scan the word: a new group starts whenever a letter is not greater than the previous one. With g groups the final length is 3g, so the additions are 3g − len(word).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk the expected letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def addMinimum(self, word):\n        need = 0\n        exp = 0\n        for c in word:\n            target = ord(c) - 97\n            while exp != target:\n                need += 1\n                exp = (exp + 1) % 3\n            exp = (exp + 1) % 3\n        return need + (3 - exp) % 3",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the letter the pattern abcabc… expects next and insert letters until it matches the word's letter.",
   "frames": [],
   "alt": true
  }
 ]
};
