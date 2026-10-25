window.PROBLEM = {
 "id": "1966",
 "title": "Binary Searchable Numbers in an Unsorted Array",
 "level": "Medium",
 "topic": "Array / String",
 "question": "A random pivot binary search is run for every value of an array of DISTINCT numbers (not sorted): look at a random pivot; if it is the target return, if it is smaller than the target discard everything up to the pivot, otherwise everything from the pivot on. Count the values that are guaranteed to be found whatever the pivots are. Example: [−1,5,2] → 1.",
 "why": "Binary search with a random pivot is run for every value of an unsorted array of distinct numbers. How many values are always found?",
 "idea": "A value is always found iff everything to its left is smaller and everything to its right is bigger. Check with a prefix maximum and a suffix minimum.",
 "input": "[-1,5,2]",
 "output": "1",
 "notes": [],
 "best": "A value is always found iff everything to its left is smaller and everything to its right is bigger. Check with a prefix maximum and a suffix minimum.",
 "variants": [
  {
   "name": "Prefix maximum and suffix minimum",
   "code": "class Solution:\n    def binarySearchableNumbers(self, nums):\n        n = len(nums)\n        sufmin = [float('inf')] * (n + 1)\n        for i in range(n - 1, -1, -1): sufmin[i] = min(sufmin[i + 1], nums[i])\n        premax, count = float('-inf'), 0\n        for i, x in enumerate(nums):\n            if premax < x < sufmin[i + 1]: count += 1\n            premax = max(premax, x)\n        return count",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A value is always found iff everything to its left is smaller and everything to its right is bigger. Check with a prefix maximum and a suffix minimum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every element",
   "tag": "Brute force",
   "code": "class Solution:\n    def binarySearchableNumbers(self, nums):\n        return sum(all(nums[j] < x for j in range(i)) and all(nums[j] > x for j in range(i + 1, len(nums))) for i, x in enumerate(nums))",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "An element counts if all earlier ones are smaller and all later ones bigger.",
   "frames": [],
   "alt": true
  }
 ]
};
