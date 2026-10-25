window.PROBLEM = {
 "id": "1101",
 "title": "The Earliest Moment When Everyone Become Friends",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "There are n people. logs[i] = [time, x, y] means x and y became friends at that time (friendship is transitive: friends of friends are friends). Return the earliest time at which everyone is connected as friends, or −1 if that never happens. Example: the 6-person log in the example → 20190301.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Binary search on time + DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def earliestAcq(self, logs, n):\n        logs = sorted(logs)\n        def connected(k):\n            g = defaultdict(list)\n            for t, a, b in logs[:k]:\n                g[a].append(b)\n                g[b].append(a)\n            seen, st = {0}, [0]\n            while st:\n                u = st.pop()\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        st.append(v)\n            return len(seen) == n\n        if not connected(len(logs)): return -1\n        lo, hi = 1, len(logs)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if connected(mid): hi = mid\n            else: lo = mid + 1\n        return logs[lo - 1][0]",
   "time": "O(m log m)",
   "space": "O(n + m)",
   "explain": "For a time t, build the graph from logs up to t and test connectivity.",
   "frames": [],
   "alt": true
  }
 ]
};
