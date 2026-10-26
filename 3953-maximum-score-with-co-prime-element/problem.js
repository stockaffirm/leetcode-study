window.PROBLEM = {
 "id": "3953",
 "title": "Maximum Score With Co-Prime Element",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "You are given a list nums and a number maxVal. You may change any element to any positive whole number up to maxVal; each change costs 1. Two numbers are co-prime if their only common divisor is 1. After the changes, you must pick one index i whose value is co-prime with EVERY other element. The score is (the final value of nums[i]) minus (the total number of elements you changed). Return the maximum possible score. Example: nums [3,4,6], maxVal 5 → change 6 to 5 (cost 1) and pick it: 5 is co-prime with 3 and 4 → score 5 − 1 = 4.",
 "why": "Pick one element and make it co-prime with all others. You may change values (each change costs 1) to anything up to maxVal. Score = chosen value − total cost.",
 "idea": "For every candidate final value v count how many numbers are NOT co-prime with it (inclusion–exclusion with the Möbius function over multiples). Those must each be changed (to 1); one extra change may turn some element into v. Take the best v − cost.",
 "input": "nums [3, 4, 6], maxVal=5",
 "output": "4",
 "notes": [],
 "best": "For every candidate final value v count how many numbers are NOT co-prime with it (inclusion–exclusion with the Möbius function over multiples). Those must each be changed (to 1); one extra change may turn some element into v. Take the best v − cost.",
 "variants": [
  {
   "name": "Möbius counting of co-prime numbers",
   "code": "class Solution:\n    def maxScore(self, nums, maxVal):\n        n = len(nums)\n        M = max(max(nums), maxVal)\n        freq = [0] * (M + 1)\n        for x in nums: freq[x] += 1\n        cnt = [0] * (M + 1)\n        for d in range(1, M + 1):\n            for m in range(d, M + 1, d): cnt[d] += freq[m]\n        mu = [1] * (M + 1)\n        isp = [True] * (M + 1)\n        for p in range(2, M + 1):\n            if isp[p]:\n                for m in range(p, M + 1, p):\n                    if m > p: isp[m] = False\n                    mu[m] = -mu[m]\n                for m in range(p * p, M + 1, p * p): mu[m] = 0\n        coprime = [0] * (M + 1)\n        for d in range(1, M + 1):\n            if mu[d]:\n                for m in range(d, M + 1, d): coprime[m] += mu[d] * cnt[d]\n        best = float('-inf')\n        for v in range(1, maxVal + 1):\n            bad = n - coprime[v]\n            cost = 1 if bad == 0 else bad\n            if freq[v]: cost = min(cost, bad - (1 if v > 1 else 0))\n            best = max(best, v - cost)\n        return best",
   "time": "O(M log M)",
   "space": "O(M)",
   "explain": "For every candidate final value v count how many numbers are NOT co-prime with it (inclusion–exclusion with the Möbius function over multiples). Those must each be changed (to 1); one extra change may turn some element into v. Take the best v − cost.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every element and value",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxScore(self, nums, maxVal):\n        n, best = len(nums), float('-inf')\n        for i in range(n):\n            for v in range(1, maxVal + 1):\n                cost = (v != nums[i]) + sum(1 for j in range(n) if j != i and gcd(nums[j], v) > 1)\n                best = max(best, v - cost)\n        return best",
   "time": "O(n²·maxVal)",
   "space": "O(1)",
   "explain": "For every index and every final value count the changes needed directly (small inputs only).",
   "frames": [],
   "alt": true
  }
 ]
};
