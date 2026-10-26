window.PROBLEM = {
 "id": "859",
 "title": "Buddy Strings",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
