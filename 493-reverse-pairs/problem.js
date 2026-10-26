window.PROBLEM = {
 "id": "493",
 "title": "Reverse Pairs",
 "level": "Hard",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
