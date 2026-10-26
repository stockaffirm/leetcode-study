window.PROBLEM = {
 "id": "973",
 "title": "K Closest Points to Origin",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "Return the k points nearest to (0,0).",
 "idea": "Keep the k best in a max-heap keyed by distance; when it grows beyond k, drop the farthest.",
 "input": "[[1,3],[-2,2]], k=1",
 "output": "[[-2, 2]]",
 "notes": [],
 "best": "Keep the k best in a max-heap keyed by distance; when it grows beyond k, drop the farthest.",
 "variants": [
  {
   "name": "Max-heap of size k",
   "code": "class Solution:\n    def kClosest(self, points, k):\n        heap = []\n        for x, y in points:\n            heappush(heap, (-(x * x + y * y), x, y))\n            if len(heap) > k: heappop(heap)\n        return [[x, y] for _, x, y in heap]",
   "time": "O(n log k)",
   "space": "O(k)",
   "explain": "Keep the k best in a max-heap keyed by distance; when it grows beyond k, drop the farthest.",
   "frames": []
  }
 ]
};
