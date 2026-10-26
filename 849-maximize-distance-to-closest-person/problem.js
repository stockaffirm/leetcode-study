window.PROBLEM = {
 "id": "849",
 "title": "Maximize Distance to Closest Person",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Pick an empty seat to be as far as possible from the nearest person. [1,0,0,0,1,0,1] → the middle of the big gap → 2.",
 "idea": "The best seat is either at an end (distance = empty seats before the first person / after the last) or in the middle of a gap (gap length ÷ 2). Check all three kinds.",
 "input": "[1, 0, 0, 0, 1, 0, 1]",
 "output": "2",
 "notes": [],
 "best": "The best seat is either at an end (distance = empty seats before the first person / after the last) or in the middle of a gap (gap length ÷ 2). Check all three kinds.",
 "variants": [
  {
   "name": "Gaps between occupied seats",
   "code": "class Solution:\n    def maxDistToClosest(self, seats):\n        n = len(seats)\n        first = seats.index(1)\n        last = n - 1 - seats[::-1].index(1)\n        best = max(first, n - 1 - last)\n        prev = first\n        for i in range(first + 1, last + 1):\n            if seats[i] == 1:\n                best = max(best, (i - prev) // 2)\n                prev = i\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The best seat is either at an end (distance = empty seats before the first person / after the last) or in the middle of a gap (gap length ÷ 2). Check all three kinds.",
   "frames": []
  }
 ]
};
