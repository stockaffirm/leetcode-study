window.PROBLEM = {
 "id": "3174",
 "title": "Clear Digits",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'cb34' → '' (digit 3 removes b, digit 4 removes c).",
 "idea": "Scan the string; push letters on a stack and let each digit pop the closest letter to its left.",
 "input": "s = \"cb34\"",
 "output": "\"\"",
 "notes": [],
 "best": "Scan the string; push letters on a stack and let each digit pop the closest letter to its left.",
 "variants": [
  {
   "name": "Stack: a digit deletes the letter before it",
   "code": "class Solution:\n    def clearDigits(self, s):\n        st = []\n        for c in s:\n            if c.isdigit():\n                st.pop()\n            else:\n                st.append(c)\n        return ''.join(st)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Scan the string; push letters on a stack and let each digit pop the closest letter to its left.",
   "frames": []
  }
 ]
};
