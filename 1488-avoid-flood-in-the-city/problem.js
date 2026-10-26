window.PROBLEM = {
 "id": "1488",
 "title": "Avoid Flood in The City",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
