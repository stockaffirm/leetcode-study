window.PROBLEM = {
 "id": "3891",
 "title": "Minimum Increase to Maximize Special Indices",
 "level": "Medium",
 "topic": "Greedy",
 "question": "A position (not the first or last) is 'special' if its number is strictly bigger than both neighbours. In one step you add 1 to any number. First maximise the number of special positions, and among the ways to do that use the minimum number of steps. Return that number of steps. Example: [2,1,1,3] → 2.",
 "why": "An inside position is 'special' if its number is bigger than both neighbours. You may add 1 to any number any number of times. First make as many positions special as possible, then use as few additions as possible. Return that number of additions.",
 "idea": "At most (n−1)/2 positions can be special since two neighbours cannot both be peaks. Making position i a peak costs max(0, max(left, right) + 1 − nums[i]) (raise only i). For odd n the peaks are forced at 1,3,5,…; for even n they are 1,3,…,2j−1 then 2j+2,…,n−2 — try every split j with prefix/suffix sums.",
 "input": "[2,1,1,3]",
 "output": "2",
 "notes": [],
 "best": "At most (n−1)/2 positions can be special since two neighbours cannot both be peaks. Making position i a peak costs max(0, max(left, right) + 1 − nums[i]) (raise only i). For odd n the peaks are forced at 1,3,5,…; for even n they are 1,3,…,2j−1 then 2j+2,…,n−2 — try every split j with prefix/suffix sums.",
 "variants": [
  {
   "name": "Alternate peaks, split for even length",
   "code": "class Solution:\n    def minimumIncrease(self, nums):\n        n = len(nums)\n        if n < 3: return 0\n        cost = lambda i: max(0, max(nums[i - 1], nums[i + 1]) + 1 - nums[i])\n        if n % 2 == 1: return sum(cost(i) for i in range(1, n - 1, 2))\n        m = (n - 2) // 2\n        pre = [0]\n        for j in range(1, m + 1): pre.append(pre[-1] + cost(2 * j - 1))\n        suf = [0]\n        for u in range(1, m + 1): suf.append(suf[-1] + cost(n - 2 * u))\n        return min(pre[j] + suf[m - j] for j in range(m + 1))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "At most (n−1)/2 positions can be special since two neighbours cannot both be peaks. Making position i a peak costs max(0, max(left, right) + 1 − nums[i]) (raise only i). For odd n the peaks are forced at 1,3,5,…; for even n they are 1,3,…,2j−1 then 2j+2,…,n−2 — try every split j with prefix/suffix sums.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP choosing exactly m non-adjacent peaks",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumIncrease(self, nums):\n        n = len(nums)\n        if n < 3: return 0\n        m = (n - 1) // 2\n        cost = lambda i: max(0, max(nums[i - 1], nums[i + 1]) + 1 - nums[i])\n        INF = float('inf')\n        @lru_cache(None)\n        def f(i, c):\n            if c == 0: return 0\n            if i > n - 2: return INF\n            return min(f(i + 1, c), cost(i) + f(i + 2, c - 1))\n        return f(1, m)",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "f(i, c) = cheapest way to create c more peaks using positions ≥ i.",
   "frames": [],
   "alt": true
  }
 ]
};
