window.PROBLEM = {
 "id": "1941",
 "title": "Check if All Characters Have Equal Number of Occurrences",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'abacbc' → a,b,c each 2 times → true.",
 "idea": "Count the letters and check that the set of counts has exactly one value.",
 "input": "s = \"abacbc\"",
 "output": "true",
 "notes": [],
 "best": "Count the letters and check that the set of counts has exactly one value.",
 "variants": [
  {
   "name": "All counts are equal",
   "code": "class Solution:\n    def areOccurrencesEqual(self, s):\n        return len(set(Counter(s).values())) == 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count the letters and check that the set of counts has exactly one value.",
   "frames": []
  }
 ]
};
