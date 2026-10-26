window.PROBLEM = {
 "id": "1383",
 "title": "Maximum Performance of a Team",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "speeds [2,10,3,1,5,8], efficiency [5,4,3,9,7,2], k=2: pick engineers 2 and 5 → (10+5)·4... best performance 60.",
 "idea": "Performance = (sum of speeds) × (minimum efficiency). Sort engineers by efficiency descending and treat each as the minimum efficiency of the team: everyone processed before has efficiency ≥ it. Keep a min-heap of the k largest speeds seen so far and their sum; the candidate is sum × current efficiency.",
 "input": "n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2",
 "output": "60",
 "notes": [],
 "best": "Performance = (sum of speeds) × (minimum efficiency). Sort engineers by efficiency descending and treat each as the minimum efficiency of the team: everyone processed before has efficiency ≥ it. Keep a min-heap of the k largest speeds seen so far and their sum; the candidate is sum × current efficiency.",
 "variants": [
  {
   "name": "Sort by efficiency, keep the k fastest in a heap",
   "code": "class Solution:\n    def maxPerformance(self, n, speed, efficiency, k):\n        best = total = 0\n        heap = []\n        for e, s in sorted(zip(efficiency, speed), reverse=True):\n            heappush(heap, s)\n            total += s\n            if len(heap) > k:\n                total -= heappop(heap)\n            best = max(best, total * e)\n        return best % (10**9 + 7)",
   "time": "O(n log n)",
   "space": "O(k)",
   "explain": "Performance = (sum of speeds) × (minimum efficiency). Sort engineers by efficiency descending and treat each as the minimum efficiency of the team: everyone processed before has efficiency ≥ it. Keep a min-heap of the k largest speeds seen so far and their sum; the candidate is sum × current efficiency.",
   "frames": []
  }
 ]
};
