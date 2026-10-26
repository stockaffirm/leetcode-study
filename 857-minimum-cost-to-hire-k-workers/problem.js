window.PROBLEM = {
 "id": "857",
 "title": "Minimum Cost to Hire K Workers",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "Hire exactly k workers. Each worker has a quality and a minimum wage. Everyone is paid in proportion to quality (the same rate for all), and nobody earns less than their minimum. Minimise the total pay.",
 "idea": "The rate must be at least wage/quality for everyone hired, so the group's rate is the largest wage/quality ratio in it. Sort by ratio; going through workers, the current ratio is the group's rate, and we want the k smallest qualities seen so far (a max-heap drops the largest).",
 "input": "quality [10,20,5], wage [70,50,30], k=2",
 "output": "105.0",
 "notes": [],
 "best": "The rate must be at least wage/quality for everyone hired, so the group's rate is the largest wage/quality ratio in it. Sort by ratio; going through workers, the current ratio is the group's rate, and we want the k smallest qualities seen so far (a max-heap drops the largest).",
 "variants": [
  {
   "name": "Sort by wage/quality, keep the k smallest qualities",
   "code": "class Solution:\n    def mincostToHireWorkers(self, quality, wage, k):\n        workers = sorted(zip(wage, quality), key=lambda x: x[0] / x[1])\n        heap, qsum = [], 0\n        best = float('inf')\n        for w, q in workers:\n            heappush(heap, -q)\n            qsum += q\n            if len(heap) > k: qsum += heappop(heap)\n            if len(heap) == k: best = min(best, w / q * qsum)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The rate must be at least wage/quality for everyone hired, so the group's rate is the largest wage/quality ratio in it. Sort by ratio; going through workers, the current ratio is the group's rate, and we want the k smallest qualities seen so far (a max-heap drops the largest).",
   "frames": []
  }
 ]
};
