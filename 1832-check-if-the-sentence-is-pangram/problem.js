window.PROBLEM = {
 "id": "1832",
 "title": "Check if the Sentence Is Pangram",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'thequickbrownfoxjumpsoverthelazydog' uses every letter a–z.",
 "idea": "The sentence has only lower-case letters, so it is a pangram exactly when it has 26 different letters.",
 "input": "sentence = \"thequickbrownfoxjumpsoverthelazydog\"",
 "output": "true",
 "notes": [],
 "best": "The sentence has only lower-case letters, so it is a pangram exactly when it has 26 different letters.",
 "variants": [
  {
   "name": "26 different letters",
   "code": "class Solution:\n    def checkIfPangram(self, sentence):\n        return len(set(sentence)) == 26",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The sentence has only lower-case letters, so it is a pangram exactly when it has 26 different letters.",
   "frames": []
  }
 ]
};
