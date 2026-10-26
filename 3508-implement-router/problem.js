window.PROBLEM = {
 "id": "3508",
 "title": "Implement Router",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a router that stores packets (source, destination, timestamp) with a memory limit. addPacket adds a packet (false if an identical one is already stored; if full, the oldest packet is dropped first), forwardPacket removes and returns the oldest packet as [source, destination, timestamp] (or [] if empty), getCount(destination, start, end) counts stored packets for that destination with timestamp in [start, end]. Example: Router(3) with the calls add(1,4,90), add(2,5,90), add(1,4,90), add(3,5,95), add(4,5,105), forward(), add(5,2,110), count(5,100,110) → true, true, false, true, true, [2,5,90], true, 1.",
 "why": "Router with capacity 3: adding a 4th packet evicts the oldest; getCount(5,100,110) counts packets for destination 5 in that time range.",
 "idea": "Keep packets in a FIFO (First In, First Out) deque (oldest first) with a set for duplicate detection. For getCount, store each destination's timestamps in a list (they arrive in non-decreasing order) plus how many of its oldest entries have been removed; binary search the live part of the list. Evicting or forwarding a packet pops the deque front and advances that destination's removed counter.",
 "input": "Router(3); addPacket(1,4,90); addPacket(2,5,90); addPacket(1,4,90); addPacket(3,5,95); addPacket(4,5,105); forwardPacket(); addPacket(5,2,110); getCount(5,100,110)",
 "output": "[True, True, False, True, True, [2, 5, 90], True, 1]",
 "notes": [],
 "best": "Keep packets in a FIFO (First In, First Out) deque (oldest first) with a set for duplicate detection. For getCount, store each destination's timestamps in a list (they arrive in non-decreasing order) plus how many of its oldest entries have been removed; binary search the live part of the list. Evicting or forwarding a packet pops the deque front and advances that destination's removed counter.",
 "variants": [
  {
   "name": "FIFO queue + duplicate set + per-destination timestamps",
   "code": "class Router:\n    def __init__(self, memoryLimit):\n        self.cap = memoryLimit\n        self.q = deque()\n        self.seen = set()\n        self.ts = defaultdict(list)\n        self.head = defaultdict(int)\n\n    def addPacket(self, source, destination, timestamp):\n        key = (source, destination, timestamp)\n        if key in self.seen:\n            return False\n        if len(self.q) == self.cap:\n            self._pop()\n        self.q.append(key)\n        self.seen.add(key)\n        self.ts[destination].append(timestamp)\n        return True\n\n    def _pop(self):\n        s, d, t = self.q.popleft()\n        self.seen.discard((s, d, t))\n        self.head[d] += 1\n        return [s, d, t]\n\n    def forwardPacket(self):\n        return self._pop() if self.q else []\n\n    def getCount(self, destination, startTime, endTime):\n        lst = self.ts[destination]\n        h = self.head[destination]\n        return bisect_right(lst, endTime, h) - bisect_left(lst, startTime, h)",
   "time": "O(log n) per call",
   "space": "O(memoryLimit)",
   "explain": "Keep packets in a FIFO (First In, First Out) deque (oldest first) with a set for duplicate detection. For getCount, store each destination's timestamps in a list (they arrive in non-decreasing order) plus how many of its oldest entries have been removed; binary search the live part of the list. Evicting or forwarding a packet pops the deque front and advances that destination's removed counter.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Plain list with scans",
   "tag": "Brute force",
   "code": "class Router:\n    def __init__(self, memoryLimit):\n        self.cap = memoryLimit\n        self.pk = []\n\n    def addPacket(self, source, destination, timestamp):\n        p = [source, destination, timestamp]\n        if p in self.pk:\n            return False\n        if len(self.pk) == self.cap:\n            self.pk.pop(0)\n        self.pk.append(p)\n        return True\n\n    def forwardPacket(self):\n        return self.pk.pop(0) if self.pk else []\n\n    def getCount(self, destination, startTime, endTime):\n        return sum(1 for s, d, t in self.pk if d == destination and startTime <= t <= endTime)",
   "time": "O(n) per call",
   "space": "O(memoryLimit)",
   "explain": "Keep packets in a list; check duplicates, evict and count by scanning.",
   "frames": [],
   "alt": true
  }
 ]
};
