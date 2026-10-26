window.PROBLEM = {
 "id": "1229",
 "title": "Meeting Scheduler",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "Two people list their free time slots. Find the earliest time slot of the given duration that fits both.",
 "idea": "Sort both lists. For the current pair of slots the common part is [max(starts), min(ends)]; if it is long enough, answer. Otherwise advance the slot that ends first.",
 "input": "slots1 [[10,50],[60,120],[140,210]], slots2 [[0,15],[60,70]], duration 8",
 "output": "[60,68]",
 "notes": [],
 "best": "Sort both lists. For the current pair of slots the common part is [max(starts), min(ends)]; if it is long enough, answer. Otherwise advance the slot that ends first.",
 "variants": [
  {
   "name": "Two pointers over sorted slots",
   "code": "class Solution:\n    def minAvailableDuration(self, slots1, slots2, duration):\n        s1, s2 = sorted(slots1), sorted(slots2)\n        i = j = 0\n        while i < len(s1) and j < len(s2):\n            lo = max(s1[i][0], s2[j][0])\n            hi = min(s1[i][1], s2[j][1])\n            if hi - lo >= duration: return [lo, lo + duration]\n            if s1[i][1] < s2[j][1]: i += 1\n            else: j += 1\n        return []",
   "time": "O(n log n + m log m)",
   "space": "O(1)",
   "explain": "Sort both lists. For the current pair of slots the common part is [max(starts), min(ends)]; if it is long enough, answer. Otherwise advance the slot that ends first.",
   "frames": []
  }
 ]
};
