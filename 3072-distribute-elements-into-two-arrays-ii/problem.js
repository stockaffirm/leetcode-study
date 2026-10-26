window.PROBLEM = {
 "id": "3072",
 "title": "Distribute Elements Into Two Arrays II",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
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
   "frames": []
  }
 ]
};
