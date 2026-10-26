window.PROBLEM = {
 "id": "2116",
 "title": "Check if a Parentheses String Can Be Valid",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
