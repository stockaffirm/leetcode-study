window.PROBLEM = {
 "id": "3915",
 "title": "Maximum Sum of Alternating Subsequence With Distance at Least K",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "Choose a subsequence of nums whose consecutive chosen indices differ by at least k and whose values strictly alternate (up, down, up … or down, up, down …; a single element counts). Return the maximum sum of the chosen values. Example: [5,4,2], k=2 → 7.",
 "why": "[3,5,4,2,4], k=1: 3 < 5 > 2 < 4 uses indices 0,1,3,4 → 14.",
 "idea": "Let peak[i] be the best sum of a valid subsequence ending at i where nums[i] is higher than the previous chosen value, and valley[i] the same with nums[i] lower. peak[i] = nums[i] + max(0, best valley[j]) over j ≤ i − k with nums[j] < nums[i]; valley[i] is symmetric. Two Fenwick trees (prefix maximum over compressed values) answer those queries; insert index j only once i − j reaches k.",
 "input": "nums = [5,4,2], k = 2",
 "output": "7",
 "notes": [],
 "best": "Let peak[i] be the best sum of a valid subsequence ending at i where nums[i] is higher than the previous chosen value, and valley[i] the same with nums[i] lower. peak[i] = nums[i] + max(0, best valley[j]) over j ≤ i − k with nums[j] < nums[i]; valley[i] is symmetric. Two Fenwick trees (prefix maximum over compressed values) answer those queries; insert index j only once i − j reaches k.",
 "variants": [
  {
   "name": "Two DP arrays with Fenwick prefix maxima",
   "code": "class Solution:\n    def maxAlternatingSum(self, nums, k):\n        n = len(nums)\n        rank = {v: i + 1 for i, v in enumerate(sorted(set(nums)))}\n        m = len(rank)\n        NEG = float('-inf')\n        def upd(t, i, v):\n            while i <= m:\n                if v > t[i]:\n                    t[i] = v\n                i += i & -i\n        def qry(t, i):\n            r = NEG\n            while i > 0:\n                if t[i] > r:\n                    r = t[i]\n                i -= i & -i\n            return r\n        low = [NEG] * (m + 1)\n        high = [NEG] * (m + 1)\n        peak = [0] * n\n        valley = [0] * n\n        best = NEG\n        for i in range(n):\n            j = i - k\n            if j >= 0:\n                upd(low, rank[nums[j]], valley[j])\n                upd(high, m + 1 - rank[nums[j]], peak[j])\n            a = qry(low, rank[nums[i]] - 1)\n            b = qry(high, m - rank[nums[i]])\n            peak[i] = nums[i] + max(0, a)\n            valley[i] = nums[i] + max(0, b)\n            best = max(best, peak[i], valley[i])\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Let peak[i] be the best sum of a valid subsequence ending at i where nums[i] is higher than the previous chosen value, and valley[i] the same with nums[i] lower. peak[i] = nums[i] + max(0, best valley[j]) over j ≤ i − k with nums[j] < nums[i]; valley[i] is symmetric. Two Fenwick trees (prefix maximum over compressed values) answer those queries; insert index j only once i − j reaches k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Quadratic DP",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxAlternatingSum(self, nums, k):\n        n = len(nums)\n        peak = [0] * n\n        valley = [0] * n\n        best = float('-inf')\n        for i in range(n):\n            a = b = 0\n            for j in range(i - k + 1):\n                if nums[j] < nums[i]:\n                    a = max(a, valley[j])\n                elif nums[j] > nums[i]:\n                    b = max(b, peak[j])\n            peak[i] = nums[i] + a\n            valley[i] = nums[i] + b\n            best = max(best, peak[i], valley[i])\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each i scan every j ≤ i − k directly instead of a Fenwick tree.",
   "frames": [],
   "alt": true
  }
 ]
};
