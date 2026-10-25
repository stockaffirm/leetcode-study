window.PROBLEM = {
 "id": "2484",
 "title": "Count Palindromic Subsequences",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You are given a string s of digits. Return the number of palindromic subsequences of length 5 (choose 5 digits in order, not necessarily next to each other; it reads the same backwards), modulo 1,000,000,007. Subsequences from different positions count separately. Example: '103301' → '10301' and '10301' (two different choices of digits) → 2.",
 "why": "Count the subsequences of length 5 of a digit string that read the same backwards (answer modulo 1,000,000,007).",
 "idea": "A length-5 palindrome is ab·x·ba. For every middle position, count how many 'ab' pairs exist before it (prefix table) and how many 'ba' pairs after it (suffix table), and multiply for all 100 pairs.",
 "input": "\"103301\"",
 "output": "2",
 "notes": [],
 "best": "A length-5 palindrome is ab·x·ba. For every middle position, count how many 'ab' pairs exist before it (prefix table) and how many 'ba' pairs after it (suffix table), and multiply for all 100 pairs.",
 "variants": [
  {
   "name": "Prefix and suffix pair counts",
   "code": "class Solution:\n    def countPalindromes(self, s):\n        MOD = 10 ** 9 + 7\n        n = len(s)\n        pre = [None] * n\n        cnt1 = [0] * 10\n        cnt2 = [0] * 100\n        for i, ch in enumerate(s):\n            d = int(ch)\n            pre[i] = cnt2[:]\n            for a in range(10): cnt2[a * 10 + d] += cnt1[a]\n            cnt1[d] += 1\n        suf = [None] * n\n        cnt1 = [0] * 10\n        cnt2 = [0] * 100\n        for i in range(n - 1, -1, -1):\n            d = int(s[i])\n            suf[i] = cnt2[:]\n            for a in range(10): cnt2[d * 10 + a] += cnt1[a]\n            cnt1[d] += 1\n        total = 0\n        for i in range(2, n - 2):\n            for ab in range(100):\n                a, b = divmod(ab, 10)\n                total += pre[i][ab] * suf[i][b * 10 + a]\n        return total % MOD",
   "time": "O(100·n)",
   "space": "O(100·n)",
   "explain": "A length-5 palindrome is ab·x·ba. For every middle position, count how many 'ab' pairs exist before it (prefix table) and how many 'ba' pairs after it (suffix table), and multiply for all 100 pairs.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every 5-subsequence",
   "tag": "Brute force",
   "code": "class Solution:\n    def countPalindromes(self, s):\n        count = 0\n        for idx in combinations(range(len(s)), 5):\n            t = [s[i] for i in idx]\n            if t == t[::-1]: count += 1\n        return count % (10 ** 9 + 7)",
   "time": "O(C(n,5))",
   "space": "O(1)",
   "explain": "Enumerate all 5-letter subsequences and test each for being a palindrome (tiny strings only).",
   "frames": [],
   "alt": true
  }
 ]
};
