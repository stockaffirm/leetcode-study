window.PROBLEM = {
 "id": "752",
 "title": "Open the Lock",
 "level": "Medium",
 "topic": "Graph",
 "question": "A lock has 4 wheels with digits 0–9; one move turns one wheel by one step (9 and 0 are neighbours). It starts at '0000'. Some combinations (deadends) lock the lock for good if reached. Return the fewest moves to reach the target, or −1 if impossible. Example: deadends ['0201','0101','0102','1212','2002'], target '0202' → 6.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bidirectional BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def openLock(self, deadends, target):\n        dead = set(deadends)\n        if '0000' in dead or target in dead: return -1\n        if target == '0000': return 0\n        a, b = {'0000'}, {target}\n        seen = {'0000', target}\n        steps = 0\n        while a and b:\n            if len(a) > len(b): a, b = b, a\n            nxt = set()\n            steps += 1\n            for cur in a:\n                for i in range(4):\n                    d = int(cur[i])\n                    for nd in ((d + 1) % 10, (d - 1) % 10):\n                        w = cur[:i] + str(nd) + cur[i + 1:]\n                        if w in b: return steps\n                        if w not in seen and w not in dead:\n                            seen.add(w)\n                            nxt.add(w)\n            a = nxt\n        return -1",
   "time": "O(10⁴·8)",
   "space": "O(10⁴)",
   "explain": "Search from both '0000' and the target and always grow the smaller frontier.",
   "frames": [],
   "alt": true
  }
 ]
};
