window.PROBLEM = {
 "id": "2185",
 "title": "Counting Words With a Given Prefix",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "['pay','attention','practice','attend'] with prefix 'at' → 2.",
 "idea": "Count the words that start with the prefix.",
 "input": "words = [\"pay\",\"attention\",\"practice\",\"attend\"], pref = \"at\"",
 "output": "2",
 "notes": [],
 "best": "Count the words that start with the prefix.",
 "variants": [
  {
   "name": "startswith",
   "code": "class Solution:\n    def prefixCount(self, words, pref):\n        return sum(w.startswith(pref) for w in words)",
   "time": "O(n·L)",
   "space": "O(1)",
   "explain": "Count the words that start with the prefix.",
   "frames": []
  }
 ]
};
