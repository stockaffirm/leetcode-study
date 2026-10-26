window.PROBLEM = {
 "id": "3636",
 "title": "Threshold Majority Queries",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "Each query [l, r, threshold] asks: in nums[l..r], which value occurs most often (smallest value if tied)? If its count is at least the threshold return it, otherwise −1. Example: [1,1,2,2,1,1], [[0,5,4],[0,3,3],[2,3,2]] → [1,−1,2].",
 "why": "[1,1,2,2,1,1], range 0-5 needs frequency ≥ 4: 1 appears 4 times → 1; range 0-3 needs ≥ 3: none → −1.",
 "idea": "Each query asks for the range's mode (highest frequency, smallest value on ties) and checks it reaches the threshold. Split the array into blocks and precompute the mode of every block range. For a query, candidates are the mode of the full middle blocks plus every value in the two partial ends; count each candidate with binary search on its position list.",
 "input": "nums = [1,1,2,2,1,1], queries = [[0,5,4],[0,3,3],[2,3,2]]",
 "output": "[1, -1, 2]",
 "notes": [],
 "best": "Each query asks for the range's mode (highest frequency, smallest value on ties) and checks it reaches the threshold. Split the array into blocks and precompute the mode of every block range. For a query, candidates are the mode of the full middle blocks plus every value in the two partial ends; count each candidate with binary search on its position list.",
 "variants": [
  {
   "name": "Block-decomposition range mode",
   "code": "class Solution:\n    def subarrayMajority(self, nums, queries):\n        n = len(nums)\n        B = max(1, int(n ** 0.5))\n        nb = (n + B - 1) // B\n        pos = defaultdict(list)\n        for i, x in enumerate(nums):\n            pos[x].append(i)\n        mode = [[None] * nb for _ in range(nb)]\n        for bi in range(nb):\n            cnt = Counter()\n            best = (0, 0)\n            for bj in range(bi, nb):\n                for x in nums[bj * B:(bj + 1) * B]:\n                    cnt[x] += 1\n                    if (cnt[x], -x) > best:\n                        best = (cnt[x], -x)\n                mode[bi][bj] = -best[1]\n        def freq(v, l, r):\n            return bisect_right(pos[v], r) - bisect_left(pos[v], l)\n        res = []\n        for l, r, t in queries:\n            bl, br = l // B, r // B\n            if br - bl <= 1:\n                cand = set(nums[l:r + 1])\n            else:\n                cand = set(nums[l:(bl + 1) * B]) | set(nums[br * B:r + 1])\n                cand.add(mode[bl + 1][br - 1])\n            best = max((freq(v, l, r), -v) for v in cand)\n            res.append(-best[1] if best[0] >= t else -1)\n        return res",
   "time": "O((n + q)·√n·log n)",
   "space": "O(n·√n)",
   "explain": "Each query asks for the range's mode (highest frequency, smallest value on ties) and checks it reaches the threshold. Split the array into blocks and precompute the mode of every block range. For a query, candidates are the mode of the full middle blocks plus every value in the two partial ends; count each candidate with binary search on its position list.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count every query directly",
   "tag": "Brute force",
   "code": "class Solution:\n    def subarrayMajority(self, nums, queries):\n        res = []\n        for l, r, t in queries:\n            cnt = Counter(nums[l:r + 1])\n            f, v = max((c, -x) for x, c in cnt.items())\n            res.append(-v if f >= t else -1)\n        return res",
   "time": "O(q·n)",
   "space": "O(n)",
   "explain": "Count the values in each range, pick the highest frequency (smallest value on ties) and compare to the threshold.",
   "frames": [],
   "alt": true
  }
 ]
};
