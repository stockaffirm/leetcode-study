window.PROBLEM = {
 "id": "438",
 "title": "Find All Anagrams in a String",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
