window.PROBLEM = {
 "id": "409",
 "title": "Longest Palindrome",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Using the letters of a string (each at most as often as it appears, upper and lower case differ) build the longest possible palindrome and return its length. Example: 'abccccdd' → 7 ('dccaccd').",
 "why": "'abccccdd' has letters c×4, d×2, a×1, b×1: pairs give 4 + 2 = 6 letters, and one single letter can sit in the middle → 7 (e.g. 'dccaccd').",
 "idea": "Count the letters. Every pair of equal letters can go on both sides of the palindrome. If any letter is left over, one of them can be the centre.",
 "input": "s = \"abccccdd\"",
 "output": "7",
 "notes": [],
 "best": "Count the letters. Every pair of equal letters can go on both sides of the palindrome. If any letter is left over, one of them can be the centre.",
 "variants": [
  {
   "name": "Use all pairs, plus one middle letter",
   "code": "class Solution:\n    def longestPalindrome(self, s):\n        cnt = Counter(s)\n        res = sum(c // 2 * 2 for c in cnt.values())\n        return res + (1 if any(c % 2 for c in cnt.values()) else 0)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count the letters. Every pair of equal letters can go on both sides of the palindrome. If any letter is left over, one of them can be the centre.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Toggle a set of unpaired letters",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestPalindrome(self, s):\n        seen = set()\n        pairs = 0\n        for ch in s:\n            if ch in seen:\n                seen.remove(ch)\n                pairs += 1\n            else:\n                seen.add(ch)\n        return pairs * 2 + (1 if seen else 0)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A letter seen twice forms a pair; the unmatched letters stay in the set.",
   "frames": [],
   "alt": true
  }
 ]
};
