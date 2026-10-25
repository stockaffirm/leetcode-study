window.PROBLEM = {
 "id": "402",
 "title": "Remove K Digits",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "You are given a number written as a string num, and a whole number k. Remove exactly k digits from it so that the remaining digits (in their original order) form the SMALLEST possible number. Leading zeros in the result are dropped, and if nothing is left the answer is '0'. Example: num='1432219', k=3 → remove 4, 3, 2 → '1219'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remove the first peak, k times",
   "tag": "Brute force",
   "code": "class Solution:\n    def removeKdigits(self, num, k):\n        for _ in range(k):\n            i = 0\n            while i < len(num) - 1 and num[i] <= num[i + 1]: i += 1\n            num = num[:i] + num[i + 1:]\n        return num.lstrip('0') or '0'",
   "time": "O(n·k)",
   "space": "O(n)",
   "explain": "Each time, delete the first digit that is larger than its right neighbour.",
   "frames": [],
   "alt": true
  }
 ]
};
