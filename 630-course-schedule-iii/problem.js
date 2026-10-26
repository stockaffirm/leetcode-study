window.PROBLEM = {
 "id": "630",
 "title": "Course Schedule III",
 "level": "Hard",
 "topic": "Heap",
 "question": "courses[i] = [duration, lastDay]: a course takes duration days in a row and must finish by lastDay. Courses are taken one at a time starting on day 1. Return the maximum number of courses you can take. Example: [[100,200],[200,1300],[1000,1250],[2000,3200]] → 3.",
 "why": "Courses [100,200],[200,1300],[1000,1250],[2000,3200] → take the first three, the 2000-day course cannot fit → 3.",
 "idea": "Process courses by deadline. Add each course to the schedule (and a max-heap of durations). If the total time now passes this deadline, drop the longest course taken so far — that frees the most time while losing just one course.",
 "input": "courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]",
 "output": "3",
 "notes": [],
 "best": "Process courses by deadline. Add each course to the schedule (and a max-heap of durations). If the total time now passes this deadline, drop the longest course taken so far — that frees the most time while losing just one course.",
 "variants": [
  {
   "name": "By deadline, drop the longest course when late",
   "code": "class Solution:\n    def scheduleCourse(self, courses):\n        total = 0\n        heap = []\n        for dur, last in sorted(courses, key=lambda c: c[1]):\n            heappush(heap, -dur)\n            total += dur\n            if total > last:\n                total += heappop(heap)\n        return len(heap)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Process courses by deadline. Add each course to the schedule (and a max-heap of durations). If the total time now passes this deadline, drop the longest course taken so far — that frees the most time while losing just one course.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP on the number of courses taken",
   "tag": "Alternative",
   "code": "class Solution:\n    def scheduleCourse(self, courses):\n        n = len(courses)\n        f = [0] + [float('inf')] * n\n        for dur, last in sorted(courses, key=lambda c: c[1]):\n            for j in range(n, 0, -1):\n                if f[j - 1] + dur <= last:\n                    f[j] = min(f[j], f[j - 1] + dur)\n        return max(j for j in range(n + 1) if f[j] < float('inf'))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Process courses by deadline; f[j] is the least time needed to take j courses; extend f[j−1] by this course if it still ends by its deadline.",
   "frames": [],
   "alt": true
  }
 ]
};
