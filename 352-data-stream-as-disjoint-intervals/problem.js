window.PROBLEM = {
 "id": "352",
 "title": "Data Stream as Disjoint Intervals",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "add 1, 3, 7, 2, 6 → intervals [1,3], [6,7].",
 "idea": "Keep the disjoint intervals sorted by start. Adding a value: binary search its position, and either it is already inside an interval, extends a neighbour by one, joins two neighbours, or becomes a new single-value interval.",
 "input": "SummaryRanges(); addNum(1); getIntervals(); addNum(3); getIntervals(); addNum(7); getIntervals(); addNum(2); getIntervals(); addNum(6); getIntervals()",
 "output": "[None, [[1, 1]], None, [[1, 1], [3, 3]], None, [[1, 1], [3, 3], [7, 7]], None, [[1, 3], [7, 7]], None, [[1, 3], [6, 7]]]",
 "notes": [],
 "best": "Keep the disjoint intervals sorted by start. Adding a value: binary search its position, and either it is already inside an interval, extends a neighbour by one, joins two neighbours, or becomes a new single-value interval.",
 "variants": [
  {
   "name": "Sorted list of intervals with merging on insert",
   "code": "class SummaryRanges:\n    def __init__(self):\n        self.iv = []\n\n    def addNum(self, value):\n        starts = [s for s, _ in self.iv]\n        i = bisect_right(starts, value)\n        left = self.iv[i - 1] if i > 0 else None\n        right = self.iv[i] if i < len(self.iv) else None\n        if left and left[1] >= value:\n            return\n        join_left = left and left[1] + 1 == value\n        join_right = right and right[0] - 1 == value\n        if join_left and join_right:\n            self.iv[i - 1] = [left[0], right[1]]\n            self.iv.pop(i)\n        elif join_left:\n            left[1] = value\n        elif join_right:\n            right[0] = value\n        else:\n            self.iv.insert(i, [value, value])\n\n    def getIntervals(self):\n        return [list(x) for x in self.iv]",
   "time": "O(n) per add",
   "space": "O(n)",
   "explain": "Keep the disjoint intervals sorted by start. Adding a value: binary search its position, and either it is already inside an interval, extends a neighbour by one, joins two neighbours, or becomes a new single-value interval.",
   "frames": []
  }
 ]
};
