window.PROBLEM = {
 "id": "1122",
 "title": "Relative Sort Array",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "arr1 [2,3,1,3,2,4,6,7,9,2,19], arr2 [2,1,4,3,9,6] → [2,2,2,1,4,3,3,9,6,7,19].",
 "idea": "Elements in arr2 come first in arr2's order; the rest follow in ascending order. Use the key (index in arr2 if present else a large number, value).",
 "input": "arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]",
 "output": "[2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]",
 "notes": [],
 "best": "Elements in arr2 come first in arr2's order; the rest follow in ascending order. Use the key (index in arr2 if present else a large number, value).",
 "variants": [
  {
   "name": "Sort with the position in arr2 as the key",
   "code": "class Solution:\n    def relativeSortArray(self, arr1, arr2):\n        rank = {v: i for i, v in enumerate(arr2)}\n        return sorted(arr1, key=lambda x: (rank.get(x, len(arr2)), x))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Elements in arr2 come first in arr2's order; the rest follow in ascending order. Use the key (index in arr2 if present else a large number, value).",
   "frames": []
  }
 ]
};
