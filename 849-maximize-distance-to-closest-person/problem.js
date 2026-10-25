window.PROBLEM = {
 "id": "849",
 "title": "Maximize Distance to Closest Person",
 "level": "Medium",
 "topic": "Array / String",
 "question": "seats[i] is 1 if someone sits in seat i and 0 if it is empty (there is at least one person and one empty seat). Alex wants to sit in an empty seat so that the distance to the CLOSEST person is as large as possible. Return that largest distance. Example: [1,0,0,0,1,0,1] → the middle seat of the gap of three is 2 away from both neighbours → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Distance from the left and from the right",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxDistToClosest(self, seats):\n        n = len(seats)\n        left, right = [n] * n, [n] * n\n        for i in range(n):\n            if seats[i]: left[i] = 0\n            elif i: left[i] = left[i - 1] + 1\n        for i in range(n - 1, -1, -1):\n            if seats[i]: right[i] = 0\n            elif i < n - 1: right[i] = right[i + 1] + 1\n        return max(min(left[i], right[i]) for i in range(n) if not seats[i])",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each seat know the distance to the nearest person on the left and on the right, take the smaller, then the best seat.",
   "frames": [],
   "alt": true
  }
 ]
};
