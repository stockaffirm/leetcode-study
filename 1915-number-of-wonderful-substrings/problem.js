window.PROBLEM = {
 "id": "1915",
 "title": "Number of Wonderful Substrings",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
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
   "frames": []
  }
 ]
};
