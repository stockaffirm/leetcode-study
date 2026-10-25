window.PROBLEM = {
 "id": "1298",
 "title": "Maximum Candies You Can Get from Boxes",
 "level": "Hard",
 "topic": "Graph",
 "question": "You have n boxes numbered 0 to n−1. status[i] is 1 if box i is open and 0 if it is locked; candies[i] is the number of candies inside; keys[i] lists the boxes whose locks this box's contents can open; containedBoxes[i] lists the boxes found inside box i. You start with the boxes in initialBoxes. You may open any box you hold that is open (or whose key you have found) and take everything inside. Return the maximum number of candies you can collect. Example: status [1,0,1,0], candies [7,5,4,100], keys [[],[],[1],[]], contained [[1,2],[3],[],[]], start [0] → open 0 (7), find boxes 1 and 2, open 2 (4) and its key opens 1 (5) → 16.",
 "why": "Boxes may be locked, contain candies, keys to other boxes and other boxes. Starting from some boxes, how many candies can you collect?",
 "idea": "Keep the boxes you hold and which are unlocked. Repeatedly open any held box that is unlocked: take its candies, unlock the boxes its keys open, and add the boxes inside. Stop when nothing new can be opened.",
 "input": "status [1,0,1,0], candies [7,5,4,100], keys [[],[],[1],[]], inside [[1,2],[3],[],[]], start [0]",
 "output": "16",
 "notes": [],
 "best": "Keep the boxes you hold and which are unlocked. Repeatedly open any held box that is unlocked: take its candies, unlock the boxes its keys open, and add the boxes inside. Stop when nothing new can be opened.",
 "variants": [
  {
   "name": "Repeat: open everything openable",
   "code": "class Solution:\n    def maxCandies(self, status, candies, keys, containedBoxes, initialBoxes):\n        stat = status[:]\n        pending = set(initialBoxes)\n        total = 0\n        progress = True\n        while progress:\n            progress = False\n            for b in list(pending):\n                if stat[b]:\n                    pending.discard(b)\n                    total += candies[b]\n                    for k in keys[b]: stat[k] = 1\n                    pending.update(containedBoxes[b])\n                    progress = True\n        return total",
   "time": "O(n²) simple, O(n) with a queue",
   "space": "O(n)",
   "explain": "Keep the boxes you hold and which are unlocked. Repeatedly open any held box that is unlocked: take its candies, unlock the boxes its keys open, and add the boxes inside. Stop when nothing new can be opened.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS queue + waiting set",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxCandies(self, status, candies, keys, containedBoxes, initialBoxes):\n        stat = status[:]\n        q, waiting, total = deque(), set(), 0\n        def add(b):\n            if stat[b]: q.append(b)\n            else: waiting.add(b)\n        for b in initialBoxes: add(b)\n        while q:\n            b = q.popleft()\n            total += candies[b]\n            for k in keys[b]:\n                stat[k] = 1\n                if k in waiting:\n                    waiting.discard(k)\n                    q.append(k)\n            for c in containedBoxes[b]: add(c)\n        return total",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Open boxes through a queue; boxes still locked wait in a set until their key shows up.",
   "frames": [],
   "alt": true
  }
 ]
};
