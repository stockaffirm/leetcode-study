window.PROBLEM = {
 "id": "1331",
 "title": "Rank Transform of an Array",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
