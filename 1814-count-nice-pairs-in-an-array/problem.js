window.PROBLEM = {
 "id": "1814",
 "title": "Count Nice Pairs in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "For a number x let rev(x) be x with its digits reversed (so rev(120) = 21). A pair of positions (i, j) with i < j is 'nice' if nums[i] + rev(nums[j]) == nums[j] + rev(nums[i]). Return the number of nice pairs, modulo 1,000,000,007 (the remainder after dividing by that number). Example: [42,11,1,97] → (0,3) and (1,2) are nice → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def countNicePairs(self, nums):\n        count = 0\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                if nums[i] + int(str(nums[j])[::-1]) == nums[j] + int(str(nums[i])[::-1]): count += 1\n        return count % (10 ** 9 + 7)",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Test the original equation for every pair.",
   "frames": [],
   "alt": true
  }
 ]
};
