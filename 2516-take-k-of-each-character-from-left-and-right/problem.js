window.PROBLEM = {
 "id": "2516",
 "title": "Take K of Each Character From Left and Right",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'aabaaaacaabc', k=2 → take 8 from the ends.",
 "idea": "Taking from both ends leaves a contiguous middle window untouched. The remaining characters (outside the window) must contain at least k of each of a, b, c. So find the longest window whose removal still leaves ≥ k of each letter: slide it, shrinking from the left when some letter drops below k. Answer = n − longest window (−1 if the total counts are below k).",
 "input": "s = \"aabaaaacaabc\", k = 2",
 "output": "8",
 "notes": [],
 "best": "Taking from both ends leaves a contiguous middle window untouched. The remaining characters (outside the window) must contain at least k of each of a, b, c. So find the longest window whose removal still leaves ≥ k of each letter: slide it, shrinking from the left when some letter drops below k. Answer = n − longest window (−1 if the total counts are below k).",
 "variants": [
  {
   "name": "Longest middle window you can leave behind",
   "code": "class Solution:\n    def takeCharacters(self, s, k):\n        total = Counter(s)\n        if any(total[c] < k for c in 'abc'):\n            return -1\n        left = 0\n        best = 0\n        window = Counter()\n        for right, ch in enumerate(s):\n            window[ch] += 1\n            while total[ch] - window[ch] < k:\n                window[s[left]] -= 1\n                left += 1\n            best = max(best, right - left + 1)\n        return len(s) - best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Taking from both ends leaves a contiguous middle window untouched. The remaining characters (outside the window) must contain at least k of each of a, b, c. So find the longest window whose removal still leaves ≥ k of each letter: slide it, shrinking from the left when some letter drops below k. Answer = n − longest window (−1 if the total counts are below k).",
   "frames": []
  }
 ]
};
