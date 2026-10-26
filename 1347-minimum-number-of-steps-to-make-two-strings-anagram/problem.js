window.PROBLEM = {
 "id": "1347",
 "title": "Minimum Number of Steps to Make Two Strings Anagram",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "In one step you replace any character of t. Fewest steps to make t an anagram of s (same letters, any order)?",
 "idea": "Count letters in both. Every letter t has more of than s must be replaced: sum those surpluses.",
 "input": "s=\"bab\", t=\"aba\"",
 "output": "1",
 "notes": [],
 "best": "Count letters in both. Every letter t has more of than s must be replaced: sum those surpluses.",
 "variants": [
  {
   "name": "Count surplus letters",
   "code": "class Solution:\n    def minSteps(self, s, t):\n        cnt = Counter(s)\n        cnt.subtract(Counter(t))\n        return sum(v for v in cnt.values() if v > 0)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Count letters in both. Every letter t has more of than s must be replaced: sum those surpluses.",
   "frames": []
  }
 ]
};
