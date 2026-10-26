window.PROBLEM = {
 "id": "974",
 "title": "Subarray Sums Divisible by K",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Count the subarrays whose sum is divisible by k.",
 "idea": "Two prefix sums with the same remainder (mod k) enclose a subarray divisible by k. Count how many earlier prefixes have each remainder.",
 "input": "[4,5,0,-2,-3,1], k=5",
 "output": "7",
 "notes": [],
 "best": "Two prefix sums with the same remainder (mod k) enclose a subarray divisible by k. Count how many earlier prefixes have each remainder.",
 "variants": [
  {
   "name": "Prefix sums by remainder",
   "code": "class Solution:\n    def subarraysDivByK(self, nums, k):\n        cnt = defaultdict(int)\n        cnt[0] = 1\n        s = ans = 0\n        for x in nums:\n            s = (s + x) % k\n            ans += cnt[s]\n            cnt[s] += 1\n        return ans",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Two prefix sums with the same remainder (mod k) enclose a subarray divisible by k. Count how many earlier prefixes have each remainder.",
   "frames": []
  }
 ]
};
