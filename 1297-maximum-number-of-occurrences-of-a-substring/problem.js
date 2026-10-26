window.PROBLEM = {
 "id": "1297",
 "title": "Maximum Number of Occurrences of a Substring",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
