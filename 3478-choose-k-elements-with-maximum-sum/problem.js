window.PROBLEM = {
 "id": "3478",
 "title": "Choose K Elements With Maximum Sum",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "nums1 [4,2,1,5,3], nums2 [10,20,30,40,50], k=2 → [80,30,0,80,50].",
 "idea": "Sort the indices by nums1. Sweep upwards keeping a min-heap of the k largest nums2 values among strictly smaller nums1 entries (and their sum). Equal nums1 values share one answer, so add a group's values to the heap only after answering the whole group.",
 "input": "nums1 = [4,2,1,5,3], nums2 = [10,20,30,40,50], k = 2",
 "output": "[80, 30, 0, 80, 50]",
 "notes": [],
 "best": "Sort the indices by nums1. Sweep upwards keeping a min-heap of the k largest nums2 values among strictly smaller nums1 entries (and their sum). Equal nums1 values share one answer, so add a group's values to the heap only after answering the whole group.",
 "variants": [
  {
   "name": "Process in order of nums1 with a min-heap of the top k values",
   "code": "class Solution:\n    def findMaxSum(self, nums1, nums2, k):\n        n = len(nums1)\n        order = sorted(range(n), key=lambda i: nums1[i])\n        res = [0] * n\n        heap = []\n        total = 0\n        i = 0\n        while i < n:\n            j = i\n            while j < n and nums1[order[j]] == nums1[order[i]]:\n                res[order[j]] = total\n                j += 1\n            for t in range(i, j):\n                v = nums2[order[t]]\n                heappush(heap, v)\n                total += v\n                if len(heap) > k:\n                    total -= heappop(heap)\n            i = j\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the indices by nums1. Sweep upwards keeping a min-heap of the k largest nums2 values among strictly smaller nums1 entries (and their sum). Equal nums1 values share one answer, so add a group's values to the heap only after answering the whole group.",
   "frames": []
  }
 ]
};
