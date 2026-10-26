window.PROBLEM = {
 "id": "2788",
 "title": "Split Strings by Separator",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Split every word by a separator character and return all the non-empty pieces in order.",
 "idea": "Use the built-in split on each word and keep only the non-empty parts.",
 "input": "['one.two.three','four.five','six'], '.'",
 "output": "['one','two','three','four','five','six']",
 "notes": [],
 "best": "Use the built-in split on each word and keep only the non-empty parts.",
 "variants": [
  {
   "name": "Split and drop empties",
   "code": "class Solution:\n    def splitWordsBySeparator(self, words, separator):\n        return [part for w in words for part in w.split(separator) if part]",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Use the built-in split on each word and keep only the non-empty parts.",
   "frames": []
  }
 ]
};
