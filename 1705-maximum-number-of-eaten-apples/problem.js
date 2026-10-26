window.PROBLEM = {
 "id": "1705",
 "title": "Maximum Number of Eaten Apples",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "On day i the tree gives apples[i] apples that rot after days[i] days. You eat at most one apple per day. How many can you eat?",
 "idea": "Every day add the new batch to a min-heap keyed by its rotting day, discard rotten batches, and eat one apple from the batch that rots soonest.",
 "input": "apples [1,2,3,5,2], days [3,2,1,4,2]",
 "output": "7",
 "notes": [],
 "best": "Every day add the new batch to a min-heap keyed by its rotting day, discard rotten batches, and eat one apple from the batch that rots soonest.",
 "variants": [
  {
   "name": "Min-heap of expiry days",
   "code": "class Solution:\n    def eatenApples(self, apples, days):\n        heap, eaten, day = [], 0, 0\n        while day < len(apples) or heap:\n            if day < len(apples) and apples[day] > 0: heappush(heap, [day + days[day], apples[day]])\n            while heap and heap[0][0] <= day: heappop(heap)\n            if heap:\n                heap[0][1] -= 1\n                eaten += 1\n                if heap[0][1] == 0: heappop(heap)\n            day += 1\n        return eaten",
   "time": "O((n + T) log n)",
   "space": "O(n)",
   "explain": "Every day add the new batch to a min-heap keyed by its rotting day, discard rotten batches, and eat one apple from the batch that rots soonest.",
   "frames": []
  }
 ]
};
