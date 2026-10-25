window.PROBLEM = {
 "id": "2477",
 "title": "Minimum Fuel Cost to Report to the Capital",
 "level": "Medium",
 "topic": "Graph",
 "question": "A tree of n cities is connected by roads; city 0 is the capital and every other city has one representative who must travel to it. Each city has a car with the given number of seats, and travelling one road costs one litre. Representatives may share cars. Return the minimum litres of fuel. Example: roads [[0,1],[0,2],[0,3]], seats 5 → 3.",
 "why": "Three cities hang directly off the capital 0. Each needs its own car (5 seats is plenty), one litre per road → 3.",
 "idea": "Root the tree at the capital. Every edge from a city up to its parent carries all the people of that city's subtree, and each car holds `seats` people, so that edge costs ceil(people / seats). Add this for every non-capital node.",
 "input": "roads=[[0,1],[0,2],[0,3]], seats=5",
 "output": "3",
 "notes": [],
 "best": "Root the tree at the capital. Every edge from a city up to its parent carries all the people of that city's subtree, and each car holds `seats` people, so that edge costs ceil(people / seats). Add this for every non-capital node.",
 "variants": [
  {
   "name": "DFS counting people per subtree",
   "code": "class Solution:\n    def minimumFuelCost(self, roads, seats):\n        g = defaultdict(list)\n        for a, b in roads:\n            g[a].append(b)\n            g[b].append(a)\n        self.fuel = 0\n        def dfs(u, parent):\n            people = 1\n            for v in g[u]:\n                if v != parent:\n                    people += dfs(v, u)\n            if u != 0:\n                self.fuel += (people + seats - 1) // seats\n            return people\n        dfs(0, -1)\n        return self.fuel",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Root the tree at the capital. Every edge from a city up to its parent carries all the people of that city's subtree, and each car holds `seats` people, so that edge costs ceil(people / seats). Add this for every non-capital node.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Peel leaves from the outside in",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumFuelCost(self, roads, seats):\n        n = len(roads) + 1\n        g = defaultdict(list)\n        deg = [0] * n\n        for a, b in roads:\n            g[a].append(b)\n            g[b].append(a)\n            deg[a] += 1\n            deg[b] += 1\n        people = [1] * n\n        q = deque(i for i in range(1, n) if deg[i] == 1)\n        fuel = 0\n        while q:\n            u = q.popleft()\n            fuel += (people[u] + seats - 1) // seats\n            deg[u] = 0\n            for v in g[u]:\n                if deg[v]:\n                    people[v] += people[u]\n                    deg[v] -= 1\n                    if deg[v] == 1 and v != 0:\n                        q.append(v)\n        return fuel",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Process leaves first, pushing each city's people onto its only remaining neighbour.",
   "frames": [],
   "alt": true
  }
 ]
};
