window.PROBLEM = {
 "id": "2970",
 "title": "Count the Number of Incremovable Subarrays I",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
