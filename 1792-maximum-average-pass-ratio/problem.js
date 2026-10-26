window.PROBLEM = {
 "id": "1792",
 "title": "Maximum Average Pass Ratio",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "classes [[1,2],[3,5],[2,2]], 2 extra students → average pass ratio 0.78333.",
 "idea": "Adding a passing student to a class with p of t passing changes its ratio by (p+1)/(t+1) − p/t. Greedily give each extra student to the class with the largest gain, using a max-heap keyed by the gain. The answer is the average ratio afterwards.",
 "input": "classes = [[1,2],[3,5],[2,2]], extraStudents = 2",
 "output": "0.78333",
 "notes": [],
 "best": "Adding a passing student to a class with p of t passing changes its ratio by (p+1)/(t+1) − p/t. Greedily give each extra student to the class with the largest gain, using a max-heap keyed by the gain. The answer is the average ratio afterwards.",
 "variants": [
  {
   "name": "Always add a student to the class that gains the most",
   "code": "class Solution:\n    def maxAverageRatio(self, classes, extraStudents):\n        def gain(p, t):\n            return (p + 1) / (t + 1) - p / t\n        heap = [(-gain(p, t), p, t) for p, t in classes]\n        heapify(heap)\n        for _ in range(extraStudents):\n            _, p, t = heappop(heap)\n            p, t = p + 1, t + 1\n            heappush(heap, (-gain(p, t), p, t))\n        return round(sum(p / t for _, p, t in heap) / len(classes), 5)",
   "time": "O((n + k) log n)",
   "space": "O(n)",
   "explain": "Adding a passing student to a class with p of t passing changes its ratio by (p+1)/(t+1) − p/t. Greedily give each extra student to the class with the largest gain, using a max-heap keyed by the gain. The answer is the average ratio afterwards.",
   "frames": []
  }
 ]
};
