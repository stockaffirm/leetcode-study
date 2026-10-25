window.PROBLEM = {
 "id": "2039",
 "title": "The Time When the Network Becomes Idle",
 "level": "Medium",
 "topic": "Graph",
 "question": "A network has n servers (0 is the master) connected by two-way wires. Every other server sends a message to the master at second 0 and waits for the reply; the message takes 1 second per wire in each direction. If no reply has arrived after patience[i] seconds the server sends the message again, and repeats this every patience[i] seconds until the reply arrives. Return the earliest second at which no message is still travelling (the network is idle). Example: edges [[0,1],[1,2]], patience [0,2,1] → 8.",
 "why": "Servers send a message to the master server (0) and wait for the reply, resending every `patience` seconds if no reply has come. When does the network finally go quiet?",
 "idea": "BFS gives each server's distance d to the master; the round trip is 2d. A server resends at multiples of patience while < 2d, so its last message is sent at ((2d − 1) // patience) · patience and the reply arrives 2d later. The network is idle one second after the latest reply.",
 "input": "edges [[0,1],[1,2]], patience [0,2,1]",
 "output": "8",
 "notes": [],
 "best": "BFS gives each server's distance d to the master; the round trip is 2d. A server resends at multiples of patience while < 2d, so its last message is sent at ((2d − 1) // patience) · patience and the reply arrives 2d later. The network is idle one second after the latest reply.",
 "variants": [
  {
   "name": "BFS distances + resend arithmetic",
   "code": "class Solution:\n    def networkBecomesIdle(self, edges, patience):\n        n = len(patience)\n        g = defaultdict(list)\n        for u, v in edges:\n            g[u].append(v)\n            g[v].append(u)\n        dist = [-1] * n\n        dist[0] = 0\n        q = deque([0])\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                if dist[v] < 0:\n                    dist[v] = dist[u] + 1\n                    q.append(v)\n        last = 0\n        for i in range(1, n):\n            rt = 2 * dist[i]\n            last = max(last, rt + (rt - 1) // patience[i] * patience[i] + 1)\n        return last",
   "time": "O(n + E)",
   "space": "O(n)",
   "explain": "BFS gives each server's distance d to the master; the round trip is 2d. A server resends at multiples of patience while < 2d, so its last message is sent at ((2d − 1) // patience) · patience and the reply arrives 2d later. The network is idle one second after the latest reply.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate the resend times",
   "tag": "Alternative",
   "code": "class Solution:\n    def networkBecomesIdle(self, edges, patience):\n        n = len(patience)\n        g = defaultdict(list)\n        for u, v in edges:\n            g[u].append(v)\n            g[v].append(u)\n        dist = [-1] * n\n        dist[0] = 0\n        q = deque([0])\n        while q:\n            u = q.popleft()\n            for v in g[u]:\n                if dist[v] < 0:\n                    dist[v] = dist[u] + 1\n                    q.append(v)\n        last = 0\n        for i in range(1, n):\n            rt = 2 * dist[i]\n            t, finish = 0, rt\n            while t + patience[i] < rt:\n                t += patience[i]\n                finish = t + rt\n            last = max(last, finish + 1)\n        return last",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Step through each server's resend times until the first reply is back, then take the last message's reply time.",
   "frames": [],
   "alt": true
  }
 ]
};
