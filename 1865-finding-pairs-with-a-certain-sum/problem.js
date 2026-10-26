window.PROBLEM = {
 "id": "1865",
 "title": "Finding Pairs With a Certain Sum",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a class FindSumPairs created with two lists nums1 and nums2. add(index, val) adds val to nums2[index]. count(tot) returns the number of pairs of positions (i, j) with nums1[i] + nums2[j] == tot. Example: nums1 [1,1,2,2,2,3], nums2 [1,4,5,2,5,4]: count(7) → 8; add(3,2) changes nums2[3] to 4; count(8) → 2; count(4) → 1; add(0,1); add(1,1); count(7) → 11.",
 "why": "Two lists. add(index, val) changes an entry of the second list; count(tot) says how many pairs (one number from each list) add up to tot.",
 "idea": "Keep a counter of the second list's values, updated on every add. To count pairs, go through the (short) first list and look up tot − x in the counter.",
 "input": "nums1 [1,1,2,2,2,3], nums2 [1,4,5,2,5,4]; count 7, add(3,2), count 8, …",
 "output": "8, 2, 1, 11",
 "notes": [],
 "best": "Keep a counter of the second list's values, updated on every add. To count pairs, go through the (short) first list and look up tot − x in the counter.",
 "variants": [
  {
   "name": "Counter of the second list",
   "code": "class FindSumPairs:\n    def __init__(self, nums1, nums2):\n        self.a, self.b = nums1, nums2\n        self.cnt = Counter(nums2)\n    def add(self, index, val):\n        self.cnt[self.b[index]] -= 1\n        self.b[index] += val\n        self.cnt[self.b[index]] += 1\n    def count(self, tot):\n        return sum(self.cnt[tot - x] for x in self.a)",
   "time": "O(len(nums1)) per count",
   "space": "O(len(nums2))",
   "explain": "Keep a counter of the second list's values, updated on every add. To count pairs, go through the (short) first list and look up tot − x in the counter.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count by brute force",
   "tag": "Brute force",
   "code": "class FindSumPairs:\n    def __init__(self, nums1, nums2):\n        self.a, self.b = nums1, nums2\n    def add(self, index, val):\n        self.b[index] += val\n    def count(self, tot):\n        return sum(1 for x in self.a for y in self.b if x + y == tot)",
   "time": "O(n·m) per count",
   "space": "O(1)",
   "explain": "Compare every pair on each count call.",
   "frames": [],
   "alt": true
  }
 ]
};
