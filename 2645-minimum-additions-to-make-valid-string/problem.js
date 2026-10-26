window.PROBLEM = {
 "id": "2645",
 "title": "Minimum Additions to Make Valid String",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
