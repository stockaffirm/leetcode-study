window.PROBLEM = {
 "id": "1930",
 "title": "Unique Length-3 Palindromic Subsequences",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
