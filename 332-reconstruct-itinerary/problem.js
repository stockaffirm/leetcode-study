window.PROBLEM = {
 "id": "332",
 "title": "Reconstruct Itinerary",
 "level": "Hard",
 "topic": "Graph",
 "question": "You have a list of airline tickets, each [from, to]. Rebuild the trip of a person who starts at 'JFK': use EVERY ticket exactly once, in an order that is a valid trip. If more than one trip is possible, return the one that is alphabetically smallest when read as a list of airport names. A valid trip always exists. Example: [[MUC,LHR],[JFK,MUC],[SFO,SJC],[LHR,SFO]] → JFK → MUC → LHR → SFO → SJC.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Backtracking with sorted tickets",
   "tag": "Alternative",
   "code": "class Solution:\n    def findItinerary(self, tickets):\n        g = defaultdict(list)\n        for a, b in sorted(tickets): g[a].append(b)\n        n = len(tickets)\n        route = ['JFK']\n        def dfs(u):\n            if len(route) == n + 1: return True\n            for i in range(len(g[u])):\n                v = g[u].pop(i)\n                route.append(v)\n                if dfs(v): return True\n                route.pop()\n                g[u].insert(i, v)\n            return False\n        dfs('JFK')\n        return route",
   "time": "exponential worst case",
   "space": "O(E)",
   "explain": "Try the smallest destination first; undo and try the next if you get stuck before using every ticket.",
   "frames": [],
   "alt": true
  }
 ]
};
