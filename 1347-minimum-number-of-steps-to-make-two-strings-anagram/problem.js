window.PROBLEM = {
 "id": "1347",
 "title": "Minimum Number of Steps to Make Two Strings Anagram",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Two strings s and t have the same length. In one step you may replace any single letter of t with any letter. Return the minimum number of steps to make t an anagram of s (the same letters, possibly in a different order). Example: s='leetcode', t='practice' → 5.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "26 counters",
   "tag": "Alternative",
   "code": "class Solution:\n    def minSteps(self, s, t):\n        a, b = [0] * 26, [0] * 26\n        for ch in s: a[ord(ch) - 97] += 1\n        for ch in t: b[ord(ch) - 97] += 1\n        return sum(max(0, a[i] - b[i]) for i in range(26))",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Letter-count arrays; the answer is the sum of positive differences.",
   "frames": [],
   "alt": true
  }
 ]
};
