window.PROBLEM = {
 "id": "1298",
 "title": "Maximum Candies You Can Get from Boxes",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
