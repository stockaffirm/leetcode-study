window.PROBLEM = {
 "id": "2071",
 "title": "Maximum Number of Tasks You Can Assign",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "tasks [3,2,1], workers [0,3,3], pills 1, strength 1 → 3.",
 "idea": "If k tasks can be done, so can fewer: binary search k. To check k, take the k easiest tasks and k strongest workers. Go through the workers from weakest to strongest keeping a deque of tasks they could do with a pill: if the easiest task fits without a pill take it, otherwise spend a pill on the hardest task the worker can reach.",
 "input": "tasks = [3,2,1], workers = [0,3,3], pills = 1, strength = 1",
 "output": "3",
 "notes": [],
 "best": "If k tasks can be done, so can fewer: binary search k. To check k, take the k easiest tasks and k strongest workers. Go through the workers from weakest to strongest keeping a deque of tasks they could do with a pill: if the easiest task fits without a pill take it, otherwise spend a pill on the hardest task the worker can reach.",
 "variants": [
  {
   "name": "Binary search the answer + deque greedy check",
   "code": "class Solution:\n    def maxTaskAssign(self, tasks, workers, pills, strength):\n        tasks.sort()\n        workers.sort()\n        def can(k):\n            ts = tasks[:k]\n            dq = deque()\n            p = pills\n            ptr = 0\n            for w in workers[len(workers) - k:]:\n                while ptr < k and ts[ptr] <= w + strength:\n                    dq.append(ts[ptr])\n                    ptr += 1\n                if not dq:\n                    return False\n                if dq[0] <= w:\n                    dq.popleft()\n                else:\n                    if p == 0:\n                        return False\n                    p -= 1\n                    dq.pop()\n            return True\n        lo, hi = 0, min(len(tasks), len(workers))\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if can(mid):\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "If k tasks can be done, so can fewer: binary search k. To check k, take the k easiest tasks and k strongest workers. Go through the workers from weakest to strongest keeping a deque of tasks they could do with a pill: if the easiest task fits without a pill take it, otherwise spend a pill on the hardest task the worker can reach.",
   "frames": []
  }
 ]
};
