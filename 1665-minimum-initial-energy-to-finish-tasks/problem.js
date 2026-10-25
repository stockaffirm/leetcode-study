window.PROBLEM = {
 "id": "1665",
 "title": "Minimum Initial Energy to Finish Tasks",
 "level": "Hard",
 "topic": "Greedy",
 "question": "tasks[i] = [actual, minimum]: to start a task you need at least `minimum` energy and it permanently uses `actual` energy. Tasks may be done in any order. Return the minimum starting energy to finish them all. Example: [[1,2],[2,4],[4,8]] → 8.",
 "why": "tasks [[1,2],[2,4],[4,8]] (actual, minimum): start with 8 energy.",
 "idea": "A task needs at least `minimum` energy to start and uses `actual`. Order tasks by (minimum − actual) descending — the ones that leave the most 'slack' unused go first. Simulate: whenever current energy is below a task's minimum, top it up and count what you added.",
 "input": "tasks = [[1,2],[2,4],[4,8]]",
 "output": "8",
 "notes": [],
 "best": "A task needs at least `minimum` energy to start and uses `actual`. Order tasks by (minimum − actual) descending — the ones that leave the most 'slack' unused go first. Simulate: whenever current energy is below a task's minimum, top it up and count what you added.",
 "variants": [
  {
   "name": "Do tasks with the biggest minimum − actual gap first",
   "code": "class Solution:\n    def minimumEffort(self, tasks):\n        need = cur = 0\n        for actual, minimum in sorted(tasks, key=lambda t: t[0] - t[1]):\n            if cur < minimum:\n                need += minimum - cur\n                cur = minimum\n            cur -= actual\n        return need",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "A task needs at least `minimum` energy to start and uses `actual`. Order tasks by (minimum − actual) descending — the ones that leave the most 'slack' unused go first. Simulate: whenever current energy is below a task's minimum, top it up and count what you added.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search the start energy",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumEffort(self, tasks):\n        order = sorted(tasks, key=lambda t: t[0] - t[1])\n        def ok(e):\n            for actual, minimum in order:\n                if e < minimum:\n                    return False\n                e -= actual\n            return True\n        lo, hi = 1, sum(m for _, m in tasks) + sum(a for a, _ in tasks)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log S)",
   "space": "O(1)",
   "explain": "Sort tasks by slack and binary search the smallest start energy for which the whole sequence can be run.",
   "frames": [],
   "alt": true
  }
 ]
};
