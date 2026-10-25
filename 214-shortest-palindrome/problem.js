window.PROBLEM = {
 "id": "214",
 "title": "Shortest Palindrome",
 "level": "Hard",
 "topic": "Array / String",
 "question": "You may add characters ONLY in front of a string. Return the shortest palindrome you can create this way. Example: 'aacecaaa' → 'aaacecaaa'; 'abcd' → 'dcbabcd'.",
 "why": "Add characters only in front of a string to make it a palindrome; return the shortest result.",
 "idea": "Find the longest palindromic PREFIX of s: it is the longest prefix that equals a suffix of reverse(s), found with the KMP failure function on s + '#' + reverse(s). Put the reversed remainder in front.",
 "input": "'aacecaaa'",
 "output": "'aaacecaaa'",
 "notes": [],
 "best": "Find the longest palindromic PREFIX of s: it is the longest prefix that equals a suffix of reverse(s), found with the KMP failure function on s + '#' + reverse(s). Put the reversed remainder in front.",
 "variants": [
  {
   "name": "KMP on s + '#' + reverse(s)",
   "code": "class Solution:\n    def shortestPalindrome(self, s):\n        t = s + '#' + s[::-1]\n        lps = [0] * len(t)\n        k = 0\n        for i in range(1, len(t)):\n            while k and t[i] != t[k]: k = lps[k - 1]\n            if t[i] == t[k]: k += 1\n            lps[i] = k\n        return s[lps[-1]:][::-1] + s",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Find the longest palindromic PREFIX of s: it is the longest prefix that equals a suffix of reverse(s), found with the KMP failure function on s + '#' + reverse(s). Put the reversed remainder in front.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Longest palindromic prefix by trying all lengths",
   "tag": "Brute force",
   "code": "class Solution:\n    def shortestPalindrome(self, s):\n        for i in range(len(s), -1, -1):\n            if s[:i] == s[:i][::-1]: return s[i:][::-1] + s",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "From the longest prefix down, find the first that is a palindrome.",
   "frames": [],
   "alt": true
  }
 ]
};
