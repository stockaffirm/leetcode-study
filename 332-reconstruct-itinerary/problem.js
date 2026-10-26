window.PROBLEM = {
 "id": "332",
 "title": "Reconstruct Itinerary",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "Use every flight ticket exactly once, starting from JFK, to build one trip; if several trips work, choose the alphabetically smallest.",
 "idea": "This is an Eulerian path. DFS from JFK always taking the smallest unused destination; when a city has no more flights, add it to the route. The route built this way, reversed, is the answer.",
 "input": "[[MUC,LHR],[JFK,MUC],[SFO,SJC],[LHR,SFO]]",
 "output": "[JFK, MUC, LHR, SFO, SJC]",
 "notes": [],
 "best": "This is an Eulerian path. DFS from JFK always taking the smallest unused destination; when a city has no more flights, add it to the route. The route built this way, reversed, is the answer.",
 "variants": [
  {
   "name": "Hierholzer's algorithm (smallest first)",
   "code": "class Solution:\n    def findItinerary(self, tickets):\n        g = defaultdict(list)\n        for a, b in sorted(tickets, reverse=True): g[a].append(b)\n        route = []\n        def visit(u):\n            while g[u]: visit(g[u].pop())\n            route.append(u)\n        visit('JFK')\n        return route[::-1]",
   "time": "O(E log E)",
   "space": "O(E)",
   "explain": "This is an Eulerian path. DFS from JFK always taking the smallest unused destination; when a city has no more flights, add it to the route. The route built this way, reversed, is the answer.",
   "frames": []
  }
 ]
};
