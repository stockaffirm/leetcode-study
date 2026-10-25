window.PROBLEM = {
 "id": "1046",
 "title": "Last Stone Weight",
 "level": "Easy",
 "topic": "Heap",
 "question": "You have a pile of stones with weights stones[i]. Each turn, take the TWO heaviest stones and smash them together: if they weigh the same, both are destroyed; otherwise the lighter one is destroyed and the heavier one loses weight equal to the lighter one. Repeat until at most one stone is left. Return its weight, or 0 if none are left. Example: [2,7,4,1,8,1] → smash 8 and 7 → 1; smash 4 and 2 → 2; smash 2 and 1 → 1; smash 1 and 1 → both gone; one stone of weight 1 remains → 1.",
 "why": "Repeatedly smash the two heaviest stones: equal stones vanish, otherwise the lighter one vanishes and the heavier loses that much weight. What remains?",
 "idea": "You always need the two largest stones, which is exactly what a max-heap gives (Python's heapq is a min-heap, so store negatives).",
 "input": "[2, 7, 4, 1, 8, 1]",
 "output": "1",
 "notes": [],
 "best": "You always need the two largest stones, which is exactly what a max-heap gives (Python's heapq is a min-heap, so store negatives).",
 "variants": [
  {
   "name": "Max-heap simulation",
   "code": "class Solution:\n    def lastStoneWeight(self, stones):\n        h = [-s for s in stones]\n        heapify(h)\n        while len(h) > 1:\n            a, b = -heappop(h), -heappop(h)\n            if a != b: heappush(h, -(a - b))\n        return -h[0] if h else 0",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "You always need the two largest stones, which is exactly what a max-heap gives (Python's heapq is a min-heap, so store negatives).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sorted list",
   "tag": "Alternative",
   "code": "class Solution:\n    def lastStoneWeight(self, stones):\n        stones = sorted(stones)\n        while len(stones) > 1:\n            a, b = stones.pop(), stones.pop()\n            if a != b: insort(stones, a - b)\n        return stones[0] if stones else 0",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Keep the stones sorted; pop the two largest and insert the difference back in order.",
   "frames": [],
   "alt": true
  }
 ]
};
