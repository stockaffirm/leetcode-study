window.PROBLEM = {
 "id": "916",
 "title": "Word Subsets",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "words2 ['e','o'] needs one 'e' and one 'o' → 'facebook', 'google', 'leetcode' are universal.",
 "idea": "A word is universal if it contains every word of words2 as a subset (with multiplicity). Combine words2 into a single table: for each letter the maximum count needed by any word. Then check each word of words1 against the table.",
 "input": "words1 = [\"amazon\",\"apple\",\"facebook\",\"google\",\"leetcode\"], words2 = [\"e\",\"o\"]",
 "output": "['facebook', 'google', 'leetcode']",
 "notes": [],
 "best": "A word is universal if it contains every word of words2 as a subset (with multiplicity). Combine words2 into a single table: for each letter the maximum count needed by any word. Then check each word of words1 against the table.",
 "variants": [
  {
   "name": "Merge the requirements of words2 into one maximum-count table",
   "code": "class Solution:\n    def wordSubsets(self, words1, words2):\n        need = Counter()\n        for w in words2:\n            need |= Counter(w)\n        return [w for w in words1 if not (need - Counter(w))]",
   "time": "O(total length)",
   "space": "O(26)",
   "explain": "A word is universal if it contains every word of words2 as a subset (with multiplicity). Combine words2 into a single table: for each letter the maximum count needed by any word. Then check each word of words1 against the table.",
   "frames": []
  }
 ]
};
