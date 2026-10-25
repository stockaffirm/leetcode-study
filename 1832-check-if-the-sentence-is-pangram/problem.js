window.PROBLEM = {
 "id": "1832",
 "title": "Check if the Sentence Is Pangram",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "A pangram contains every lower-case letter a–z at least once. Return true if the sentence is a pangram. Example: 'thequickbrownfoxjumpsoverthelazydog' → true.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def checkIfPangram(self, sentence):\n        return set(\"abcdefghijklmnopqrstuvwxyz\") <= set(sentence)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Test that each of the 26 letters occurs.",
   "frames": [],
   "alt": true
  }
 ]
};
