window.PROBLEM = {
 "id": "2000",
 "title": "Reverse Prefix of Word",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'abcdefd', ch 'd' → 'dcbaefd'.",
 "idea": "Find the first index of ch. If there is none return the word; otherwise reverse the slice up to and including that index.",
 "input": "word = \"abcdefd\", ch = \"d\"",
 "output": "\"dcbaefd\"",
 "notes": [],
 "best": "Find the first index of ch. If there is none return the word; otherwise reverse the slice up to and including that index.",
 "variants": [
  {
   "name": "Find the first ch, reverse up to it",
   "code": "class Solution:\n    def reversePrefix(self, word, ch):\n        i = word.find(ch)\n        return word[:i + 1][::-1] + word[i + 1:]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find the first index of ch. If there is none return the word; otherwise reverse the slice up to and including that index.",
   "frames": []
  }
 ]
};
