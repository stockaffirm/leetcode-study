window.PROBLEM = {
 "id": "2530",
 "title": "Maximal Score After Applying K Operations",
 "level": "Medium",
 "topic": "Heap",
 "question": "Perform exactly k operations: pick an index i, add nums[i] to your score and replace nums[i] with ceil(nums[i] / 3). Return the maximum score. Example: [1,10,3,3,3], k=3 → 17.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort every round",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxKelements(self, nums, k):\n        nums = sorted(nums)\n        score = 0\n        for _ in range(k):\n            x = nums.pop()\n            score += x\n            insort(nums, (x + 2) // 3)\n        return score",
   "time": "O(k·n log n)",
   "space": "O(n)",
   "explain": "Re-sort the list after each operation instead of using a heap.",
   "frames": [],
   "alt": true
  }
 ]
};
