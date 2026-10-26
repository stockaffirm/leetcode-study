window.PROBLEM = {
 "id": "2409",
 "title": "Count Days Spent Together",
 "level": "Easy",
 "topic": "Intervals",
 "question": "",
 "why": "Alice 08-15…08-18, Bob 08-16…08-19: they overlap on 16, 17, 18 → 3.",
 "idea": "Convert each 'MM-DD' to a day number in the year (non-leap). The shared days are between max of the arrivals and min of the departures; if that interval is empty the answer is 0.",
 "input": "arriveAlice = \"08-15\", leaveAlice = \"08-18\", arriveBob = \"08-16\", leaveBob = \"08-19\"",
 "output": "3",
 "notes": [],
 "best": "Convert each 'MM-DD' to a day number in the year (non-leap). The shared days are between max of the arrivals and min of the departures; if that interval is empty the answer is 0.",
 "variants": [
  {
   "name": "Intersect the two date ranges as day-of-year numbers",
   "code": "class Solution:\n    def countDaysTogether(self, arriveAlice, leaveAlice, arriveBob, leaveBob):\n        months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]\n        def day(s):\n            m, d = int(s[:2]), int(s[3:])\n            return sum(months[:m - 1]) + d\n        lo = max(day(arriveAlice), day(arriveBob))\n        hi = min(day(leaveAlice), day(leaveBob))\n        return max(0, hi - lo + 1)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Convert each 'MM-DD' to a day number in the year (non-leap). The shared days are between max of the arrivals and min of the departures; if that interval is empty the answer is 0.",
   "frames": []
  }
 ]
};
