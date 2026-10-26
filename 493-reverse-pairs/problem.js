window.PROBLEM = {
 "id": "493",
 "title": "Reverse Pairs",
 "level": "Hard",
 "topic": "Sorting",
 "question": "Count the pairs (i, j) with i < j and nums[i] > 2 · nums[j]. Example: [1,3,2,3,1] → 2.",
 "why": "[1,3,2,3,1]: the pairs (3,1) and (3,1) have 3 > 2·1 → 2 reverse pairs.",
 "idea": "Merge sort the array. While merging two sorted halves, for every number x on the left count the numbers y on the right with x > 2y (a moving pointer, since both halves are sorted). Then merge normally.",
 "input": "nums = [1,3,2,3,1]",
 "output": "2",
 "notes": [],
 "best": "Merge sort the array. While merging two sorted halves, for every number x on the left count the numbers y on the right with x > 2y (a moving pointer, since both halves are sorted). Then merge normally.",
 "variants": [
  {
   "name": "Merge sort counting",
   "code": "class Solution:\n    def reversePairs(self, nums):\n        def sort(a):\n            if len(a) <= 1:\n                return a, 0\n            mid = len(a) // 2\n            l, cl = sort(a[:mid])\n            r, cr = sort(a[mid:])\n            cnt = cl + cr\n            j = 0\n            for x in l:\n                while j < len(r) and x > 2 * r[j]:\n                    j += 1\n                cnt += j\n            return list(merge(l, r)), cnt\n        return sort(nums)[1]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Merge sort the array. While merging two sorted halves, for every number x on the left count the numbers y on the right with x > 2y (a moving pointer, since both halves are sorted). Then merge normally.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def reversePairs(self, nums):\n        n = len(nums)\n        return sum(1 for i in range(n) for j in range(i + 1, n) if nums[i] > 2 * nums[j])",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Compare each number with every number after it.",
   "frames": [],
   "alt": true
  }
 ]
};
