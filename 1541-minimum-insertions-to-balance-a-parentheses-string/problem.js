window.PROBLEM = {
 "id": "1541",
 "title": "Minimum Insertions to Balance a Parentheses String",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'(()))': the first '(' needs '))', the second '(' needs '))' — we have '))' and one more ')'. One more ')' for the first '(' is missing → 1 insertion.",
 "idea": "Every '(' needs TWO ')'. Track how many ')' are still owed (need). A '(' adds 2; if need is odd when a '(' arrives, insert one ')' first. A ')' reduces need; if need would go negative insert a '(' (count 1, and now one more ')' is owed). At the end the owed ')' must be inserted.",
 "input": "s = \"(()))\"",
 "output": "1",
 "notes": [],
 "best": "Every '(' needs TWO ')'. Track how many ')' are still owed (need). A '(' adds 2; if need is odd when a '(' arrives, insert one ')' first. A ')' reduces need; if need would go negative insert a '(' (count 1, and now one more ')' is owed). At the end the owed ')' must be inserted.",
 "variants": [
  {
   "name": "Count the closing brackets still needed",
   "code": "class Solution:\n    def minInsertions(self, s):\n        need = res = 0\n        for ch in s:\n            if ch == \"(\":\n                if need % 2 == 1:\n                    res += 1\n                    need -= 1\n                need += 2\n            else:\n                need -= 1\n                if need < 0:\n                    res += 1\n                    need += 2\n        return res + need",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Every '(' needs TWO ')'. Track how many ')' are still owed (need). A '(' adds 2; if need is odd when a '(' arrives, insert one ')' first. A ')' reduces need; if need would go negative insert a '(' (count 1, and now one more ')' is owed). At the end the owed ')' must be inserted.",
   "frames": []
  }
 ]
};
