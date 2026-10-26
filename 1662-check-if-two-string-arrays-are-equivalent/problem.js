window.PROBLEM = {
 "id": "1662",
 "title": "Check If Two String Arrays are Equivalent",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "['ab','c'] and ['a','bc'] both spell 'abc' → true.",
 "idea": "Join each array into one string and compare.",
 "input": "word1 = [\"ab\",\"c\"], word2 = [\"a\",\"bc\"]",
 "output": "true",
 "notes": [],
 "best": "Join each array into one string and compare.",
 "variants": [
  {
   "name": "Join and compare",
   "code": "class Solution:\n    def arrayStringsAreEqual(self, word1, word2):\n        return \"\".join(word1) == \"\".join(word2)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Join each array into one string and compare.",
   "frames": []
  }
 ]
};
