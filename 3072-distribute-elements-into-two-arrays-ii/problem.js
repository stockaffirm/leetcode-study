window.PROBLEM = {
 "id": "3072",
 "title": "Distribute Elements Into Two Arrays II",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "You are given a list nums of different numbers. Build two lists arr1 and arr2: put the first number in arr1 and the second number in arr2. For every later number x, count how many numbers already in each list are strictly GREATER than x. Put x in arr1 if arr1 has the larger count and in arr2 if arr2 has the larger count; if the counts are equal put it in the list with fewer numbers, and if the lists have the same length put it in arr1. Return arr1 followed by arr2. Example: [2,1,3,3] → [2,3,1,3].",
 "why": "Deal numbers into two lists: the first to list 1, the second to list 2, then each next number goes to the list in which MORE elements are greater than it (ties: the shorter list, then list 1).",
 "idea": "You need 'how many elements already in a list are greater than x' fast. Compress the values to ranks and keep a Fenwick tree (binary indexed tree) per list that counts values; a prefix query gives the number ≤ x.",
 "input": "[2, 1, 3, 3]",
 "output": "[2, 3, 1, 3]",
 "notes": [],
 "best": "You need 'how many elements already in a list are greater than x' fast. Compress the values to ranks and keep a Fenwick tree (binary indexed tree) per list that counts values; a prefix query gives the number ≤ x.",
 "variants": [
  {
   "name": "Fenwick (BIT) trees for 'how many are greater'",
   "code": "class Solution:\n    def resultArray(self, nums):\n        vals = sorted(set(nums))\n        rank = {v: i + 1 for i, v in enumerate(vals)}\n        m = len(vals)\n        def add(tree, i):\n            while i <= m:\n                tree[i] += 1\n                i += i & -i\n        def prefix(tree, i):\n            s = 0\n            while i > 0:\n                s += tree[i]\n                i -= i & -i\n            return s\n        t1, t2 = [0] * (m + 1), [0] * (m + 1)\n        a, b = [nums[0]], [nums[1]]\n        add(t1, rank[nums[0]])\n        add(t2, rank[nums[1]])\n        for x in nums[2:]:\n            r = rank[x]\n            g1 = len(a) - prefix(t1, r)\n            g2 = len(b) - prefix(t2, r)\n            if g1 > g2 or (g1 == g2 and len(a) <= len(b)):\n                a.append(x)\n                add(t1, r)\n            else:\n                b.append(x)\n                add(t2, r)\n        return a + b",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "You need 'how many elements already in a list are greater than x' fast. Compress the values to ranks and keep a Fenwick tree (binary indexed tree) per list that counts values; a prefix query gives the number ≤ x.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sorted lists + bisect",
   "tag": "Alternative",
   "code": "class Solution:\n    def resultArray(self, nums):\n        a, b = [nums[0]], [nums[1]]\n        sa, sb = [nums[0]], [nums[1]]\n        for x in nums[2:]:\n            g1 = len(sa) - bisect_right(sa, x)\n            g2 = len(sb) - bisect_right(sb, x)\n            if g1 > g2 or (g1 == g2 and len(a) <= len(b)):\n                a.append(x)\n                insort(sa, x)\n            else:\n                b.append(x)\n                insort(sb, x)\n        return a + b",
   "time": "O(n²) worst",
   "space": "O(n)",
   "explain": "Keep each list also sorted; count greater elements with a binary search. Insertion into a list is O(n) but simple.",
   "frames": [],
   "alt": true
  }
 ]
};
