window.PROBLEM = {
 "id": "859",
 "title": "Buddy Strings",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Given two strings s and goal, return True if you can swap exactly two letters of s (two different positions) and obtain goal. Example: 'ab' and 'ba' → True. 'ab' and 'ab' → False, but 'aa' and 'aa' → True (swapping two equal letters changes nothing).",
 "why": "Can you make s equal to goal by swapping exactly two letters of s?",
 "idea": "If s already equals goal you need a repeated letter to swap with itself. Otherwise there must be exactly two differing positions and they must cross-match.",
 "input": "\"ab\", \"ba\"",
 "output": "True",
 "notes": [],
 "best": "If s already equals goal you need a repeated letter to swap with itself. Otherwise there must be exactly two differing positions and they must cross-match.",
 "variants": [
  {
   "name": "Differences or a repeated letter",
   "code": "class Solution:\n    def buddyStrings(self, s, goal):\n        if len(s) != len(goal): return False\n        if s == goal: return len(set(s)) < len(s)\n        diff = [(a, b) for a, b in zip(s, goal) if a != b]\n        return len(diff) == 2 and diff[0] == diff[1][::-1]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "If s already equals goal you need a repeated letter to swap with itself. Otherwise there must be exactly two differing positions and they must cross-match.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every swap",
   "tag": "Brute force",
   "code": "class Solution:\n    def buddyStrings(self, s, goal):\n        if len(s) != len(goal): return False\n        for i in range(len(s)):\n            for j in range(i + 1, len(s)):\n                t = list(s)\n                t[i], t[j] = t[j], t[i]\n                if ''.join(t) == goal: return True\n        return False",
   "time": "O(n³)",
   "space": "O(n)",
   "explain": "Swap every pair of letters of s and compare with goal.",
   "frames": [],
   "alt": true
  }
 ]
};
