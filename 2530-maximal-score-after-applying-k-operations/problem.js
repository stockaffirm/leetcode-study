window.PROBLEM = {
 "id": "2530",
 "title": "Maximal Score After Applying K Operations",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "[1,10,3,3,3], k=3: take 10 (→4), then 4 (→2), then 3 → 17.",
 "idea": "Each operation adds nums[i] to the score and replaces it with ceil(nums[i] / 3). Greedy: always operate on the current maximum. Use a max-heap.",
 "input": "nums = [1,10,3,3,3], k = 3",
 "output": "17",
 "notes": [],
 "best": "Each operation adds nums[i] to the score and replaces it with ceil(nums[i] / 3). Greedy: always operate on the current maximum. Use a max-heap.",
 "variants": [
  {
   "name": "Always take the biggest, put back a third",
   "code": "class Solution:\n    def maxKelements(self, nums, k):\n        heap = [-x for x in nums]\n        heapify(heap)\n        score = 0\n        for _ in range(k):\n            x = -heappop(heap)\n            score += x\n            heappush(heap, -((x + 2) // 3))\n        return score",
   "time": "O(k log n)",
   "space": "O(n)",
   "explain": "Each operation adds nums[i] to the score and replaces it with ceil(nums[i] / 3). Greedy: always operate on the current maximum. Use a max-heap.",
   "frames": []
  }
 ]
};
