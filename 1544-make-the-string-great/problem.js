window.PROBLEM = {
 "id": "1544",
 "title": "Make The String Great",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "Repeatedly remove two adjacent characters that are the same letter in different cases ('aA' or 'Aa'). Return the final string. Example: 'leEeetcode' → 'leetcode'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remove pairs repeatedly",
   "tag": "Brute force",
   "code": "class Solution:\n    def makeGood(self, s):\n        changed = True\n        while changed:\n            changed = False\n            for i in range(len(s) - 1):\n                if abs(ord(s[i]) - ord(s[i + 1])) == 32:\n                    s = s[:i] + s[i + 2:]\n                    changed = True\n                    break\n        return s",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Delete the first bad pair until none is left.",
   "frames": [],
   "alt": true
  }
 ]
};
