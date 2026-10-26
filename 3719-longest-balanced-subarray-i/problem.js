window.PROBLEM = {
 "id": "3719",
 "title": "Longest Balanced Subarray I",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
