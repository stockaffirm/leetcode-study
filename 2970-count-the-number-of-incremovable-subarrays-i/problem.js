window.PROBLEM = {
 "id": "2970",
 "title": "Count the Number of Incremovable Subarrays I",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "Given a list of positive integers, a subarray (consecutive numbers) is 'incremovable' if removing it leaves a strictly increasing list (the empty list also counts as increasing). Count the non-empty incremovable subarrays. Example: [6,5,7,8] → 7.",
 "why": "Count the non-empty subarrays that can be removed so that the numbers left over are strictly increasing.",
 "idea": "Let the increasing prefix end at i. Removing a part that starts at or before i+1 keeps a prefix of length 0..i+1. For each increasing suffix start j, shrink the prefix pointer until it is smaller than nums[j] and count the choices.",
 "input": "[6,5,7,8]",
 "output": "7",
 "notes": [],
 "best": "Let the increasing prefix end at i. Removing a part that starts at or before i+1 keeps a prefix of length 0..i+1. For each increasing suffix start j, shrink the prefix pointer until it is smaller than nums[j] and count the choices.",
 "variants": [
  {
   "name": "Prefix and suffix two pointers",
   "code": "class Solution:\n    def incremovableSubarrayCount(self, nums):\n        n = len(nums)\n        i = 0\n        while i + 1 < n and nums[i] < nums[i + 1]: i += 1\n        if i == n - 1: return n * (n + 1) // 2\n        res = i + 2\n        j = n - 1\n        while j >= 0 and (j == n - 1 or nums[j] < nums[j + 1]):\n            while i >= 0 and nums[i] >= nums[j]: i -= 1\n            res += i + 2\n            j -= 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Let the increasing prefix end at i. Removing a part that starts at or before i+1 keeps a prefix of length 0..i+1. For each increasing suffix start j, shrink the prefix pointer until it is smaller than nums[j] and count the choices.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every subarray",
   "tag": "Brute force",
   "code": "class Solution:\n    def incremovableSubarrayCount(self, nums):\n        n = len(nums)\n        count = 0\n        for i in range(n):\n            for j in range(i, n):\n                rest = nums[:i] + nums[j + 1:]\n                if all(a < b for a, b in zip(rest, rest[1:])): count += 1\n        return count",
   "time": "O(n³)",
   "space": "O(n)",
   "explain": "Remove each non-empty subarray and test whether the rest is strictly increasing.",
   "frames": [],
   "alt": true
  }
 ]
};
