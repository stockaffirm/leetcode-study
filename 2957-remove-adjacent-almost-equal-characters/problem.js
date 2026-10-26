window.PROBLEM = {
 "id": "2957",
 "title": "Remove Adjacent Almost-Equal Characters",
 "level": "Medium",
 "topic": "Greedy",
 "question": "A word is fine when no two neighbouring characters are 'almost equal' (the same, or next to each other in the alphabet). In one operation you may change any character to any lowercase letter. Return the minimum operations to make the word fine. Example: 'aaaaa' → 2.",
 "why": "'aaaaa': change the 2nd and 4th letters to something far away → 2 changes.",
 "idea": "Two neighbours are 'almost equal' if they are the same or adjacent in the alphabet. When a pair is bad, change the second letter of the pair to something far from both neighbours; that also fixes the next pair, so skip one position.",
 "input": "word = \"aaaaa\"",
 "output": "2",
 "notes": [],
 "best": "Two neighbours are 'almost equal' if they are the same or adjacent in the alphabet. When a pair is bad, change the second letter of the pair to something far from both neighbours; that also fixes the next pair, so skip one position.",
 "variants": [
  {
   "name": "Fix a bad pair, then skip one",
   "code": "class Solution:\n    def removeAlmostEqualCharacters(self, word):\n        ops = 0\n        i = 1\n        while i < len(word):\n            if abs(ord(word[i]) - ord(word[i - 1])) <= 1:\n                ops += 1\n                i += 2\n            else:\n                i += 1\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Two neighbours are 'almost equal' if they are the same or adjacent in the alphabet. When a pair is bad, change the second letter of the pair to something far from both neighbours; that also fixes the next pair, so skip one position.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over the last letter",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeAlmostEqualCharacters(self, word):\n        INF = 10**9\n        dp = [0 if chr(97 + c) == word[0] else 1 for c in range(26)]\n        for ch in word[1:]:\n            new = [INF] * 26\n            for c in range(26):\n                cost = 0 if chr(97 + c) == ch else 1\n                best = min(dp[p] for p in range(26) if abs(p - c) > 1)\n                new[c] = best + cost\n            dp = new\n        return min(dp)",
   "time": "O(26²·n)",
   "space": "O(26)",
   "explain": "dp[c] = fewest changes so the prefix is fine and ends in letter c (changing a letter costs 1); take the best compatible previous letter.",
   "frames": [],
   "alt": true
  }
 ]
};
