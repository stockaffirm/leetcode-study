window.PROBLEM = {
 "id": "1328",
 "title": "Break a Palindrome",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
