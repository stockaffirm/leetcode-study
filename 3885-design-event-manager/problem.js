window.PROBLEM = {
 "id": "3885",
 "title": "Design Event Manager",
 "level": "Medium",
 "topic": "Design",
 "question": "Design EventManager(events): events are [id, priority]. updatePriority(id, p) changes an active event's priority. pollHighest() removes and returns the id of the active event with the highest priority (smallest id on ties), or −1 if none are left. Example: [[5,7],[2,7],[9,4]] → poll 2, update 9→7, poll 5, poll 9.",
 "why": "Events (5,7),(2,7),(9,4): poll → 2 (tie on priority 7, smaller id); update 9 to 7; poll → 5; poll → 9.",
 "idea": "Keep a heap ordered by (priority descending, id ascending). Updating an event pushes a new entry and records the current priority in a dict; stale heap entries are ignored when popped. pollHighest pops until it finds an entry that matches the dict, removes the event and returns its id.",
 "input": "EventManager([[5,7],[2,7],[9,4]]); pollHighest(); updatePriority(9,7); pollHighest(); pollHighest()",
 "output": "[2, None, 5, 9]",
 "notes": [],
 "best": "Keep a heap ordered by (priority descending, id ascending). Updating an event pushes a new entry and records the current priority in a dict; stale heap entries are ignored when popped. pollHighest pops until it finds an entry that matches the dict, removes the event and returns its id.",
 "variants": [
  {
   "name": "Max-heap with lazy deletion",
   "code": "class EventManager:\n    def __init__(self, events):\n        self.cur = {}\n        self.heap = []\n        for eid, p in events:\n            self.cur[eid] = p\n            self.heap.append((-p, eid))\n        heapify(self.heap)\n\n    def updatePriority(self, eventId, newPriority):\n        self.cur[eventId] = newPriority\n        heappush(self.heap, (-newPriority, eventId))\n\n    def pollHighest(self):\n        while self.heap:\n            p, eid = heappop(self.heap)\n            if self.cur.get(eid) == -p:\n                del self.cur[eid]\n                return eid\n        return -1",
   "time": "O(log n) per call",
   "space": "O(n)",
   "explain": "Keep a heap ordered by (priority descending, id ascending). Updating an event pushes a new entry and records the current priority in a dict; stale heap entries are ignored when popped. pollHighest pops until it finds an entry that matches the dict, removes the event and returns its id.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sorted container by rebuilding",
   "tag": "Brute force",
   "code": "class EventManager:\n    def __init__(self, events):\n        self.d = {eid: p for eid, p in events}\n\n    def updatePriority(self, eventId, newPriority):\n        self.d[eventId] = newPriority\n\n    def pollHighest(self):\n        if not self.d:\n            return -1\n        eid = min(self.d, key=lambda e: (-self.d[e], e))\n        del self.d[eid]\n        return eid",
   "time": "O(n) per poll",
   "space": "O(n)",
   "explain": "Keep a dict and scan it for the best event on every poll.",
   "frames": [],
   "alt": true
  }
 ]
};
