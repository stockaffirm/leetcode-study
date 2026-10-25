window.PROBLEM = {
 "id": "2116",
 "title": "Check if a Parentheses String Can Be Valid",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You are given a string s of '(' and ')' brackets and a string locked of the same length made of '0' and '1'. If locked[i] is '1' the bracket s[i] cannot be changed; if it is '0' you may change it to '(' or ')'. Return true if you can change the unlocked brackets so that s becomes a valid bracket string (every '(' closed by a later ')' and nothing left over). Example: s='))()))', locked='010100' → true: set the unlocked positions 0 and 4 to '(' to get '()()()'.",
 "why": "Some brackets are locked and some can be changed to '(' or ')'. Can you make the whole string a valid bracket string?",
 "idea": "Odd length is impossible. Scan left→right treating every unlocked bracket as '(' — the balance must never drop below 0. Then scan right→left treating them as ')' with the same check.",
 "input": "s=\"))()))\", locked=\"010100\"",
 "output": "True",
 "notes": [],
 "best": "Odd length is impossible. Scan left→right treating every unlocked bracket as '(' — the balance must never drop below 0. Then scan right→left treating them as ')' with the same check.",
 "variants": [
  {
   "name": "Two passes: wildcard as '(' then as ')'",
   "code": "class Solution:\n    def canBeValid(self, s, locked):\n        n = len(s)\n        if n % 2: return False\n        bal = 0\n        for i in range(n):\n            if locked[i] == '0' or s[i] == '(': bal += 1\n            else: bal -= 1\n            if bal < 0: return False\n        bal = 0\n        for i in range(n - 1, -1, -1):\n            if locked[i] == '0' or s[i] == ')': bal += 1\n            else: bal -= 1\n            if bal < 0: return False\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Odd length is impossible. Scan left→right treating every unlocked bracket as '(' — the balance must never drop below 0. Then scan right→left treating them as ')' with the same check.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Range of possible balances",
   "tag": "Alternative",
   "code": "class Solution:\n    def canBeValid(self, s, locked):\n        if len(s) % 2: return False\n        lo = hi = 0\n        for ch, l in zip(s, locked):\n            if l == '0':\n                lo, hi = lo - 1, hi + 1\n            elif ch == '(':\n                lo, hi = lo + 1, hi + 1\n            else:\n                lo, hi = lo - 1, hi - 1\n            if hi < 0: return False\n            if lo < 0: lo += 2\n        return lo == 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the lowest and highest balance the prefix could have; an unlocked bracket widens the range both ways.",
   "frames": [],
   "alt": true
  }
 ]
};
