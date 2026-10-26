window.PROBLEM = {
 "id": "31",
 "title": "Next Permutation",
 "level": "Medium",
 "topic": "Array / String",
 "question": "A permutation is one arrangement of a list of numbers. If you list all arrangements of the same numbers in dictionary order (compare the first position where two arrangements differ), the 'next permutation' is the one that comes right after the current one. Given the list nums, change it IN PLACE into its next permutation; if it is already the very last arrangement, change it into the first (smallest) one. Example: [1,2,3] → [1,3,2]; [3,2,1] → [1,2,3].",
 "why": "Rearrange the list into the next bigger arrangement (like the next word in a dictionary); if it is already the biggest, make it the smallest. [1,2,3] → [1,3,2].",
 "idea": "From the right, find the first number smaller than its right neighbour (the dip). Swap it with the next-larger number to its right, then reverse everything after the dip so the tail is as small as possible.",
 "input": "[1, 2, 3]",
 "output": "[1, 3, 2]",
 "notes": [],
 "best": "From the right, find the first number smaller than its right neighbour (the dip). Swap it with the next-larger number to its right, then reverse everything after the dip so the tail is as small as possible.",
 "variants": [
  {
   "name": "Find the dip, swap, reverse the tail",
   "code": "class Solution:\n    def nextPermutation(self, nums):\n        i = len(nums) - 2\n        while i >= 0 and nums[i] >= nums[i + 1]: i -= 1\n        if i >= 0:\n            j = len(nums) - 1\n            while nums[j] <= nums[i]: j -= 1\n            nums[i], nums[j] = nums[j], nums[i]\n        nums[i + 1:] = reversed(nums[i + 1:])",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "From the right, find the first number smaller than its right neighbour (the dip). Swap it with the next-larger number to its right, then reverse everything after the dip so the tail is as small as possible.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "List all permutations",
   "tag": "Brute force",
   "code": "class Solution:\n    def nextPermutation(self, nums):\n        perms = sorted(set(permutations(nums)))\n        cur = tuple(nums)\n        i = perms.index(cur)\n        nums[:] = perms[(i + 1) % len(perms)]",
   "time": "O(n!·n)",
   "space": "O(n!)",
   "explain": "Generate every distinct permutation in sorted order and take the one after the current.",
   "frames": [],
   "alt": true
  }
 ]
};
