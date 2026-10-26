window.PROBLEM = {
 "id": "630",
 "title": "Course Schedule III",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
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
   "frames": []
  }
 ]
};
