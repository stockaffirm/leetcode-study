window.PROBLEM = {
 "id": "2965",
 "title": "Find Missing and Repeated Values",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[[1,3],[2,2]]: 2 appears twice, 4 never appears → [2, 4].",
 "idea": "The grid holds the numbers 1…n² once each, except one repeated and one missing. Count them and report the value with count 2 and the one with count 0.",
 "input": "grid = [[1,3],[2,2]]",
 "output": "[2, 4]",
 "notes": [],
 "best": "The grid holds the numbers 1…n² once each, except one repeated and one missing. Count them and report the value with count 2 and the one with count 0.",
 "variants": [
  {
   "name": "Count every value",
   "code": "class Solution:\n    def findMissingAndRepeatedValues(self, grid):\n        cnt = Counter(x for row in grid for x in row)\n        n2 = len(grid) ** 2\n        repeated = next(x for x, c in cnt.items() if c == 2)\n        missing = next(x for x in range(1, n2 + 1) if x not in cnt)\n        return [repeated, missing]",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "The grid holds the numbers 1…n² once each, except one repeated and one missing. Count them and report the value with count 2 and the one with count 0.",
   "frames": []
  }
 ]
};
