window.PROBLEM = {
 "id": "3174",
 "title": "Clear Digits",
 "level": "Easy",
 "topic": "Stack / Monotonic Stack",
 "question": "Repeatedly delete the first digit together with the closest non-digit letter to its left until no digit remains. Return the string. Example: 'cb34' → ''.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Repeated removal",
   "tag": "Brute force",
   "code": "class Solution:\n    def clearDigits(self, s):\n        a = list(s)\n        while True:\n            i = next((k for k, c in enumerate(a) if c.isdigit()), None)\n            if i is None:\n                return ''.join(a)\n            del a[i - 1:i + 1]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Find the first digit and delete it with the letter before it, repeat.",
   "frames": [],
   "alt": true
  }
 ]
};
