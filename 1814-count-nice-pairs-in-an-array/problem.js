window.PROBLEM = {
 "id": "1814",
 "title": "Count Nice Pairs in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "A pair (i, j) is 'nice' if nums[i] + rev(nums[j]) = nums[j] + rev(nums[i]), where rev reverses the digits. Count nice pairs.",
 "idea": "Rearrange the equation: nums[i] − rev(nums[i]) = nums[j] − rev(nums[j]). Count how many earlier numbers share the same 'x − rev(x)' value using a dictionary.",
 "input": "[42, 11, 1, 97]",
 "output": "2",
 "notes": [],
 "best": "Rearrange the equation: nums[i] − rev(nums[i]) = nums[j] − rev(nums[j]). Count how many earlier numbers share the same 'x − rev(x)' value using a dictionary.",
 "variants": [
  {
   "name": "Group by x − reverse(x)",
   "code": "class Solution:\n    def countNicePairs(self, nums):\n        MOD = 10 ** 9 + 7\n        seen, count = Counter(), 0\n        for x in nums:\n            key = x - int(str(x)[::-1])\n            count += seen[key]\n            seen[key] += 1\n        return count % MOD",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Rearrange the equation: nums[i] − rev(nums[i]) = nums[j] − rev(nums[j]). Count how many earlier numbers share the same 'x − rev(x)' value using a dictionary.",
   "frames": []
  }
 ]
};
