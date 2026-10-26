window.PROBLEM = {
 "id": "1371",
 "title": "Find the Longest Substring Containing Vowels in Even Counts",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "'eleetminicoworoep' → 'leetminicowor' → 13.",
 "idea": "Keep a 5-bit mask of vowel parities while scanning. A substring has all vowels an even number of times exactly when the mask at its end equals the mask at its start. Remember the first index of each mask and maximise the distance.",
 "input": "s = \"eleetminicoworoep\"",
 "output": "13",
 "notes": [],
 "best": "Keep a 5-bit mask of vowel parities while scanning. A substring has all vowels an even number of times exactly when the mask at its end equals the mask at its start. Remember the first index of each mask and maximise the distance.",
 "variants": [
  {
   "name": "Vowel parity bitmask, first occurrence",
   "code": "class Solution:\n    def findTheLongestSubstring(self, s):\n        first = {0: -1}\n        mask = best = 0\n        bit = {'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16}\n        for i, c in enumerate(s):\n            mask ^= bit.get(c, 0)\n            if mask in first:\n                best = max(best, i - first[mask])\n            else:\n                first[mask] = i\n        return best",
   "time": "O(n)",
   "space": "O(32)",
   "explain": "Keep a 5-bit mask of vowel parities while scanning. A substring has all vowels an even number of times exactly when the mask at its end equals the mask at its start. Remember the first index of each mask and maximise the distance.",
   "frames": []
  }
 ]
};
