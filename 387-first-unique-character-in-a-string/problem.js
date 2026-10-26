window.PROBLEM = {
 "id": "387",
 "title": "First Unique Character in a String",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Find the first letter that appears only once and return its position. 'leetcode' → 'l' at 0.",
 "idea": "Count every letter once, then scan left to right and return the first position whose letter has count 1.",
 "input": "\"leetcode\"",
 "output": "0",
 "notes": [],
 "best": "Count every letter once, then scan left to right and return the first position whose letter has count 1.",
 "variants": [
  {
   "name": "Count, then scan",
   "code": "class Solution:\n    def firstUniqChar(self, s):\n        cnt = Counter(s)\n        for i, ch in enumerate(s):\n            if cnt[ch] == 1: return i\n        return -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count every letter once, then scan left to right and return the first position whose letter has count 1.",
   "frames": []
  }
 ]
};
