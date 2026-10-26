window.PROBLEM = {
 "id": "1754",
 "title": "Largest Merge Of Two Strings",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'cabaa' and 'bcaaa' → 'cbcabaaaaa'.",
 "idea": "To build the largest string, always take the first letter of the word whose remaining suffix is lexicographically larger (comparing whole suffixes, not just the first letters, breaks ties between equal letters correctly).",
 "input": "word1 = \"cabaa\", word2 = \"bcaaa\"",
 "output": "\"cbcabaaaaa\"",
 "notes": [],
 "best": "To build the largest string, always take the first letter of the word whose remaining suffix is lexicographically larger (comparing whole suffixes, not just the first letters, breaks ties between equal letters correctly).",
 "variants": [
  {
   "name": "Compare the remaining suffixes",
   "code": "class Solution:\n    def largestMerge(self, word1, word2):\n        i = j = 0\n        res = []\n        while i < len(word1) or j < len(word2):\n            if word1[i:] > word2[j:]:\n                res.append(word1[i])\n                i += 1\n            else:\n                res.append(word2[j])\n                j += 1\n        return ''.join(res)",
   "time": "O((n+m)²)",
   "space": "O(n+m)",
   "explain": "To build the largest string, always take the first letter of the word whose remaining suffix is lexicographically larger (comparing whole suffixes, not just the first letters, breaks ties between equal letters correctly).",
   "frames": []
  }
 ]
};
