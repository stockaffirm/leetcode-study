window.PROBLEM = {
 "id": "624",
 "title": "Maximum Distance in Arrays",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[[1,2,3],[4,5],[1,2,3]] → 5 − 1 = 4.",
 "idea": "The best pair uses the minimum of one array and the maximum of another. Scan the arrays keeping the smallest first element and the largest last element seen so far (from earlier arrays) and test each array against them.",
 "input": "arrays = [[1,2,3],[4,5],[1,2,3]]",
 "output": "4",
 "notes": [],
 "best": "The best pair uses the minimum of one array and the maximum of another. Scan the arrays keeping the smallest first element and the largest last element seen so far (from earlier arrays) and test each array against them.",
 "variants": [
  {
   "name": "Pair the smallest so far with the current largest",
   "code": "class Solution:\n    def maxDistance(self, arrays):\n        lo, hi = arrays[0][0], arrays[0][-1]\n        best = 0\n        for a in arrays[1:]:\n            best = max(best, abs(a[-1] - lo), abs(hi - a[0]))\n            lo = min(lo, a[0])\n            hi = max(hi, a[-1])\n        return best",
   "time": "O(m)",
   "space": "O(1)",
   "explain": "The best pair uses the minimum of one array and the maximum of another. Scan the arrays keeping the smallest first element and the largest last element seen so far (from earlier arrays) and test each array against them.",
   "frames": []
  }
 ]
};
