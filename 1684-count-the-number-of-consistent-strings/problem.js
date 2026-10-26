window.PROBLEM = {
 "id": "1684",
 "title": "Count the Number of Consistent Strings",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "allowed 'ab', words ['ad','bd','aaab','baa','badab'] → 'aaab' and 'baa' → 2.",
 "idea": "A word is consistent when all its letters are in allowed. Convert allowed to a set and test each word.",
 "input": "allowed = \"ab\", words = [\"ad\",\"bd\",\"aaab\",\"baa\",\"badab\"]",
 "output": "2",
 "notes": [],
 "best": "A word is consistent when all its letters are in allowed. Convert allowed to a set and test each word.",
 "variants": [
  {
   "name": "Subset test against the allowed set",
   "code": "class Solution:\n    def countConsistentStrings(self, allowed, words):\n        a = set(allowed)\n        return sum(set(w) <= a for w in words)",
   "time": "O(total length)",
   "space": "O(1)",
   "explain": "A word is consistent when all its letters are in allowed. Convert allowed to a set and test each word.",
   "frames": []
  }
 ]
};
