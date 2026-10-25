window.PROBLEM = {
 "id": "2534",
 "title": "Time Taken to Cross the Door",
 "level": "Hard",
 "topic": "Array / String",
 "question": "Persons arrive at a door at times arrival[i] and want to enter (state 0) or exit (state 1); the door serves one person per second. If several want the door at the same time: if the door was used the previous second, the same direction as then goes first; if it was idle, exiting goes first. Within a direction the earlier arrival (smaller index) goes first. Return the second each person passes. Example: arrival [0,1,1,2,4], state [0,1,0,0,1] → [0,3,1,2,4].",
 "why": "arrival [0,1,1,2,4], state [0,1,0,0,1]: crossing times come out as [0,3,1,2,4].",
 "idea": "Simulate second by second with one queue for people who want to enter and one to exit (first come, first served). If both queues are non-empty, the door's previous use decides: same direction as last second wins, and if the door was idle exit goes first. Remember the last direction (or idle) and the current time.",
 "input": "arrival = [0,1,1,2,4], state = [0,1,0,0,1]",
 "output": "[0, 3, 1, 2, 4]",
 "notes": [],
 "best": "Simulate second by second with one queue for people who want to enter and one to exit (first come, first served). If both queues are non-empty, the door's previous use decides: same direction as last second wins, and if the door was idle exit goes first. Remember the last direction (or idle) and the current time.",
 "variants": [
  {
   "name": "Two queues and the door's last use",
   "code": "class Solution:\n    def timeTaken(self, arrival, state):\n        n = len(arrival)\n        q = [deque(), deque()]\n        ans = [0] * n\n        t = i = done = 0\n        prev = 1\n        while done < n:\n            while i < n and arrival[i] <= t:\n                q[state[i]].append(i)\n                i += 1\n            if q[0] and q[1]:\n                d = prev\n            elif q[0]:\n                d = 0\n            elif q[1]:\n                d = 1\n            else:\n                prev = 1\n                t += 1\n                continue\n            ans[q[d].popleft()] = t\n            prev = d\n            done += 1\n            t += 1\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Simulate second by second with one queue for people who want to enter and one to exit (first come, first served). If both queues are non-empty, the door's previous use decides: same direction as last second wins, and if the door was idle exit goes first. Remember the last direction (or idle) and the current time.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two heaps of waiting people",
   "tag": "Alternative",
   "code": "class Solution:\n    def timeTaken(self, arrival, state):\n        n = len(arrival)\n        h = [[], []]\n        ans = [0] * n\n        t = i = done = 0\n        prev = 1\n        while done < n:\n            while i < n and arrival[i] <= t:\n                heappush(h[state[i]], i)\n                i += 1\n            if h[0] and h[1]:\n                d = prev\n            elif h[0]:\n                d = 0\n            elif h[1]:\n                d = 1\n            else:\n                prev = 1\n                t += 1\n                continue\n            ans[heappop(h[d])] = t\n            prev = d\n            done += 1\n            t += 1\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Same second-by-second simulation, but the waiting people of each direction sit in a min-heap of their index.",
   "frames": [],
   "alt": true
  }
 ]
};
