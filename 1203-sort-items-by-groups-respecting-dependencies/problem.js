window.PROBLEM = {
 "id": "1203",
 "title": "Sort Items by Groups Respecting Dependencies",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "8 items, 2 groups: items of one group stay together and obey beforeItems.",
 "idea": "Give every item without a group its own new group. Build two dependency graphs: between groups (item a before b in different groups gives group[a] → group[b]) and between items of the same group. Topologically sort the groups (smallest id first), then each group's items (smallest first) and concatenate. If either graph has a cycle return [].",
 "input": "n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]",
 "output": "[6, 3, 4, 5, 2, 0, 1, 7]",
 "notes": [],
 "best": "Give every item without a group its own new group. Build two dependency graphs: between groups (item a before b in different groups gives group[a] → group[b]) and between items of the same group. Topologically sort the groups (smallest id first), then each group's items (smallest first) and concatenate. If either graph has a cycle return [].",
 "variants": [
  {
   "name": "Topological sort of groups, then of items inside each group",
   "code": "class Solution:\n    def sortItems(self, n, m, group, beforeItems):\n        group = group[:]\n        for i in range(n):\n            if group[i] == -1:\n                group[i] = m\n                m += 1\n        def topo(nodes, edges):\n            indeg = {v: 0 for v in nodes}\n            for u in nodes:\n                for v in edges.get(u, ()):\n                    indeg[v] += 1\n            ready = [v for v in nodes if indeg[v] == 0]\n            heapify(ready)\n            order = []\n            while ready:\n                u = heappop(ready)\n                order.append(u)\n                for v in edges.get(u, ()):\n                    indeg[v] -= 1\n                    if indeg[v] == 0:\n                        heappush(ready, v)\n            return order if len(order) == len(nodes) else None\n        g_edges = defaultdict(set)\n        i_edges = defaultdict(set)\n        for v in range(n):\n            for u in beforeItems[v]:\n                if group[u] == group[v]:\n                    i_edges[u].add(v)\n                else:\n                    g_edges[group[u]].add(group[v])\n        g_order = topo(list(range(m)), g_edges)\n        if g_order is None:\n            return []\n        members = defaultdict(list)\n        for v in range(n):\n            members[group[v]].append(v)\n        res = []\n        for g in g_order:\n            order = topo(members[g], i_edges)\n            if order is None:\n                return []\n            res += order\n        return res",
   "time": "O(n + E)",
   "space": "O(n + E)",
   "explain": "Give every item without a group its own new group. Build two dependency graphs: between groups (item a before b in different groups gives group[a] → group[b]) and between items of the same group. Topologically sort the groups (smallest id first), then each group's items (smallest first) and concatenate. If either graph has a cycle return [].",
   "frames": []
  }
 ]
};
