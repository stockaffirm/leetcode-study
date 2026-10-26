window.PROBLEM = {
 "id": "2477",
 "title": "Minimum Fuel Cost to Report to the Capital",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
