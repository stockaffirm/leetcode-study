window.PROBLEM = {
 "id": "1101",
 "title": "The Earliest Moment When Everyone Become Friends",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Logs say that at a time two people became friends (friendship is transitive). Find the earliest time at which everybody is connected, or −1.",
 "idea": "Sort the logs by time and union the pairs; the moment the number of groups drops to 1 is the answer.",
 "input": "6 people, logs of friendships",
 "output": "20190301",
 "notes": [],
 "best": "Sort the logs by time and union the pairs; the moment the number of groups drops to 1 is the answer.",
 "variants": [
  {
   "name": "Union-Find over sorted logs",
   "code": "class Solution:\n    def earliestAcq(self, logs, n):\n        parent = list(range(n))\n        def find(x):\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        groups = n\n        for t, a, b in sorted(logs):\n            ra, rb = find(a), find(b)\n            if ra != rb:\n                parent[ra] = rb\n                groups -= 1\n                if groups == 1: return t\n        return -1",
   "time": "O(m log m)",
   "space": "O(n)",
   "explain": "Sort the logs by time and union the pairs; the moment the number of groups drops to 1 is the answer.",
   "frames": []
  }
 ]
};
