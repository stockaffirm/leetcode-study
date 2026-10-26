window.PROBLEM = {
 "id": "752",
 "title": "Open the Lock",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "A 4-wheel lock starts at 0000; one move turns one wheel by one digit (9↔0 wraps). Some states are dead ends. Find the fewest moves to reach the target, or −1.",
 "idea": "Every state has 8 neighbours. Breadth-first search from '0000', skipping dead ends and visited states, finds the shortest path.",
 "input": "deadends ['0201','0101','0102','1212','2002'], target '0202'",
 "output": "6",
 "notes": [],
 "best": "Every state has 8 neighbours. Breadth-first search from '0000', skipping dead ends and visited states, finds the shortest path.",
 "variants": [
  {
   "name": "BFS over the 10 000 lock states",
   "code": "class Solution:\n    def openLock(self, deadends, target):\n        dead = set(deadends)\n        if '0000' in dead: return -1\n        q, seen, steps = deque(['0000']), {'0000'}, 0\n        while q:\n            for _ in range(len(q)):\n                cur = q.popleft()\n                if cur == target: return steps\n                for i in range(4):\n                    d = int(cur[i])\n                    for nd in ((d + 1) % 10, (d - 1) % 10):\n                        nxt = cur[:i] + str(nd) + cur[i + 1:]\n                        if nxt not in seen and nxt not in dead:\n                            seen.add(nxt)\n                            q.append(nxt)\n            steps += 1\n        return -1",
   "time": "O(10⁴·8)",
   "space": "O(10⁴)",
   "explain": "Every state has 8 neighbours. Breadth-first search from '0000', skipping dead ends and visited states, finds the shortest path.",
   "frames": []
  }
 ]
};
