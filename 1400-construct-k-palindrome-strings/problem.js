window.PROBLEM = {
 "id": "1400",
 "title": "Construct K Palindrome Strings",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Can ALL the characters of the string s be used to build exactly k non-empty palindromes? Example: 'annabelle', k=2 → True ('anna' + 'elble'); 'leetcode', k=3 → False.",
 "why": "Can all the letters of a string be used to make exactly k non-empty palindromes?",
 "idea": "Each odd-count letter must be the centre of a different palindrome, so odd letters ≤ k; and k ≤ the number of letters (each palindrome needs at least one).",
 "input": "'annabelle', k=2",
 "output": "True",
 "notes": [],
 "best": "Each odd-count letter must be the centre of a different palindrome, so odd letters ≤ k; and k ≤ the number of letters (each palindrome needs at least one).",
 "variants": [
  {
   "name": "Count the odd letters",
   "code": "class Solution:\n    def canConstruct(self, s, k):\n        odd = sum(c % 2 for c in Counter(s).values())\n        return odd <= k <= len(s)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each odd-count letter must be the centre of a different palindrome, so odd letters ≤ k; and k ≤ the number of letters (each palindrome needs at least one).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "XOR bitmask of letter parity",
   "tag": "Alternative",
   "code": "class Solution:\n    def canConstruct(self, s, k):\n        if k > len(s): return False\n        mask = 0\n        for ch in s: mask ^= 1 << (ord(ch) - 97)\n        return bin(mask).count('1') <= k",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Toggle one bit per letter; the set bits are the odd letters.",
   "frames": [],
   "alt": true
  }
 ]
};
