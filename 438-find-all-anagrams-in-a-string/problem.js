window.PROBLEM = {
 "id": "438",
 "title": "Find All Anagrams in a String",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Given two strings s and p, return the starting positions of every piece of s (letters sitting next to each other) that is an anagram of p — a rearrangement of exactly the same letters, using each the same number of times. Return the positions in any order. Example: s='cbaebabacd', p='abc' → 'cba' starts at 0 and 'bac' starts at 6 → [0, 6].",
 "why": "Where in the text does a rearrangement of the word p appear? 'cbaebabacd' with p='abc' → starts at 0 ('cba') and 6 ('bac').",
 "idea": "Slide a window the same length as p. Keep letter counts for the window and for p; when they match, record the start. Each step adds one letter and drops one.",
 "input": "s=\"cbaebabacd\", p=\"abc\"",
 "output": "[0, 6]",
 "notes": [],
 "best": "Slide a window the same length as p. Keep letter counts for the window and for p; when they match, record the start. Each step adds one letter and drops one.",
 "variants": [
  {
   "name": "Sliding window of counts",
   "code": "class Solution:\n    def findAnagrams(self, s, p):\n        need, win, ans = Counter(p), Counter(), []\n        for i, ch in enumerate(s):\n            win[ch] += 1\n            if i >= len(p):\n                old = s[i - len(p)]\n                win[old] -= 1\n                if win[old] == 0: del win[old]\n            if win == need: ans.append(i - len(p) + 1)\n        return ans",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Slide a window the same length as p. Keep letter counts for the window and for p; when they match, record the start. Each step adds one letter and drops one.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort every window",
   "tag": "Brute force",
   "code": "class Solution:\n    def findAnagrams(self, s, p):\n        k, target, ans = len(p), sorted(p), []\n        for i in range(len(s) - k + 1):\n            if sorted(s[i:i + k]) == target: ans.append(i)\n        return ans",
   "time": "O(n·k log k)",
   "space": "O(k)",
   "explain": "Sort each window and compare with the sorted word; simple but slow.",
   "frames": [],
   "alt": true
  }
 ]
};
