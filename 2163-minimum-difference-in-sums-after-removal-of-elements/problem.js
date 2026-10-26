window.PROBLEM = {
 "id": "2163",
 "title": "Minimum Difference in the Sums After Removal of Elements",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "[7,9,5,8,1,3], n=2: remove 9 and 1 → [7,5,8,3]; (7+5) − (8+3) = 1, the smallest possible.",
 "idea": "Remove n numbers, keep 2n, split them in half: first n sum minus last n sum. Make the left sum as small and the right sum as large as possible. For every split point, a max-heap tracks the smallest n of the prefix and a min-heap the largest n of the suffix.",
 "input": "nums = [7,9,5,8,1,3]",
 "output": "1",
 "notes": [],
 "best": "Remove n numbers, keep 2n, split them in half: first n sum minus last n sum. Make the left sum as small and the right sum as large as possible. For every split point, a max-heap tracks the smallest n of the prefix and a min-heap the largest n of the suffix.",
 "variants": [
  {
   "name": "Prefix min-sums + suffix max-sums with heaps",
   "code": "class Solution:\n    def minimumDifference(self, nums):\n        n = len(nums) // 3\n        left = [0] * (len(nums) + 1)\n        h = [-x for x in nums[:n]]\n        heapify(h)\n        s = sum(nums[:n])\n        left[n] = s\n        for i in range(n, 2 * n):\n            s += nums[i]\n            heappush(h, -nums[i])\n            s += heappop(h)\n            left[i + 1] = s\n        h = nums[2 * n:]\n        heapify(h)\n        s = sum(h)\n        best = left[2 * n] - s\n        for i in range(2 * n - 1, n - 1, -1):\n            s += nums[i]\n            heappush(h, nums[i])\n            s -= heappop(h)\n            best = min(best, left[i] - s)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Remove n numbers, keep 2n, split them in half: first n sum minus last n sum. Make the left sum as small and the right sum as large as possible. For every split point, a max-heap tracks the smallest n of the prefix and a min-heap the largest n of the suffix.",
   "frames": []
  }
 ]
};
