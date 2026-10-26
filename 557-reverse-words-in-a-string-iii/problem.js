window.PROBLEM = {
 "id": "557",
 "title": "Reverse Words in a String III",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'Let's take LeetCode contest' → \"s'teL ekat edoCteeL tsetnoc\".",
 "idea": "Split on spaces, reverse every word and join with spaces again.",
 "input": "s = \"Let's take LeetCode contest\"",
 "output": "\"s'teL ekat edoCteeL tsetnoc\"",
 "notes": [],
 "best": "Split on spaces, reverse every word and join with spaces again.",
 "variants": [
  {
   "name": "Reverse each word, keep the order",
   "code": "class Solution:\n    def reverseWords(self, s):\n        return ' '.join(w[::-1] for w in s.split(' '))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Split on spaces, reverse every word and join with spaces again.",
   "frames": []
  }
 ]
};
