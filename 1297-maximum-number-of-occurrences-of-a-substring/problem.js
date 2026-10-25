window.PROBLEM = {
 "id": "1297",
 "title": "Maximum Number of Occurrences of a Substring",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Look at all substrings of s that have at most maxLetters different letters and a length between minSize and maxSize. Return the largest number of times any such substring occurs in s (occurrences may overlap). Example: 'aababcaab', maxLetters 2, minSize 3, maxSize 4 → 2 ('aab').",
 "why": "Among substrings with at most maxLetters distinct letters and length between minSize and maxSize, find the maximum number of times any one substring occurs.",
 "idea": "If a longer substring occurs t times, its first minSize letters occur at least t times. So only substrings of length exactly minSize need to be counted.",
 "input": "'aababcaab', maxLetters 2, minSize 3, maxSize 4",
 "output": "2 ('aab')",
 "notes": [],
 "best": "If a longer substring occurs t times, its first minSize letters occur at least t times. So only substrings of length exactly minSize need to be counted.",
 "variants": [
  {
   "name": "Only the shortest length matters",
   "code": "class Solution:\n    def maxFreq(self, s, maxLetters, minSize, maxSize):\n        cnt = Counter(s[i:i + minSize] for i in range(len(s) - minSize + 1) if len(set(s[i:i + minSize])) <= maxLetters)\n        return max(cnt.values(), default=0)",
   "time": "O(n·minSize)",
   "space": "O(n)",
   "explain": "If a longer substring occurs t times, its first minSize letters occur at least t times. So only substrings of length exactly minSize need to be counted.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "All allowed lengths",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxFreq(self, s, maxLetters, minSize, maxSize):\n        cnt = Counter()\n        for L in range(minSize, maxSize + 1):\n            for i in range(len(s) - L + 1):\n                t = s[i:i + L]\n                if len(set(t)) <= maxLetters: cnt[t] += 1\n        return max(cnt.values(), default=0)",
   "time": "O(n·(maxSize−minSize)·len)",
   "space": "O(n)",
   "explain": "Count every substring of every allowed length (no shortcut).",
   "frames": [],
   "alt": true
  }
 ]
};
