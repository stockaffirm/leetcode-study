window.PROBLEM = {
 "id": "1893",
 "title": "Check if All the Integers in a Range Are Covered",
 "level": "Easy",
 "topic": "Intervals",
 "question": "ranges[i] = [start, end] covers the integers start…end. Return true if every integer from left to right is covered by at least one range. Example: [[1,2],[3,4],[5,6]], 2..5 → true.",
 "why": "ranges [[1,2],[3,4],[5,6]] cover 2..5 → true.",
 "idea": "Put every number covered by any range into a set (the limits are small) and test that every integer in [left, right] is in it.",
 "input": "ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5",
 "output": "true",
 "notes": [],
 "best": "Put every number covered by any range into a set (the limits are small) and test that every integer in [left, right] is in it.",
 "variants": [
  {
   "name": "Mark covered numbers",
   "code": "class Solution:\n    def isCovered(self, ranges, left, right):\n        covered = set()\n        for a, b in ranges:\n            covered.update(range(a, b + 1))\n        return all(x in covered for x in range(left, right + 1))",
   "time": "O(n·50)",
   "space": "O(50)",
   "explain": "Put every number covered by any range into a set (the limits are small) and test that every integer in [left, right] is in it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Difference array",
   "tag": "Alternative",
   "code": "class Solution:\n    def isCovered(self, ranges, left, right):\n        diff = [0] * 52\n        for a, b in ranges:\n            diff[a] += 1\n            diff[b + 1] -= 1\n        cov = list(accumulate(diff))\n        return all(cov[x] > 0 for x in range(left, right + 1))",
   "time": "O(n + 50)",
   "space": "O(50)",
   "explain": "Count coverage with a difference array.",
   "frames": [],
   "alt": true
  }
 ]
};
