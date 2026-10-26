window.PROBLEM = {
 "id": "3713",
 "title": "Longest Balanced Substring I",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'abbac' → 'abba' has a and b twice each → 4.",
 "idea": "A substring is balanced when all distinct letters in it occur equally often. For each start extend to the right keeping a Counter; the substring is balanced when the set of counts has size 1. Keep the longest.",
 "input": "s = \"abbac\"",
 "output": "4",
 "notes": [],
 "best": "A substring is balanced when all distinct letters in it occur equally often. For each start extend to the right keeping a Counter; the substring is balanced when the set of counts has size 1. Keep the longest.",
 "variants": [
  {
   "name": "Extend every start with a letter counter",
   "code": "class Solution:\n    def longestBalanced(self, s):\n        best = 0\n        for i in range(len(s)):\n            cnt = Counter()\n            for j in range(i, len(s)):\n                cnt[s[j]] += 1\n                if len(set(cnt.values())) == 1:\n                    best = max(best, j - i + 1)\n        return best",
   "time": "O(n²)",
   "space": "O(26)",
   "explain": "A substring is balanced when all distinct letters in it occur equally often. For each start extend to the right keeping a Counter; the substring is balanced when the set of counts has size 1. Keep the longest.",
   "frames": []
  }
 ]
};
