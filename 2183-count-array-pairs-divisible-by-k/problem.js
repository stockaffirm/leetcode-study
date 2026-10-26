window.PROBLEM = {
 "id": "2183",
 "title": "Count Array Pairs Divisible by K",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Count the pairs of indices i<j for which nums[i] × nums[j] is divisible by k. Example: [1,2,3,4,5], k=2 → 7.",
 "why": "[1,2,3,4,5], k=2: pairs containing an even number work: 7 of them.",
 "idea": "nums[i]·nums[j] is divisible by k exactly when gcd(nums[i], k) · gcd(nums[j], k) is divisible by k. k has few divisors, so count the earlier numbers by their gcd with k and, for each new number, add the counts of the gcd classes that pair with it.",
 "input": "nums = [1,2,3,4,5], k = 2",
 "output": "7",
 "notes": [],
 "best": "nums[i]·nums[j] is divisible by k exactly when gcd(nums[i], k) · gcd(nums[j], k) is divisible by k. k has few divisors, so count the earlier numbers by their gcd with k and, for each new number, add the counts of the gcd classes that pair with it.",
 "variants": [
  {
   "name": "Group by gcd with k",
   "code": "class Solution:\n    def countPairs(self, nums, k):\n        cnt = Counter()\n        res = 0\n        for x in nums:\n            g = gcd(x, k)\n            for g2, c in cnt.items():\n                if g * g2 % k == 0:\n                    res += c\n            cnt[g] += 1\n        return res",
   "time": "O(n·d(k))",
   "space": "O(d(k))",
   "explain": "nums[i]·nums[j] is divisible by k exactly when gcd(nums[i], k) · gcd(nums[j], k) is divisible by k. k has few divisors, so count the earlier numbers by their gcd with k and, for each new number, add the counts of the gcd classes that pair with it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def countPairs(self, nums, k):\n        n = len(nums)\n        return sum(nums[i] * nums[j] % k == 0 for i in range(n) for j in range(i + 1, n))",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Multiply every pair and test divisibility.",
   "frames": [],
   "alt": true
  }
 ]
};
