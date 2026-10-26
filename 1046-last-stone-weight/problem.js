window.PROBLEM = {
 "id": "1046",
 "title": "Last Stone Weight",
 "level": "Easy",
 "topic": "Heap",
 "question": "",
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
   "frames": []
  }
 ]
};
