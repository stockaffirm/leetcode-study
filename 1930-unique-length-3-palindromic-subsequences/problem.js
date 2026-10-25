window.PROBLEM = {
 "id": "1930",
 "title": "Unique Length-3 Palindromic Subsequences",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Return the number of distinct palindromic subsequences of length three in s. Example: 'aabca' → 3 ('aba', 'aca', 'aaa').",
 "why": "'aabca': 'aba', 'aca', 'aaa' → 3.",
 "idea": "A length-3 palindrome is x y x. For every letter x take its first and last positions; every distinct letter strictly between them is a valid middle y. Add up the number of distinct letters in each such interval.",
 "input": "s = \"aabca\"",
 "output": "3",
 "notes": [],
 "best": "A length-3 palindrome is x y x. For every letter x take its first and last positions; every distinct letter strictly between them is a valid middle y. Add up the number of distinct letters in each such interval.",
 "variants": [
  {
   "name": "Between first and last occurrence of each letter",
   "code": "class Solution:\n    def countPalindromicSubsequence(self, s):\n        res = 0\n        for c in set(s):\n            i, j = s.index(c), s.rindex(c)\n            if j - i > 1:\n                res += len(set(s[i + 1:j]))\n        return res",
   "time": "O(26·n)",
   "space": "O(1)",
   "explain": "A length-3 palindrome is x y x. For every letter x take its first and last positions; every distinct letter strictly between them is a valid middle y. Add up the number of distinct letters in each such interval.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count outer letters with sets",
   "tag": "Alternative",
   "code": "class Solution:\n    def countPalindromicSubsequence(self, s):\n        seen = set()\n        for i in range(len(s)):\n            for j in range(i + 2, len(s)):\n                if s[i] == s[j]:\n                    for c in set(s[i + 1:j]):\n                        seen.add(s[i] + c + s[j])\n        return len(seen)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Collect distinct triples x y x in a set.",
   "frames": [],
   "alt": true
  }
 ]
};
