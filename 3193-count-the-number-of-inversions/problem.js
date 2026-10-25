window.PROBLEM = {
 "id": "3193",
 "title": "Count the Number of Inversions",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Count permutations of 0 … n−1 such that, for each requirement [end, cnt], the first end+1 elements contain exactly cnt inversions (pairs i<j with perm[i] > perm[j]). Return the count modulo 1 000 000 007. Example: n=3, requirements [[2,2],[0,0]] → 2.",
 "why": "n=3, prefix of 3 must have 2 inversions and the first element 0 inversions: [2,0,1] and [1,2,0] → 2.",
 "idea": "Build the permutation by inserting the next element's rank: the i-th element (0-based) adds anywhere from 0 to i new inversions. dp[j] = ways with j inversions so far; the next step is a sliding-window sum of the previous dp over the last i+1 values. When a requirement ends at i, keep only the required inversion count.",
 "input": "n = 3, requirements = [[2,2],[0,0]]",
 "output": "2",
 "notes": [],
 "best": "Build the permutation by inserting the next element's rank: the i-th element (0-based) adds anywhere from 0 to i new inversions. dp[j] = ways with j inversions so far; the next step is a sliding-window sum of the previous dp over the last i+1 values. When a requirement ends at i, keep only the required inversion count.",
 "variants": [
  {
   "name": "DP on prefix length and inversion count",
   "code": "class Solution:\n    def numberOfPermutations(self, n, requirements):\n        MOD = 10**9 + 7\n        req = {e: c for e, c in requirements}\n        if req.get(0, 0) != 0:\n            return 0\n        M = max(req.values())\n        dp = [1] + [0] * M\n        for i in range(1, n):\n            pre = [0]\n            for v in dp:\n                pre.append((pre[-1] + v) % MOD)\n            new = [0] * (M + 1)\n            for j in range(M + 1):\n                new[j] = (pre[j + 1] - pre[max(0, j - i)]) % MOD\n            if i in req:\n                keep = new[req[i]]\n                new = [0] * (M + 1)\n                new[req[i]] = keep\n            dp = new\n        return dp[req[n - 1]] % MOD",
   "time": "O(n · maxCnt)",
   "space": "O(maxCnt)",
   "explain": "Build the permutation by inserting the next element's rank: the i-th element (0-based) adds anywhere from 0 to i new inversions. dp[j] = ways with j inversions so far; the next step is a sliding-window sum of the previous dp over the last i+1 values. When a requirement ends at i, keep only the required inversion count.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every permutation",
   "tag": "Brute force",
   "code": "class Solution:\n    def numberOfPermutations(self, n, requirements):\n        def inv(a):\n            return sum(a[i] > a[j] for i in range(len(a)) for j in range(i + 1, len(a)))\n        res = 0\n        for perm in permutations(range(n)):\n            if all(inv(perm[:e + 1]) == c for e, c in requirements):\n                res += 1\n        return res % (10**9 + 7)",
   "time": "O(n!·n²)",
   "space": "O(n)",
   "explain": "Only for tiny n: enumerate all permutations and test each requirement by counting inversions of the prefix.",
   "frames": [],
   "alt": true
  }
 ]
};
