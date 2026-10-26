window.PROBLEM = {
 "id": "1915",
 "title": "Number of Wonderful Substrings",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "A string of the letters a–j is 'wonderful' if at most one letter appears an odd number of times. Return the number of wonderful non-empty substrings (the same text at different places counts separately). Example: 'aba' → 4.",
 "why": "'aba': the wonderful substrings are 'a', 'b', 'a' and 'aba' (only 'b' has an odd count) → 4.",
 "idea": "Keep a 10-bit mask of which letters have an odd count so far. A substring is wonderful if the two prefix masks are equal or differ in exactly one bit. Count earlier prefixes with those masks.",
 "input": "word = \"aba\"",
 "output": "4",
 "notes": [],
 "best": "Keep a 10-bit mask of which letters have an odd count so far. A substring is wonderful if the two prefix masks are equal or differ in exactly one bit. Count earlier prefixes with those masks.",
 "variants": [
  {
   "name": "Parity bitmask prefix counts",
   "code": "class Solution:\n    def wonderfulSubstrings(self, word):\n        cnt = [0] * 1024\n        cnt[0] = 1\n        mask = res = 0\n        for ch in word:\n            mask ^= 1 << (ord(ch) - 97)\n            res += cnt[mask]\n            for b in range(10):\n                res += cnt[mask ^ (1 << b)]\n            cnt[mask] += 1\n        return res",
   "time": "O(10·n)",
   "space": "O(1024)",
   "explain": "Keep a 10-bit mask of which letters have an odd count so far. A substring is wonderful if the two prefix masks are equal or differ in exactly one bit. Count earlier prefixes with those masks.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every substring",
   "tag": "Brute force",
   "code": "class Solution:\n    def wonderfulSubstrings(self, word):\n        res = 0\n        for i in range(len(word)):\n            mask = 0\n            for j in range(i, len(word)):\n                mask ^= 1 << (ord(word[j]) - 97)\n                if mask & (mask - 1) == 0:\n                    res += 1\n        return res",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Extend each start letter by letter, keeping the odd-count mask, and count when at most one bit is set.",
   "frames": [],
   "alt": true
  }
 ]
};
