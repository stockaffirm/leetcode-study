window.PROBLEM = {
 "id": "3498",
 "title": "Reverse Degree of a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'abc' → 26·1 + 25·2 + 24·3 = 148.",
 "idea": "The reverse position of a letter is 26 for 'a' down to 1 for 'z'. Multiply it by the 1-based index of the letter in the string and add everything.",
 "input": "s = \"abc\"",
 "output": "148",
 "notes": [],
 "best": "The reverse position of a letter is 26 for 'a' down to 1 for 'z'. Multiply it by the 1-based index of the letter in the string and add everything.",
 "variants": [
  {
   "name": "Weight each letter by its reverse alphabet position and index",
   "code": "class Solution:\n    def reverseDegree(self, s):\n        return sum((26 - (ord(c) - 97)) * (i + 1) for i, c in enumerate(s))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The reverse position of a letter is 26 for 'a' down to 1 for 'z'. Multiply it by the 1-based index of the letter in the string and add everything.",
   "frames": []
  }
 ]
};
