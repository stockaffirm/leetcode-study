window.PROBLEM = {
 "id": "2848",
 "title": "Points That Intersect With Cars",
 "level": "Easy",
 "topic": "Intervals",
 "question": "",
 "why": "Cars park on a number line occupying [start, end]. How many integer points are covered by at least one car?",
 "idea": "Add +1 at each start and −1 after each end; the running sum is the number of cars on each point.",
 "input": "[[3,6],[1,5],[4,7]]",
 "output": "7",
 "notes": [],
 "best": "Add +1 at each start and −1 after each end; the running sum is the number of cars on each point.",
 "variants": [
  {
   "name": "Difference array",
   "code": "class Solution:\n    def numberOfPoints(self, nums):\n        diff = [0] * 102\n        for s, e in nums:\n            diff[s] += 1\n            diff[e + 1] -= 1\n        cur = count = 0\n        for d in diff:\n            cur += d\n            if cur > 0: count += 1\n        return count",
   "time": "O(n + range)",
   "space": "O(range)",
   "explain": "Add +1 at each start and −1 after each end; the running sum is the number of cars on each point.",
   "frames": []
  }
 ]
};
