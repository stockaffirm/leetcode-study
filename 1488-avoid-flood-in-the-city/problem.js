window.PROBLEM = {
 "id": "1488",
 "title": "Avoid Flood in The City",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Each day it either rains on one lake (rains[i] = the lake's number, the lake becomes FULL) or is dry (rains[i] = 0). If it rains on a lake that is already full, the city floods. On each dry day you may choose ONE lake and empty it. Return a list ans where ans[i] = −1 on a rainy day and, on a dry day, the lake you empty (any number is fine if no lake needs it), so that no flood ever happens; return an empty list if a flood cannot be avoided. Example: [1,2,0,0,2,1] → [-1,-1,2,1,-1,-1].",
 "why": "Rain falls on a lake (a number) or the day is dry (0). A lake that is full and rains again floods the city. On dry days you may dry ONE lake. Return a plan that avoids all floods.",
 "idea": "Remember dry days (sorted) and when each lake was last filled. When a full lake rains again, use the earliest dry day AFTER it was filled to dry exactly that lake; if no such day exists, the flood is unavoidable.",
 "input": "[1,2,0,0,2,1]",
 "output": "[-1,-1,2,1,-1,-1]",
 "notes": [],
 "best": "Remember dry days (sorted) and when each lake was last filled. When a full lake rains again, use the earliest dry day AFTER it was filled to dry exactly that lake; if no such day exists, the flood is unavoidable.",
 "variants": [
  {
   "name": "Sorted dry days, dry a full lake just before it rains",
   "code": "class Solution:\n    def avoidFlood(self, rains):\n        full, dry, ans = {}, [], [1] * len(rains)\n        for i, lake in enumerate(rains):\n            if lake == 0:\n                dry.append(i)\n            else:\n                ans[i] = -1\n                if lake in full:\n                    j = bisect_right(dry, full[lake])\n                    if j == len(dry): return []\n                    ans[dry.pop(j)] = lake\n                full[lake] = i\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Remember dry days (sorted) and when each lake was last filled. When a full lake rains again, use the earliest dry day AFTER it was filled to dry exactly that lake; if no such day exists, the flood is unavoidable.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Next-rain priority queue",
   "tag": "Alternative",
   "code": "class Solution:\n    def avoidFlood(self, rains):\n        n = len(rains)\n        nxt, last = [n] * n, {}\n        for i in range(n - 1, -1, -1):\n            if rains[i]:\n                nxt[i] = last.get(rains[i], n)\n                last[rains[i]] = i\n        ans, full, heap = [1] * n, set(), []\n        for i, lake in enumerate(rains):\n            if lake:\n                if lake in full: return []\n                full.add(lake)\n                ans[i] = -1\n                if nxt[i] < n: heappush(heap, (nxt[i], lake))\n            elif heap:\n                _, l = heappop(heap)\n                full.discard(l)\n                ans[i] = l\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "On a dry day dry the full lake that will rain again soonest.",
   "frames": [],
   "alt": true
  }
 ]
};
