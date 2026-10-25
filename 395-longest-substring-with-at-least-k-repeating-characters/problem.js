window.PROBLEM = {
 "id": "395",
 "title": "Longest Substring with At Least K Repeating Characters",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Return the length of the longest substring in which every letter appears at least k times. Example: 'ababbc', k=2 → 5.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try 1…26 distinct letters with a window",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestSubstring(self, s, k):\n        best = 0\n        for target in range(1, 27):\n            cnt = Counter()\n            left = distinct = enough = 0\n            for r, ch in enumerate(s):\n                cnt[ch] += 1\n                if cnt[ch] == 1:\n                    distinct += 1\n                if cnt[ch] == k:\n                    enough += 1\n                while distinct > target:\n                    c = s[left]\n                    if cnt[c] == k:\n                        enough -= 1\n                    cnt[c] -= 1\n                    if cnt[c] == 0:\n                        distinct -= 1\n                    left += 1\n                if distinct == enough == target:\n                    best = max(best, r - left + 1)\n        return best",
   "time": "O(26·n)",
   "space": "O(1)",
   "explain": "For each target number of distinct letters slide a window and require every letter in it to appear at least k times.",
   "frames": [],
   "alt": true
  }
 ]
};
