window.PROBLEM = {
 "id": "2187",
 "title": "Minimum Time to Complete Trips",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "time[i] is how long bus i takes for one trip; buses run independently and start new trips right after finishing one. Return the minimum time by which all buses together have completed at least totalTrips trips. Example: time [1,2,3], totalTrips 5 → 3.",
 "why": "Bus i needs time[i] per trip; buses run independently. Find the smallest time by which the buses have made at least totalTrips trips together.",
 "idea": "In time t bus i completes t // time[i] trips. That total grows with t, so binary search the smallest t reaching totalTrips.",
 "input": "time [1,2,3], totalTrips = 5",
 "output": "3",
 "notes": [],
 "best": "In time t bus i completes t // time[i] trips. That total grows with t, so binary search the smallest t reaching totalTrips.",
 "variants": [
  {
   "name": "Binary search on the time",
   "code": "class Solution:\n    def minimumTime(self, time, totalTrips):\n        lo, hi = 1, min(time) * totalTrips\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if sum(mid // t for t in time) >= totalTrips: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log T)",
   "space": "O(1)",
   "explain": "In time t bus i completes t // time[i] trips. That total grows with t, so binary search the smallest t reaching totalTrips.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every time",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumTime(self, time, totalTrips):\n        t = 1\n        while sum(t // x for x in time) < totalTrips: t += 1\n        return t",
   "time": "O(n·T)",
   "space": "O(1)",
   "explain": "Increase the time by one until enough trips fit.",
   "frames": [],
   "alt": true
  }
 ]
};
