window.PROBLEM = {
 "id": "3756",
 "title": "Concatenate Non-Zero Digits and Multiply by Sum II",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "s '10203004', query [0,7] → x = 1234, digit sum 10 → 12340.",
 "idea": "For each prefix keep: the number formed by its non-zero digits mod p, their digit sum, and how many non-zero digits there are. For a range [l, r] the number x is (P[r+1] − P[l] · 10^(c)) where c is the count of non-zero digits inside the range. Multiply by the digit sum difference, modulo 1e9+7.",
 "input": "s = \"10203004\", queries = [[0,7],[1,3],[4,6]]",
 "output": "[12340, 4, 9]",
 "notes": [],
 "best": "For each prefix keep: the number formed by its non-zero digits mod p, their digit sum, and how many non-zero digits there are. For a range [l, r] the number x is (P[r+1] − P[l] · 10^(c)) where c is the count of non-zero digits inside the range. Multiply by the digit sum difference, modulo 1e9+7.",
 "variants": [
  {
   "name": "Prefix numbers, digit sums and counts of non-zero digits",
   "code": "class Solution:\n    def sumAndMultiply(self, s, queries):\n        MOD = 10**9 + 7\n        n = len(s)\n        num = [0] * (n + 1)\n        total = [0] * (n + 1)\n        cnt = [0] * (n + 1)\n        pow10 = [1] * (n + 1)\n        for i in range(n):\n            pow10[i + 1] = pow10[i] * 10 % MOD\n            d = int(s[i])\n            if d:\n                num[i + 1] = (num[i] * 10 + d) % MOD\n                total[i + 1] = total[i] + d\n                cnt[i + 1] = cnt[i] + 1\n            else:\n                num[i + 1], total[i + 1], cnt[i + 1] = num[i], total[i], cnt[i]\n        res = []\n        for l, r in queries:\n            c = cnt[r + 1] - cnt[l]\n            x = (num[r + 1] - num[l] * pow10[c]) % MOD\n            res.append(x * (total[r + 1] - total[l]) % MOD)\n        return res",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "For each prefix keep: the number formed by its non-zero digits mod p, their digit sum, and how many non-zero digits there are. For a range [l, r] the number x is (P[r+1] − P[l] · 10^(c)) where c is the count of non-zero digits inside the range. Multiply by the digit sum difference, modulo 1e9+7.",
   "frames": []
  }
 ]
};
