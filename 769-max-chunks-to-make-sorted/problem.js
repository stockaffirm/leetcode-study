window.PROBLEM = {
 "id": "769",
 "title": "Max Chunks To Make Sorted",
 "level": "Medium",
 "topic": "Greedy",
 "question": "arr is a permutation of 0…n−1. Cut it into as many consecutive chunks as possible, sort each chunk on its own, and concatenate: the result must be the fully sorted array. Return the maximum number of chunks. Example: [1,0,2,3,4] → 4; [4,3,2,1,0] → 1.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix sum equals triangular number",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxChunksToSorted(self, arr):\n        s = chunks = 0\n        for i, x in enumerate(arr):\n            s += x\n            if s == i * (i + 1) // 2: chunks += 1\n        return chunks",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The first i+1 numbers are 0..i exactly when their sum is i(i+1)/2.",
   "frames": [],
   "alt": true
  }
 ]
};
