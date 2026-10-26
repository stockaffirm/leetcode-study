window.PROBLEM = {
 "id": "2972",
 "title": "Count the Number of Incremovable Subarrays II",
 "level": "Hard",
 "topic": "Two Pointers",
 "question": "Same question for long lists: count the non-empty subarrays whose removal leaves a strictly increasing list (an empty list counts as increasing). Example: [6,5,7,8] → 7.",
 "why": "The same question for long arrays: count the non-empty subarrays whose removal leaves a strictly increasing array.",
 "idea": "Same two-pointer idea in O(n): the increasing prefix ends at i; walk the increasing suffix from the right, pulling i back while nums[i] ≥ nums[j], and add i + 2 choices each time.",
 "input": "[6,5,7,8]",
 "output": "7",
 "notes": [],
 "best": "Same two-pointer idea in O(n): the increasing prefix ends at i; walk the increasing suffix from the right, pulling i back while nums[i] ≥ nums[j], and add i + 2 choices each time.",
 "variants": [
  {
   "name": "Prefix and suffix two pointers",
   "code": "class Solution:\n    def incremovableSubarrayCount(self, nums):\n        n = len(nums)\n        i = 0\n        while i + 1 < n and nums[i] < nums[i + 1]: i += 1\n        if i == n - 1: return n * (n + 1) // 2\n        res = i + 2\n        j = n - 1\n        while j >= 0 and (j == n - 1 or nums[j] < nums[j + 1]):\n            while i >= 0 and nums[i] >= nums[j]: i -= 1\n            res += i + 2\n            j -= 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Same two-pointer idea in O(n): the increasing prefix ends at i; walk the increasing suffix from the right, pulling i back while nums[i] ≥ nums[j], and add i + 2 choices each time.",
   "frames": [],
   "tag": "Optimal"
  }
 ]
};
