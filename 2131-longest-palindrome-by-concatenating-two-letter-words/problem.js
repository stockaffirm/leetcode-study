window.PROBLEM = {
 "id": "2131",
 "title": "Longest Palindrome by Concatenating Two-Letter Words",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Join some of the given 2-letter words (each at most once) into the longest palindrome. 'lc' and 'cl' pair up; 'gg' can sit in the middle.",
 "idea": "A word pairs with its reverse (each pair adds 4 letters). A word like 'gg' pairs with another 'gg', and one leftover 'gg' can be the centre (+2).",
 "input": "[\"lc\", \"cl\", \"gg\"]",
 "output": "6",
 "notes": [],
 "best": "A word pairs with its reverse (each pair adds 4 letters). A word like 'gg' pairs with another 'gg', and one leftover 'gg' can be the centre (+2).",
 "variants": [
  {
   "name": "Count words and their reverses",
   "code": "class Solution:\n    def longestPalindrome(self, words):\n        cnt = Counter(words)\n        length, center = 0, False\n        for w, c in cnt.items():\n            rev = w[::-1]\n            if w == rev:\n                length += (c // 2) * 4\n                if c % 2: center = True\n            elif w < rev and rev in cnt:\n                length += min(c, cnt[rev]) * 4\n        return length + (2 if center else 0)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A word pairs with its reverse (each pair adds 4 letters). A word like 'gg' pairs with another 'gg', and one leftover 'gg' can be the centre (+2).",
   "frames": []
  }
 ]
};
