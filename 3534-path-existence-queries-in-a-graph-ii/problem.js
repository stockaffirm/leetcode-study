window.PROBLEM = {
 "id": "3534",
 "title": "Path Existence Queries in a Graph II",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "nums [1,8,3,4,2], maxDiff 3: nodes 0 and 3 are directly linked → distance 1.",
 "idea": "Nodes i and j are linked if their values differ by at most maxDiff. Sort the nodes by value: from sorted position p you can reach every position up to reach[p]. The shortest path between two positions is a sequence of greedy jumps to the farthest reachable position. Precompute reach, then build binary-lifting tables (jump 2^k greedy steps) and answer each query by taking the largest jumps that stay short of the target.",
 "input": "n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]",
 "output": "[1, 1]",
 "notes": [],
 "best": "Nodes i and j are linked if their values differ by at most maxDiff. Sort the nodes by value: from sorted position p you can reach every position up to reach[p]. The shortest path between two positions is a sequence of greedy jumps to the farthest reachable position. Precompute reach, then build binary-lifting tables (jump 2^k greedy steps) and answer each query by taking the largest jumps that stay short of the target.",
 "variants": [
  {
   "name": "Sort by value, binary lifting over farthest reach",
   "code": "class Solution:\n    def pathExistenceQueries(self, n, nums, maxDiff, queries):\n        order = sorted(range(n), key=lambda i: nums[i])\n        pos = [0] * n\n        for p, i in enumerate(order):\n            pos[i] = p\n        vals = [nums[i] for i in order]\n        LOG = max(1, n.bit_length())\n        reach = [0] * n\n        j = 0\n        for i in range(n):\n            while j + 1 < n and vals[j + 1] - vals[i] <= maxDiff:\n                j += 1\n            reach[i] = max(j, i)\n        up = [reach]\n        for _ in range(LOG):\n            prev = up[-1]\n            up.append([prev[prev[i]] for i in range(n)])\n        res = []\n        for u, v in queries:\n            a, b = sorted((pos[u], pos[v]))\n            if a == b:\n                res.append(0)\n                continue\n            if up[-1][a] < b:\n                res.append(-1)\n                continue\n            steps = 0\n            cur = a\n            for k in range(LOG, -1, -1):\n                if up[k][cur] < b:\n                    cur = up[k][cur]\n                    steps += 1 << k\n            res.append(steps + 1)\n        return res",
   "time": "O((n + q) log n)",
   "space": "O(n log n)",
   "explain": "Nodes i and j are linked if their values differ by at most maxDiff. Sort the nodes by value: from sorted position p you can reach every position up to reach[p]. The shortest path between two positions is a sequence of greedy jumps to the farthest reachable position. Precompute reach, then build binary-lifting tables (jump 2^k greedy steps) and answer each query by taking the largest jumps that stay short of the target.",
   "frames": []
  }
 ]
};
