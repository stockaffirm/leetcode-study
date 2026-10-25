window.PROBLEM = {
 "id": "387",
 "title": "First Unique Character in a String",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Given a string s, find the first character that appears exactly ONCE in the whole string and return its position (counting from 0), or -1 if every character repeats. Example: 'leetcode' → 'l' appears once and is first → 0; 'aabb' → -1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "find vs rfind",
   "tag": "Pythonic",
   "code": "class Solution:\n    def firstUniqChar(self, s):\n        for i, ch in enumerate(s):\n            if s.find(ch) == s.rfind(ch): return i\n        return -1",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "A letter is unique when its first and last positions are the same.",
   "frames": [],
   "alt": true
  }
 ]
};
