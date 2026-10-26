window.PROBLEM = {
 "id": "3499",
 "title": "Maximize Active Section with Trade I",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "'0100' → turn the 1 into 0 and the whole 0000 into 1111 → 4.",
 "idea": "A trade turns a block of 1s (with zeros on both sides) into zeros, which merges the two neighbouring zero blocks into one block surrounded by 1s (the augmented ends), and then flips that block to 1s. The gain is the two neighbouring zero blocks' lengths. Return the current ones plus the largest such gain.",
 "input": "s = \"0100\"",
 "output": "4",
 "notes": [],
 "best": "A trade turns a block of 1s (with zeros on both sides) into zeros, which merges the two neighbouring zero blocks into one block surrounded by 1s (the augmented ends), and then flips that block to 1s. The gain is the two neighbouring zero blocks' lengths. Return the current ones plus the largest such gain.",
 "variants": [
  {
   "name": "Best pair of zero blocks around a block of ones",
   "code": "class Solution:\n    def maxActiveSectionsAfterTrade(self, s):\n        blocks = [(c, len(list(g))) for c, g in groupby(s)]\n        best = 0\n        for k in range(1, len(blocks) - 1):\n            if blocks[k][0] == '1':\n                best = max(best, blocks[k - 1][1] + blocks[k + 1][1])\n        return s.count('1') + best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A trade turns a block of 1s (with zeros on both sides) into zeros, which merges the two neighbouring zero blocks into one block surrounded by 1s (the augmented ends), and then flips that block to 1s. The gain is the two neighbouring zero blocks' lengths. Return the current ones plus the largest such gain.",
   "frames": []
  }
 ]
};
