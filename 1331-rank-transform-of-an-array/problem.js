window.PROBLEM = {
 "id": "1331",
 "title": "Rank Transform of an Array",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Replace every number of an array by its rank: the smallest value has rank 1, equal numbers share a rank, and the next bigger value gets the next rank. Example: [40,10,20,30] → [4,1,2,3].",
 "why": "[40,10,20,30]: sorted that is 10,20,30,40 → ranks 1,2,3,4 → [4,1,2,3].",
 "idea": "Sort the distinct values, give each its rank (1, 2, 3 …) in a dictionary, then replace every number by its rank.",
 "input": "arr = [40,10,20,30]",
 "output": "[4,1,2,3]",
 "notes": [],
 "best": "Sort the distinct values, give each its rank (1, 2, 3 …) in a dictionary, then replace every number by its rank.",
 "variants": [
  {
   "name": "Sort the distinct values",
   "code": "class Solution:\n    def arrayRankTransform(self, arr):\n        rank = {v: i + 1 for i, v in enumerate(sorted(set(arr)))}\n        return [rank[x] for x in arr]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the distinct values, give each its rank (1, 2, 3 …) in a dictionary, then replace every number by its rank.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort the pairs",
   "tag": "Alternative",
   "code": "class Solution:\n    def arrayRankTransform(self, arr):\n        res = [0] * len(arr)\n        rank = 0\n        prev = None\n        for v, i in sorted((v, i) for i, v in enumerate(arr)):\n            if v != prev:\n                rank += 1\n                prev = v\n            res[i] = rank\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort (value, index) pairs and hand out ranks, repeating the rank for equal values.",
   "frames": [],
   "alt": true
  }
 ]
};
