window.PROBLEM = {
 "id": "420",
 "title": "Strong Password Checker",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "'aA1' → needs 3 more characters → 3.",
 "idea": "A password is strong if it has 6–20 characters, a lowercase, an uppercase and a digit, and no three equal characters in a row. Count the missing character types and the runs of ≥ 3 equal characters. If length < 6: max(6 − n, missing). If length ≤ 20: max(missing, sum of run//3). If longer than 20: deleting characters can shorten runs cheaply (runs of length 3k need 1 deletion to save a replacement, 3k+1 need 2, …); the answer is the excess length plus the remaining replacements, at least the missing types.",
 "input": "password = \"aA1\"",
 "output": "3",
 "notes": [],
 "best": "A password is strong if it has 6–20 characters, a lowercase, an uppercase and a digit, and no three equal characters in a row. Count the missing character types and the runs of ≥ 3 equal characters. If length < 6: max(6 − n, missing). If length ≤ 20: max(missing, sum of run//3). If longer than 20: deleting characters can shorten runs cheaply (runs of length 3k need 1 deletion to save a replacement, 3k+1 need 2, …); the answer is the excess length plus the remaining replacements, at least the missing types.",
 "variants": [
  {
   "name": "Missing types vs repeats vs length: three cases",
   "code": "class Solution:\n    def strongPasswordChecker(self, password):\n        n = len(password)\n        missing = 3\n        if any(c.islower() for c in password):\n            missing -= 1\n        if any(c.isupper() for c in password):\n            missing -= 1\n        if any(c.isdigit() for c in password):\n            missing -= 1\n        runs = [len(list(g)) for _, g in groupby(password)]\n        replace = sum(r // 3 for r in runs if r >= 3)\n        if n < 6:\n            return max(6 - n, missing)\n        if n <= 20:\n            return max(missing, replace)\n        delete = n - 20\n        ones = delete\n        counts = [r for r in runs if r >= 3]\n        for mod in range(3):\n            for i, r in enumerate(counts):\n                if delete <= 0:\n                    break\n                if r % 3 == mod:\n                    need = mod + 1\n                    use = min(delete, need)\n                    counts[i] -= use\n                    delete -= use\n        replace = sum(r // 3 for r in counts if r >= 3)\n        return ones + max(missing, replace)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A password is strong if it has 6–20 characters, a lowercase, an uppercase and a digit, and no three equal characters in a row. Count the missing character types and the runs of ≥ 3 equal characters. If length < 6: max(6 − n, missing). If length ≤ 20: max(missing, sum of run//3). If longer than 20: deleting characters can shorten runs cheaply (runs of length 3k need 1 deletion to save a replacement, 3k+1 need 2, …); the answer is the excess length plus the remaining replacements, at least the missing types.",
   "frames": []
  }
 ]
};
