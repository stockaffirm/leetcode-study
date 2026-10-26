window.PROBLEM = {
 "id": "395",
 "title": "Longest Substring with At Least K Repeating Characters",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'ababbc', k=2: 'c' appears once, so split there → 'ababb' of length 5.",
 "idea": "Any letter with total count < k can never be in a valid substring, so split the string at every such letter and solve the pieces recursively. A piece in which all letters appear at least k times is itself the answer for that piece.",
 "input": "s = \"ababbc\", k = 2",
 "output": "5",
 "notes": [],
 "best": "Any letter with total count < k can never be in a valid substring, so split the string at every such letter and solve the pieces recursively. A piece in which all letters appear at least k times is itself the answer for that piece.",
 "variants": [
  {
   "name": "Split at letters that appear fewer than k times",
   "code": "class Solution:\n    def longestSubstring(self, s, k):\n        if len(s) < k:\n            return 0\n        cnt = Counter(s)\n        for ch, c in cnt.items():\n            if c < k:\n                return max(self.longestSubstring(part, k) for part in s.split(ch))\n        return len(s)",
   "time": "O(n·26)",
   "space": "O(n)",
   "explain": "Any letter with total count < k can never be in a valid substring, so split the string at every such letter and solve the pieces recursively. A piece in which all letters appear at least k times is itself the answer for that piece.",
   "frames": []
  }
 ]
};
