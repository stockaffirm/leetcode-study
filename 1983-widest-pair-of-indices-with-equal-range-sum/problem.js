window.PROBLEM = {
 "id": "1983",
 "title": "Widest Pair of Indices With Equal Range Sum",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "nums1 [1,1,0,1], nums2 [0,1,1,0] → i=1, j=3 → 3.",
 "idea": "A range i…j has equal sums when the prefix differences of the two arrays at j and at i−1 are equal. Store the first index of every prefix difference (difference 0 at index −1) and update the answer with the distance when a difference repeats.",
 "input": "nums1 = [1,1,0,1], nums2 = [0,1,1,0]",
 "output": "3",
 "notes": [],
 "best": "A range i…j has equal sums when the prefix differences of the two arrays at j and at i−1 are equal. Store the first index of every prefix difference (difference 0 at index −1) and update the answer with the distance when a difference repeats.",
 "variants": [
  {
   "name": "First occurrence of each prefix difference",
   "code": "class Solution:\n    def widestPairOfIndices(self, nums1, nums2):\n        first = {0: -1}\n        diff = best = 0\n        for i, (a, b) in enumerate(zip(nums1, nums2)):\n            diff += a - b\n            if diff in first:\n                best = max(best, i - first[diff])\n            else:\n                first[diff] = i\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A range i…j has equal sums when the prefix differences of the two arrays at j and at i−1 are equal. Store the first index of every prefix difference (difference 0 at index −1) and update the answer with the distance when a difference repeats.",
   "frames": []
  }
 ]
};
