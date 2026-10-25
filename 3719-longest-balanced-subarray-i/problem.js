window.PROBLEM = {
 "id": "3719",
 "title": "Longest Balanced Subarray I",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A subarray is balanced if it contains the same number of distinct even values as distinct odd values. Return the length of the longest balanced subarray. Example: [2,5,4,3] → 4.",
 "why": "[2,5,4,3]: distinct evens {2,4} and distinct odds {5,3} are equal in number → length 4.",
 "idea": "A subarray is balanced when the number of distinct even values equals the number of distinct odd values. For each start index extend to the right, keeping two sets (distinct evens and distinct odds); whenever the sizes match, update the best length.",
 "input": "nums = [2,5,4,3]",
 "output": "4",
 "notes": [],
 "best": "A subarray is balanced when the number of distinct even values equals the number of distinct odd values. For each start index extend to the right, keeping two sets (distinct evens and distinct odds); whenever the sizes match, update the best length.",
 "variants": [
  {
   "name": "Extend each start and compare distinct evens/odds",
   "code": "class Solution:\n    def longestBalanced(self, nums):\n        best = 0\n        for i in range(len(nums)):\n            even, odd = set(), set()\n            for j in range(i, len(nums)):\n                (even if nums[j] % 2 == 0 else odd).add(nums[j])\n                if len(even) == len(odd):\n                    best = max(best, j - i + 1)\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A subarray is balanced when the number of distinct even values equals the number of distinct odd values. For each start index extend to the right, keeping two sets (distinct evens and distinct odds); whenever the sizes match, update the best length.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count distinct with dictionaries",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestBalanced(self, nums):\n        best = 0\n        n = len(nums)\n        for i in range(n):\n            ev, od = {}, {}\n            for j in range(i, n):\n                d = ev if nums[j] % 2 == 0 else od\n                d[nums[j]] = 1\n                if len(ev) == len(od):\n                    best = max(best, j - i + 1)\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Maintain counts of distinct even and odd values with two dictionaries.",
   "frames": [],
   "alt": true
  }
 ]
};
