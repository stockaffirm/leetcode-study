window.PROBLEM = {
 "id": "2532",
 "title": "Time to Cross a Bridge",
 "level": "Hard",
 "topic": "Heap",
 "question": "k workers must carry n boxes from the right side to the left over a bridge that only one worker can cross at a time. Worker i needs time[i] = [leftToRight, pickOld, rightToLeft, putNew] minutes. Rules: when workers wait on both sides the right side goes first; among waiting workers the least efficient (larger leftToRight + rightToLeft, then larger index) goes first. Return the minute at which the last box reaches the left side. Example: n=1, three workers → 6.",
 "why": "k workers must move n boxes over a one-lane bridge, each with their own times (cross left→right, pick up a box, cross right→left, put it down). Rules: workers waiting on the right cross first; among waiting workers the LEAST efficient (bigger left+right time, then bigger index) goes first. Return when the last box arrives on the left.",
 "idea": "Simulate time. Keep heaps for waiting-left, waiting-right, busy-left and busy-right workers. At each step release the workers whose work has finished, let one cross by the rules, and if nobody can move, jump the clock to the next finishing time.",
 "input": "n=1, 3 workers",
 "output": "6",
 "notes": [],
 "best": "Simulate time. Keep heaps for waiting-left, waiting-right, busy-left and busy-right workers. At each step release the workers whose work has finished, let one cross by the rules, and if nobody can move, jump the clock to the next finishing time.",
 "variants": [
  {
   "name": "Event simulation with four heaps",
   "code": "class Solution:\n    def findCrossingTime(self, n, k, time):\n        cur = 0\n        wait_l = [(-(t[0] + t[2]), -i) for i, t in enumerate(time)]\n        heapify(wait_l)\n        wait_r, work_l, work_r = [], [], []\n        while n > 0 or wait_r or work_r:\n            while work_l and work_l[0][0] <= cur:\n                _, i = heappop(work_l)\n                heappush(wait_l, (-(time[i][0] + time[i][2]), -i))\n            while work_r and work_r[0][0] <= cur:\n                _, i = heappop(work_r)\n                heappush(wait_r, (-(time[i][0] + time[i][2]), -i))\n            if wait_r:\n                i = -heappop(wait_r)[1]\n                cur += time[i][2]\n                heappush(work_l, (cur + time[i][3], i))\n            elif n > 0 and wait_l:\n                i = -heappop(wait_l)[1]\n                cur += time[i][0]\n                heappush(work_r, (cur + time[i][1], i))\n                n -= 1\n            else:\n                nxt = float('inf')\n                if work_l and n > 0: nxt = min(nxt, work_l[0][0])\n                if work_r: nxt = min(nxt, work_r[0][0])\n                cur = max(cur, nxt)\n        return cur",
   "time": "O((n + k) log k)",
   "space": "O(k)",
   "explain": "Simulate time. Keep heaps for waiting-left, waiting-right, busy-left and busy-right workers. At each step release the workers whose work has finished, let one cross by the rules, and if nobody can move, jump the clock to the next finishing time.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulation with plain scans",
   "tag": "Brute force",
   "code": "class Solution:\n    def findCrossingTime(self, n, k, time):\n        left = [True] * k\n        ready = [0] * k\n        cur = crossed = brought = 0\n        while True:\n            right = [i for i in range(k) if not left[i] and ready[i] <= cur]\n            if right:\n                i = max(right, key=lambda i: (time[i][0] + time[i][2], i))\n                cur += time[i][2]\n                left[i] = True\n                ready[i] = cur + time[i][3]\n                crossed += 1\n                if crossed == n: return cur\n                continue\n            if brought < n:\n                avail = [i for i in range(k) if left[i] and ready[i] <= cur]\n                if avail:\n                    i = max(avail, key=lambda i: (time[i][0] + time[i][2], i))\n                    cur += time[i][0]\n                    left[i] = False\n                    ready[i] = cur + time[i][1]\n                    brought += 1\n                    continue\n            waits = [ready[i] for i in range(k) if not left[i] or brought < n]\n            cur = max(cur, min(waits))",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "Same rules, but pick workers by scanning all of them instead of keeping heaps.",
   "frames": [],
   "alt": true
  }
 ]
};
