window.PROBLEM = {
 "id": "218",
 "title": "The Skyline Problem",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "Buildings are rectangles [left, right, height]. Return the outline of their skyline as the key points where the height changes.",
 "idea": "Sweep over the x positions: at a building's left edge add it to a max-heap, at its right edge it becomes stale. The skyline height at x is the top of the heap after removing expired buildings; report a point whenever the height changes.",
 "input": "[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]",
 "output": "[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]",
 "notes": [],
 "best": "Sweep over the x positions: at a building's left edge add it to a max-heap, at its right edge it becomes stale. The skyline height at x is the top of the heap after removing expired buildings; report a point whenever the height changes.",
 "variants": [
  {
   "name": "Sweep line with a max-heap",
   "code": "class Solution:\n    def getSkyline(self, buildings):\n        events = [(l, -h, r) for l, r, h in buildings] + [(r, 0, 0) for l, r, h in buildings]\n        events.sort()\n        res = [[0, 0]]\n        heap = [(0, float('inf'))]\n        for x, neg_h, r in events:\n            while heap[0][1] <= x: heappop(heap)\n            if neg_h: heappush(heap, (neg_h, r))\n            if res[-1][1] != -heap[0][0]: res.append([x, -heap[0][0]])\n        return res[1:]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sweep over the x positions: at a building's left edge add it to a max-heap, at its right edge it becomes stale. The skyline height at x is the top of the heap after removing expired buildings; report a point whenever the height changes.",
   "frames": []
  }
 ]
};
