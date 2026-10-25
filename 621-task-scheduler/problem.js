window.PROBLEM = {
 "id": "621",
 "title": "Task Scheduler",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You are given a list of tasks, each a capital letter (the same letter means the same kind of task). Each task takes one unit of time, and the CPU may also sit idle for a unit. Two tasks of the same kind must have at least n units between them. Return the minimum number of time units needed to finish all tasks. Example: ['A','A','A','B','B','B'] with n=2 → A B idle A B idle A B → 8.",
 "why": "Run tasks (A–Z), one per time unit; the same task needs n units of cool-down between runs. Fewest time units to finish (idle allowed)?",
 "idea": "The most frequent task decides the frame: (maxCount−1) blocks of length n+1, plus the last row of all tasks tied at maxCount. If tasks exceed that, no idle is needed: the answer is at least len(tasks).",
 "input": "A,A,A,B,B,B with n=2",
 "output": "8",
 "notes": [],
 "best": "The most frequent task decides the frame: (maxCount−1) blocks of length n+1, plus the last row of all tasks tied at maxCount. If tasks exceed that, no idle is needed: the answer is at least len(tasks).",
 "variants": [
  {
   "name": "Formula from the most frequent task",
   "code": "class Solution:\n    def leastInterval(self, tasks, n):\n        cnt = Counter(tasks)\n        mx = max(cnt.values())\n        n_max = sum(1 for c in cnt.values() if c == mx)\n        return max(len(tasks), (mx - 1) * (n + 1) + n_max)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "The most frequent task decides the frame: (maxCount−1) blocks of length n+1, plus the last row of all tasks tied at maxCount. If tasks exceed that, no idle is needed: the answer is at least len(tasks).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate with a max-heap",
   "tag": "Alternative",
   "code": "class Solution:\n    def leastInterval(self, tasks, n):\n        heap = [-c for c in Counter(tasks).values()]\n        heapify(heap)\n        time, cool = 0, deque()\n        while heap or cool:\n            time += 1\n            if heap:\n                c = heappop(heap) + 1\n                if c: cool.append((time + n, c))\n            if cool and cool[0][0] == time:\n                heappush(heap, cool.popleft()[1])\n        return time",
   "time": "O(T log 26)",
   "space": "O(26)",
   "explain": "Each tick run the most frequent available task; park it in a cool-down queue for n ticks.",
   "frames": [],
   "alt": true
  }
 ]
};
