window.PROBLEM = {
 "id": "815",
 "title": "Bus Routes",
 "level": "Hard",
 "topic": "Graph",
 "question": "routes[i] lists the stops of bus i; the bus travels around its stops forever. You start at stop 'source' (not on a bus) and want to reach stop 'target', changing buses at shared stops. Return the minimum number of buses you must take, or −1 if impossible (0 if source = target). Example: routes [[1,2,7],[3,6,7]], source 1, target 6 → 2.",
 "why": "Each bus loops forever along its list of stops. Starting at a stop, find the fewest buses to take to reach the target stop (you may change buses at shared stops).",
 "idea": "Think of buses as graph nodes: from a route you can board any route that shares a stop. Map each stop to the routes serving it and run a BFS over routes, counting buses.",
 "input": "routes [[1,2,7],[3,6,7]], 1 → 6",
 "output": "2",
 "notes": [],
 "best": "Think of buses as graph nodes: from a route you can board any route that shares a stop. Map each stop to the routes serving it and run a BFS over routes, counting buses.",
 "variants": [
  {
   "name": "BFS over bus routes",
   "code": "class Solution:\n    def numBusesToDestination(self, routes, source, target):\n        if source == target: return 0\n        stop_routes = defaultdict(list)\n        for i, r in enumerate(routes):\n            for s in r: stop_routes[s].append(i)\n        q = deque((r, 1) for r in stop_routes[source])\n        seen = {r for r, _ in q}\n        while q:\n            r, d = q.popleft()\n            if target in routes[r]: return d\n            for s in routes[r]:\n                for nr in stop_routes[s]:\n                    if nr not in seen:\n                        seen.add(nr)\n                        q.append((nr, d + 1))\n        return -1",
   "time": "O(total stops)",
   "space": "O(total stops)",
   "explain": "Think of buses as graph nodes: from a route you can board any route that shares a stop. Map each stop to the routes serving it and run a BFS over routes, counting buses.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over stops",
   "tag": "Alternative",
   "code": "class Solution:\n    def numBusesToDestination(self, routes, source, target):\n        if source == target: return 0\n        stop_routes = defaultdict(list)\n        for i, r in enumerate(routes):\n            for s in r: stop_routes[s].append(i)\n        dist, used = {source: 0}, set()\n        q = deque([source])\n        while q:\n            s = q.popleft()\n            for r in stop_routes[s]:\n                if r in used: continue\n                used.add(r)\n                for t in routes[r]:\n                    if t not in dist:\n                        dist[t] = dist[s] + 1\n                        q.append(t)\n        return dist.get(target, -1)",
   "time": "O(total stops)",
   "space": "O(total stops)",
   "explain": "Each bus is used once: boarding a bus reaches all of its stops at distance + 1.",
   "frames": [],
   "alt": true
  }
 ]
};
