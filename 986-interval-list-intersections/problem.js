window.PROBLEM = {
 "id": "986",
 "title": "Interval List Intersections",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "Two sorted lists of non-overlapping intervals. Return where they overlap.",
 "idea": "Compare the current interval of each list: the overlap (if any) is [max of starts, min of ends]. Then advance the list whose interval ends first.",
 "input": "[[0,2],[5,10],[13,23],[24,25]] and [[1,5],[8,12],[15,24],[25,26]]",
 "output": "[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]",
 "notes": [],
 "best": "Compare the current interval of each list: the overlap (if any) is [max of starts, min of ends]. Then advance the list whose interval ends first.",
 "variants": [
  {
   "name": "Two pointers over both lists",
   "code": "class Solution:\n    def intervalIntersection(self, firstList, secondList):\n        i = j = 0\n        res = []\n        while i < len(firstList) and j < len(secondList):\n            lo = max(firstList[i][0], secondList[j][0])\n            hi = min(firstList[i][1], secondList[j][1])\n            if lo <= hi: res.append([lo, hi])\n            if firstList[i][1] < secondList[j][1]: i += 1\n            else: j += 1\n        return res",
   "time": "O(m + n)",
   "space": "O(1)",
   "explain": "Compare the current interval of each list: the overlap (if any) is [max of starts, min of ends]. Then advance the list whose interval ends first.",
   "frames": []
  }
 ]
};
