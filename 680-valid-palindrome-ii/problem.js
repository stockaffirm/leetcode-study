window.PROBLEM = {
 "id": "680",
 "title": "Valid Palindrome II",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "Can the string become a palindrome after deleting at most one character?",
 "idea": "Compare from both ends. At the first mismatch you may skip either the left or the right letter; check whether the rest is a palindrome.",
 "input": "'abca'",
 "output": "True",
 "notes": [],
 "best": "Compare from both ends. At the first mismatch you may skip either the left or the right letter; check whether the rest is a palindrome.",
 "variants": [
  {
   "name": "Two pointers with one skip",
   "code": "class Solution:\n    def validPalindrome(self, s):\n        def pal(l, r):\n            while l < r:\n                if s[l] != s[r]: return False\n                l += 1\n                r -= 1\n            return True\n        l, r = 0, len(s) - 1\n        while l < r:\n            if s[l] != s[r]: return pal(l + 1, r) or pal(l, r - 1)\n            l += 1\n            r -= 1\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Compare from both ends. At the first mismatch you may skip either the left or the right letter; check whether the rest is a palindrome.",
   "frames": []
  }
 ]
};
