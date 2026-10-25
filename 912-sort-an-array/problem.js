window.PROBLEM = {
 "id": "912",
 "title": "Sort an Array",
 "level": "Medium",
 "topic": "Sorting",
 "question": "Sort an array of integers in ascending order without using a built-in sort, in O(n log n) (a bit slower than just reading the input once). Example: [5,2,3,1] → [1,2,3,5].",
 "why": "[5,2,3,1] → split into [5,2] and [3,1], sort each, merge: [1,2,3,5].",
 "idea": "Split the array in halves, sort each half recursively and merge the two sorted halves by always taking the smaller front element.",
 "input": "nums = [5,2,3,1]",
 "output": "[1,2,3,5]",
 "notes": [],
 "best": "Split the array in halves, sort each half recursively and merge the two sorted halves by always taking the smaller front element.",
 "variants": [
  {
   "name": "Merge sort",
   "code": "class Solution:\n    def sortArray(self, nums):\n        if len(nums) <= 1:\n            return nums\n        mid = len(nums) // 2\n        l = self.sortArray(nums[:mid])\n        r = self.sortArray(nums[mid:])\n        res = []\n        i = j = 0\n        while i < len(l) and j < len(r):\n            if l[i] <= r[j]:\n                res.append(l[i])\n                i += 1\n            else:\n                res.append(r[j])\n                j += 1\n        return res + l[i:] + r[j:]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Split the array in halves, sort each half recursively and merge the two sorted halves by always taking the smaller front element.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Heap sort",
   "tag": "Alternative",
   "code": "class Solution:\n    def sortArray(self, nums):\n        h = list(nums)\n        heapify(h)\n        return [heappop(h) for _ in range(len(h))]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Push everything on a heap and pop the numbers in increasing order.",
   "frames": [],
   "alt": true
  }
 ]
};
