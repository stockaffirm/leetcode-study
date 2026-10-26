window.PROBLEM = {
 "id": "1662",
 "title": "Check If Two String Arrays are Equivalent",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return true if two arrays of strings represent the same string when their elements are joined together. Example: ['ab','c'] and ['a','bc'] → true.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare letter by letter without joining",
   "tag": "Alternative",
   "code": "class Solution:\n    def arrayStringsAreEqual(self, word1, word2):\n        def chars(ws):\n            for w in ws:\n                yield from w\n        return all(x == y for x, y in zip_longest(chars(word1), chars(word2)))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Stream the letters of both arrays and compare them pairwise.",
   "frames": [],
   "alt": true
  }
 ]
};
