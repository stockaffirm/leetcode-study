window.PROBLEM = {
 "id": "336",
 "title": "Palindrome Pairs",
 "level": "Hard",
 "topic": "Hash Map / Set",
 "question": "Given a list of unique words, return all pairs of positions (i, j) with i ≠ j such that the word words[i] followed directly by words[j] forms a palindrome (reads the same backwards). Example: ['abcd','dcba','lls','s','sssll'] → [[0,1],[1,0],[3,2],[2,4]] ('abcddcba', 'dcbaabcd', 'slls', 'llssssll').",
 "why": "Find all pairs of words (i, j) whose concatenation words[i] + words[j] is a palindrome.",
 "idea": "For each word, split it at every position. If the left part is a palindrome, the reverse of the right part (if it is a word) can go in front; if the right part is a palindrome, the reverse of the left part can go behind. A dictionary makes each lookup O(1).",
 "input": "[\"abcd\",\"dcba\",\"lls\",\"s\",\"sssll\"]",
 "output": "[[0,1],[1,0],[3,2],[2,4]]",
 "notes": [],
 "best": "For each word, split it at every position. If the left part is a palindrome, the reverse of the right part (if it is a word) can go in front; if the right part is a palindrome, the reverse of the left part can go behind. A dictionary makes each lookup O(1).",
 "variants": [
  {
   "name": "Split each word, look up the reverse",
   "code": "class Solution:\n    def palindromePairs(self, words):\n        idx = {w: i for i, w in enumerate(words)}\n        res = []\n        for i, w in enumerate(words):\n            for k in range(len(w) + 1):\n                pre, suf = w[:k], w[k:]\n                if pre == pre[::-1]:\n                    j = idx.get(suf[::-1])\n                    if j is not None and j != i: res.append([j, i])\n                if k != len(w) and suf == suf[::-1]:\n                    j = idx.get(pre[::-1])\n                    if j is not None and j != i: res.append([i, j])\n        return res",
   "time": "O(n·L²)",
   "space": "O(n·L)",
   "explain": "For each word, split it at every position. If the left part is a palindrome, the reverse of the right part (if it is a word) can go in front; if the right part is a palindrome, the reverse of the left part can go behind. A dictionary makes each lookup O(1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Test every ordered pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def palindromePairs(self, words):\n        res = []\n        for i in range(len(words)):\n            for j in range(len(words)):\n                if i != j:\n                    s = words[i] + words[j]\n                    if s == s[::-1]: res.append([i, j])\n        return res",
   "time": "O(n²·L)",
   "space": "O(1)",
   "explain": "Concatenate every pair and check for a palindrome.",
   "frames": [],
   "alt": true
  }
 ]
};
