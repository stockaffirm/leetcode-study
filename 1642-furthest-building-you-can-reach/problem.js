window.PROBLEM = {
 "id": "1642",
 "title": "Furthest Building You Can Reach",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "Walk over buildings left to right; going up costs the height difference in bricks, or one ladder (any height). Going down is free. How far can you get?",
 "idea": "Ladders belong on the biggest climbs. Keep a min-heap of the climbs that hold a ladder; when there are more climbs than ladders, the smallest one is paid with bricks. Stop when the bricks run out.",
 "input": "[4,2,7,6,9,14,12], bricks=5, ladders=1",
 "output": "4",
 "notes": [],
 "best": "Ladders belong on the biggest climbs. Keep a min-heap of the climbs that hold a ladder; when there are more climbs than ladders, the smallest one is paid with bricks. Stop when the bricks run out.",
 "variants": [
  {
   "name": "Min-heap of the climbs done with bricks",
   "code": "class Solution:\n    def furthestBuilding(self, heights, bricks, ladders):\n        heap = []\n        for i in range(len(heights) - 1):\n            d = heights[i + 1] - heights[i]\n            if d > 0:\n                heappush(heap, d)\n                if len(heap) > ladders: bricks -= heappop(heap)\n                if bricks < 0: return i\n        return len(heights) - 1",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Ladders belong on the biggest climbs. Keep a min-heap of the climbs that hold a ladder; when there are more climbs than ladders, the smallest one is paid with bricks. Stop when the bricks run out.",
   "frames": []
  }
 ]
};
