window.PROBLEM = {
 "id": "2179",
 "title": "Count Good Triplets in an Array",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "nums1 [2,0,1,3], nums2 [0,1,2,3] → the only good triplet is (0,1,3) → 1.",
 "idea": "A triplet of values (x, y, z) is good if they appear in the same order in both arrays. Map each value to its position in nums2. Scan nums1: for value v at nums2-position p, the number of earlier values with a smaller position is a Fenwick-tree prefix count (left), and the values still to come with a larger position = (n − 1 − p) − (earlier values with a larger position). The middle element contributes left × right.",
 "input": "nums1 = [2,0,1,3], nums2 = [0,1,2,3]",
 "output": "1",
 "notes": [],
 "best": "A triplet of values (x, y, z) is good if they appear in the same order in both arrays. Map each value to its position in nums2. Scan nums1: for value v at nums2-position p, the number of earlier values with a smaller position is a Fenwick-tree prefix count (left), and the values still to come with a larger position = (n − 1 − p) − (earlier values with a larger position). The middle element contributes left × right.",
 "variants": [
  {
   "name": "Fenwick tree over positions in nums2",
   "code": "class Solution:\n    def goodTriplets(self, nums1, nums2):\n        n = len(nums1)\n        where = {v: i for i, v in enumerate(nums2)}\n        tree = [0] * (n + 1)\n        def add(i):\n            i += 1\n            while i <= n:\n                tree[i] += 1\n                i += i & -i\n        def query(i):\n            s = 0\n            while i > 0:\n                s += tree[i]\n                i -= i & -i\n            return s\n        res = 0\n        for k, v in enumerate(nums1):\n            p = where[v]\n            left = query(p)\n            right = (n - 1 - p) - (k - left)\n            res += left * right\n            add(p)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "A triplet of values (x, y, z) is good if they appear in the same order in both arrays. Map each value to its position in nums2. Scan nums1: for value v at nums2-position p, the number of earlier values with a smaller position is a Fenwick-tree prefix count (left), and the values still to come with a larger position = (n − 1 − p) − (earlier values with a larger position). The middle element contributes left × right.",
   "frames": []
  }
 ]
};
