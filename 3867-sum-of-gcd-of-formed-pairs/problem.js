window.PROBLEM = {
 "id": "3867",
 "title": "Sum of GCD of Formed Pairs",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[2,6,4] → prefixGcd [2,6,2] → sorted [2,2,6] → gcd(2,6) = 2.",
 "idea": "prefixGcd[i] = gcd(nums[i], maximum of nums[0..i]). Sort it, pair the smallest with the largest, the second smallest with the second largest, and so on (the middle element of an odd list is ignored); add up the gcd of every pair.",
 "input": "nums = [2,6,4]",
 "output": "2",
 "notes": [],
 "best": "prefixGcd[i] = gcd(nums[i], maximum of nums[0..i]). Sort it, pair the smallest with the largest, the second smallest with the second largest, and so on (the middle element of an odd list is ignored); add up the gcd of every pair.",
 "variants": [
  {
   "name": "Prefix-max gcds, sort, pair the ends",
   "code": "class Solution:\n    def gcdSum(self, nums):\n        prefix = []\n        best = 0\n        for x in nums:\n            best = max(best, x)\n            prefix.append(gcd(x, best))\n        prefix.sort()\n        return sum(gcd(prefix[i], prefix[-1 - i]) for i in range(len(prefix) // 2))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "prefixGcd[i] = gcd(nums[i], maximum of nums[0..i]). Sort it, pair the smallest with the largest, the second smallest with the second largest, and so on (the middle element of an odd list is ignored); add up the gcd of every pair.",
   "frames": []
  }
 ]
};
