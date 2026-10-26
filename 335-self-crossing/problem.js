window.PROBLEM = {
 "id": "335",
 "title": "Self Crossing",
 "level": "Hard",
 "topic": "Array / String",
 "question": "",
 "why": "[2,1,1,2] → the path crosses itself → true.",
 "idea": "You move north, west, south, east, … by distance[i]. A crossing can only involve the previous 3, 4 or 5 segments: segment i crosses the one 3 back (i−3) when it is long enough and the previous one short; it touches segment i−4 when the two parallel segments overlap exactly; or it crosses segment i−5 after a spiral turn. Check these three patterns for every i.",
 "input": "distance = [2,1,1,2]",
 "output": "true",
 "notes": [],
 "best": "You move north, west, south, east, … by distance[i]. A crossing can only involve the previous 3, 4 or 5 segments: segment i crosses the one 3 back (i−3) when it is long enough and the previous one short; it touches segment i−4 when the two parallel segments overlap exactly; or it crosses segment i−5 after a spiral turn. Check these three patterns for every i.",
 "variants": [
  {
   "name": "Check the three crossing patterns",
   "code": "class Solution:\n    def isSelfCrossing(self, distance):\n        d = distance\n        for i in range(3, len(d)):\n            if d[i] >= d[i - 2] and d[i - 1] <= d[i - 3]:\n                return True\n            if i >= 4 and d[i - 1] == d[i - 3] and d[i] + d[i - 4] >= d[i - 2]:\n                return True\n            if (i >= 5 and d[i - 2] >= d[i - 4] and d[i - 1] <= d[i - 3]\n                    and d[i] >= d[i - 2] - d[i - 4] and d[i - 1] + d[i - 5] >= d[i - 3]):\n                return True\n        return False",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "You move north, west, south, east, … by distance[i]. A crossing can only involve the previous 3, 4 or 5 segments: segment i crosses the one 3 back (i−3) when it is long enough and the previous one short; it touches segment i−4 when the two parallel segments overlap exactly; or it crosses segment i−5 after a spiral turn. Check these three patterns for every i.",
   "frames": []
  }
 ]
};
