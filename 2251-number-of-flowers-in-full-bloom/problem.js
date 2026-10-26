window.PROBLEM = {
 "id": "2251",
 "title": "Number of Flowers in Full Bloom",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "At time 3: flowers [1,6] and [3,7] are open, and [9,12] and [4,13] are not yet → 2.",
 "idea": "Flowers in bloom at time p = flowers already started (start ≤ p) minus flowers already ended (end < p). Sort the starts and the ends once and use two binary searches per person.",
 "input": "flowers=[[1,6],[3,7],[9,12],[4,13]], people=[2,3,7,11]",
 "output": "[1, 2, 2, 2]",
 "notes": [],
 "best": "Flowers in bloom at time p = flowers already started (start ≤ p) minus flowers already ended (end < p). Sort the starts and the ends once and use two binary searches per person.",
 "variants": [
  {
   "name": "Sorted starts and ends with bisect",
   "code": "class Solution:\n    def fullBloomFlowers(self, flowers, people):\n        starts = sorted(s for s, e in flowers)\n        ends = sorted(e for s, e in flowers)\n        return [bisect_right(starts, p) - bisect_left(ends, p) for p in people]",
   "time": "O((n+m) log n)",
   "space": "O(n)",
   "explain": "Flowers in bloom at time p = flowers already started (start ≤ p) minus flowers already ended (end < p). Sort the starts and the ends once and use two binary searches per person.",
   "frames": []
  }
 ]
};
