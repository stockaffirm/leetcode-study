window.PROBLEM = {
 "id": "973",
 "title": "K Closest Points to Origin",
 "level": "Medium",
 "topic": "Heap",
 "question": "Given a list of points [x, y] and a number k, return the k points that are closest to the origin (0, 0), using ordinary straight-line distance. The answer may be in any order. Example: points [[1,3],[-2,2]], k=1 → (−2,2) is closer (distance √8) than (1,3) (√10) → [[-2,2]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort by distance",
   "tag": "Alternative",
   "code": "class Solution:\n    def kClosest(self, points, k):\n        return sorted(points, key=lambda p: p[0] ** 2 + p[1] ** 2)[:k]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort all points by squared distance and take the first k.",
   "frames": [],
   "alt": true
  }
 ]
};
