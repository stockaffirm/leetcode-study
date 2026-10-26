window.PROBLEM = {
 "id": "402",
 "title": "Remove K Digits",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "Delete k digits from a number (written as text) to make the number as small as possible. '1432219', k=3 → '1219'.",
 "idea": "Whenever a digit is smaller than the one before it, the earlier bigger digit should go. A stack that stays in non-decreasing order does exactly that; leftover deletions come off the end.",
 "input": "\"1432219\", k=3",
 "output": "\"1219\"",
 "notes": [],
 "best": "Whenever a digit is smaller than the one before it, the earlier bigger digit should go. A stack that stays in non-decreasing order does exactly that; leftover deletions come off the end.",
 "variants": [
  {
   "name": "Monotonic stack of digits",
   "code": "class Solution:\n    def removeKdigits(self, num, k):\n        st = []\n        for d in num:\n            while k and st and st[-1] > d:\n                st.pop()\n                k -= 1\n            st.append(d)\n        if k: st = st[:-k]\n        return ''.join(st).lstrip('0') or '0'",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Whenever a digit is smaller than the one before it, the earlier bigger digit should go. A stack that stays in non-decreasing order does exactly that; leftover deletions come off the end.",
   "frames": []
  }
 ]
};
