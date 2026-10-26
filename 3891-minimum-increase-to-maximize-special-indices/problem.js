window.PROBLEM = {
 "id": "3891",
 "title": "Minimum Increase to Maximize Special Indices",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
