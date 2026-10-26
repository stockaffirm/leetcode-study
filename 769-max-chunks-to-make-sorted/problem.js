window.PROBLEM = {
 "id": "769",
 "title": "Max Chunks To Make Sorted",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "arr is a permutation of 0..n−1. Cut it into as many chunks as possible so that sorting each chunk separately and gluing them gives the sorted array.",
 "idea": "A cut after index i works exactly when the biggest number so far is i (then the first i+1 numbers are exactly 0..i). Count those positions.",
 "input": "[1,0,2,3,4]",
 "output": "4",
 "notes": [],
 "best": "A cut after index i works exactly when the biggest number so far is i (then the first i+1 numbers are exactly 0..i). Count those positions.",
 "variants": [
  {
   "name": "A chunk ends when max equals the index",
   "code": "class Solution:\n    def maxChunksToSorted(self, arr):\n        chunks = hi = 0\n        for i, x in enumerate(arr):\n            hi = max(hi, x)\n            if hi == i: chunks += 1\n        return chunks",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A cut after index i works exactly when the biggest number so far is i (then the first i+1 numbers are exactly 0..i). Count those positions.",
   "frames": []
  }
 ]
};
