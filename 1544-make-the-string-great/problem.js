window.PROBLEM = {
 "id": "1544",
 "title": "Make The String Great",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'leEeetcode' → 'leetcode'.",
 "idea": "Push characters on a stack; if the new character is the same letter in the other case as the top, pop instead.",
 "input": "s = \"leEeetcode\"",
 "output": "\"leetcode\"",
 "notes": [],
 "best": "Push characters on a stack; if the new character is the same letter in the other case as the top, pop instead.",
 "variants": [
  {
   "name": "Stack: cancel adjacent aA / Aa pairs",
   "code": "class Solution:\n    def makeGood(self, s):\n        st = []\n        for c in s:\n            if st and abs(ord(st[-1]) - ord(c)) == 32:\n                st.pop()\n            else:\n                st.append(c)\n        return ''.join(st)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push characters on a stack; if the new character is the same letter in the other case as the top, pop instead.",
   "frames": []
  }
 ]
};
