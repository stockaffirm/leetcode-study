window.PROBLEM = {
 "id": "632",
 "title": "Smallest Range Covering Elements from K Lists",
 "level": "Hard",
 "topic": "Heap",
 "question": "You are given k lists, each sorted ascending. Find the smallest range [a, b] such that every list has at least one number inside it. A range [a, b] is smaller than [c, d] if b−a < d−c, or the lengths are equal and a < c. Example: [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]] → [20,24].",
 "why": "k sorted lists are given. Find the smallest range [a, b] that contains at least one number from every list.",
 "idea": "Keep the current smallest element of each list in a min-heap and remember the current maximum. The range is [heap min, max]. Then advance the list that owns the minimum — any better range needs that list to move on.",
 "input": "[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]",
 "output": "[20,24]",
 "notes": [],
 "best": "Keep the current smallest element of each list in a min-heap and remember the current maximum. The range is [heap min, max]. Then advance the list that owns the minimum — any better range needs that list to move on.",
 "variants": [
  {
   "name": "Min-heap over one pointer per list",
   "code": "class Solution:\n    def smallestRange(self, nums):\n        heap = [(lst[0], i, 0) for i, lst in enumerate(nums)]\n        heapify(heap)\n        hi = max(lst[0] for lst in nums)\n        res = [heap[0][0], hi]\n        while True:\n            v, i, j = heappop(heap)\n            if hi - v < res[1] - res[0]: res = [v, hi]\n            if j + 1 == len(nums[i]): break\n            nv = nums[i][j + 1]\n            hi = max(hi, nv)\n            heappush(heap, (nv, i, j + 1))\n        return res",
   "time": "O(N log k)",
   "space": "O(k)",
   "explain": "Keep the current smallest element of each list in a min-heap and remember the current maximum. The range is [heap min, max]. Then advance the list that owns the minimum — any better range needs that list to move on.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sliding window over all numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def smallestRange(self, nums):\n        items = sorted((v, i) for i, lst in enumerate(nums) for v in lst)\n        need, have = len(nums), Counter()\n        best = [-10 ** 9, 10 ** 9]\n        l = 0\n        for r, (v, i) in enumerate(items):\n            have[i] += 1\n            while len(have) == need:\n                if v - items[l][0] < best[1] - best[0]: best = [items[l][0], v]\n                li = items[l][1]\n                have[li] -= 1\n                if have[li] == 0: del have[li]\n                l += 1\n        return best",
   "time": "O(N log N)",
   "space": "O(N)",
   "explain": "Merge all numbers (tagged with their list), sort, and slide a window that must contain every list.",
   "frames": [],
   "alt": true
  }
 ]
};
