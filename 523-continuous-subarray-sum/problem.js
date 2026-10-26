window.PROBLEM = {
 "id": "523",
 "title": "Continuous Subarray Sum",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Is there a subarray of length at least 2 whose sum is a multiple of k?",
 "idea": "Two prefix sums with the same remainder mod k enclose a subarray whose sum is a multiple of k. Remember the first index of each remainder and check the gap is at least 2.",
 "input": "[23,2,4,6,7], k=6",
 "output": "True",
 "notes": [],
 "best": "Two prefix sums with the same remainder mod k enclose a subarray whose sum is a multiple of k. Remember the first index of each remainder and check the gap is at least 2.",
 "variants": [
  {
   "name": "Prefix sums modulo k",
   "code": "class Solution:\n    def checkSubarraySum(self, nums, k):\n        seen = {0: -1}\n        s = 0\n        for i, x in enumerate(nums):\n            s = (s + x) % k\n            if s in seen:\n                if i - seen[s] >= 2: return True\n            else: seen[s] = i\n        return False",
   "time": "O(n)",
   "space": "O(min(n,k))",
   "explain": "Two prefix sums with the same remainder mod k enclose a subarray whose sum is a multiple of k. Remember the first index of each remainder and check the gap is at least 2.",
   "frames": []
  }
 ]
};
