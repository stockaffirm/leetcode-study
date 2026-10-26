window.PROBLEM = {
 "id": "315",
 "title": "Count of Smaller Numbers After Self",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "For each element return how many smaller elements are to its right. Example: [5,2,6,1] → [2,1,1,0].",
 "why": "[5,2,6,1] → [2,1,1,0].",
 "idea": "Scan from the right. Keep a Fenwick tree (counts per compressed value). For each number ask how many already-inserted values are smaller, then insert it.",
 "input": "nums = [5,2,6,1]",
 "output": "[2, 1, 1, 0]",
 "notes": [],
 "best": "Scan from the right. Keep a Fenwick tree (counts per compressed value). For each number ask how many already-inserted values are smaller, then insert it.",
 "variants": [
  {
   "name": "Fenwick tree over value ranks, scanning from the right",
   "code": "class Solution:\n    def countSmaller(self, nums):\n        rank = {v: i + 1 for i, v in enumerate(sorted(set(nums)))}\n        m = len(rank)\n        tree = [0] * (m + 1)\n        def add(i):\n            while i <= m:\n                tree[i] += 1\n                i += i & -i\n        def query(i):\n            s = 0\n            while i > 0:\n                s += tree[i]\n                i -= i & -i\n            return s\n        res = []\n        for x in reversed(nums):\n            res.append(query(rank[x] - 1))\n            add(rank[x])\n        return res[::-1]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Scan from the right. Keep a Fenwick tree (counts per compressed value). For each number ask how many already-inserted values are smaller, then insert it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Merge sort with indices",
   "tag": "Alternative",
   "code": "class Solution:\n    def countSmaller(self, nums):\n        n = len(nums)\n        res = [0] * n\n        idx = list(range(n))\n        def sort(lo, hi):\n            if hi - lo <= 1:\n                return\n            mid = (lo + hi) // 2\n            sort(lo, mid)\n            sort(mid, hi)\n            tmp = []\n            i, j = lo, mid\n            while i < mid or j < hi:\n                if j == hi or (i < mid and nums[idx[i]] <= nums[idx[j]]):\n                    res[idx[i]] += j - mid\n                    tmp.append(idx[i])\n                    i += 1\n                else:\n                    tmp.append(idx[j])\n                    j += 1\n            idx[lo:hi] = tmp\n        sort(0, n)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Count while merging: elements moving left past a smaller one add to its count.",
   "frames": [],
   "alt": true
  }
 ]
};
