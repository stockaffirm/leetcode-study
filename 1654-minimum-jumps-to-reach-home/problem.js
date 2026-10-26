window.PROBLEM = {
 "id": "1654",
 "title": "Minimum Jumps to Reach Home",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "a=3, b=15, x=9: three jumps forward (3, 6, 9) reach home → 3.",
 "idea": "From position p you jump forward a, or backward b (never two backward jumps in a row, never to a forbidden spot, never below 0). Search states (position, last move was backward). Bound the positions by max(x, forbidden) + a + b.",
 "input": "forbidden = [14,4,18,1,15], a = 3, b = 15, x = 9",
 "output": "3",
 "notes": [],
 "best": "From position p you jump forward a, or backward b (never two backward jumps in a row, never to a forbidden spot, never below 0). Search states (position, last move was backward). Bound the positions by max(x, forbidden) + a + b.",
 "variants": [
  {
   "name": "BFS (Breadth-First Search) on (position, came-from-a-back-jump)",
   "code": "class Solution:\n    def minimumJumps(self, forbidden, a, b, x):\n        bad = set(forbidden)\n        limit = max(max(forbidden, default=0), x) + a + b\n        q = deque([(0, False, 0)])\n        seen = {(0, False)}\n        while q:\n            pos, back, d = q.popleft()\n            if pos == x:\n                return d\n            nxt = [(pos + a, False)]\n            if not back:\n                nxt.append((pos - b, True))\n            for p, bk in nxt:\n                if 0 <= p <= limit and p not in bad and (p, bk) not in seen:\n                    seen.add((p, bk))\n                    q.append((p, bk, d + 1))\n        return -1",
   "time": "O(limit)",
   "space": "O(limit)",
   "explain": "From position p you jump forward a, or backward b (never two backward jumps in a row, never to a forbidden spot, never below 0). Search states (position, last move was backward). Bound the positions by max(x, forbidden) + a + b.",
   "frames": []
  }
 ]
};
