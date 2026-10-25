window.PROBLEM = {
 "id": "1328",
 "title": "Break a Palindrome",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Given a palindrome (a word that reads the same backwards) made of lowercase letters, change EXACTLY ONE letter so that it is no longer a palindrome, and make the result the alphabetically smallest possible. Return that word, or an empty string if it can't be done. Example: 'abccba' → change the first letter that is not 'a' → 'aaccba'. 'a' → impossible → ''.",
 "why": "Change exactly one letter so the word is no longer a palindrome, and make the result alphabetically smallest. 'abccba' → 'aaccba'.",
 "idea": "To be smallest, change the earliest possible letter to 'a'. Look only at the first half (the middle letter doesn't matter); if it is all 'a's, change the last letter to 'b'.",
 "input": "\"abccba\"",
 "output": "\"aaccba\"",
 "notes": [],
 "best": "To be smallest, change the earliest possible letter to 'a'. Look only at the first half (the middle letter doesn't matter); if it is all 'a's, change the last letter to 'b'.",
 "variants": [
  {
   "name": "Change the first non-'a' in the first half",
   "code": "class Solution:\n    def breakPalindrome(self, palindrome):\n        n = len(palindrome)\n        if n == 1: return ''\n        for i in range(n // 2):\n            if palindrome[i] != 'a':\n                return palindrome[:i] + 'a' + palindrome[i + 1:]\n        return palindrome[:-1] + 'b'",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "To be smallest, change the earliest possible letter to 'a'. Look only at the first half (the middle letter doesn't matter); if it is all 'a's, change the last letter to 'b'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every change",
   "tag": "Brute force",
   "code": "class Solution:\n    def breakPalindrome(self, palindrome):\n        best = None\n        for i in range(len(palindrome)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                if c == palindrome[i]: continue\n                t = palindrome[:i] + c + palindrome[i + 1:]\n                if t != t[::-1] and (best is None or t < best): best = t\n        return best or ''",
   "time": "O(26·n²)",
   "space": "O(n)",
   "explain": "Try every position and letter, keep the smallest result that is not a palindrome.",
   "frames": [],
   "alt": true
  }
 ]
};
