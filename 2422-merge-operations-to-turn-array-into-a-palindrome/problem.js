window.PROBLEM = {
 "id": "2422",
 "title": "Merge Operations to Turn Array into a Palindrome",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[4,3,2,1,2,3,1]: merge 3+1 on the right, then 1+2 → [4,3,3,4]-style palindrome after 2 merges.",
 "idea": "Compare both ends. If equal, move inward. If the left value is smaller, merge it with its right neighbour (cost 1); otherwise merge the right end with its left neighbour. Merging the smaller side is always the only way to ever make the ends equal.",
 "input": "nums = [4,3,2,1,2,3,1]",
 "output": "2",
 "notes": [],
 "best": "Compare both ends. If equal, move inward. If the left value is smaller, merge it with its right neighbour (cost 1); otherwise merge the right end with its left neighbour. Merging the smaller side is always the only way to ever make the ends equal.",
 "variants": [
  {
   "name": "Two pointers: merge the smaller side",
   "code": "class Solution:\n    def minimumOperations(self, nums):\n        l, r = 0, len(nums) - 1\n        ops = 0\n        while l < r:\n            if nums[l] == nums[r]:\n                l += 1\n                r -= 1\n            elif nums[l] < nums[r]:\n                l += 1\n                nums[l] += nums[l - 1]\n                ops += 1\n            else:\n                r -= 1\n                nums[r] += nums[r + 1]\n                ops += 1\n        return ops",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Compare both ends. If equal, move inward. If the left value is smaller, merge it with its right neighbour (cost 1); otherwise merge the right end with its left neighbour. Merging the smaller side is always the only way to ever make the ends equal.",
   "frames": []
  }
 ]
};
