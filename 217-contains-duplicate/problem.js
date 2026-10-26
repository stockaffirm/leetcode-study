window.PROBLEM = {
 "id": "217",
 "title": "Contains Duplicate",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Given a list of numbers nums, return true if any value appears at least twice, and false if every value is different. Example: [1,2,3,1] → 1 appears twice → true.",
 "why": "Does any value appear at least twice? [1,2,3,1] → yes.",
 "idea": "Remember what you have seen in a set; the first number already in the set is a duplicate.",
 "input": "[1, 2, 3, 1]",
 "output": "True",
 "notes": [],
 "best": "Remember what you have seen in a set; the first number already in the set is a duplicate.",
 "variants": [
  {
   "name": "Set of seen values",
   "code": "class Solution:\n    def containsDuplicate(self, nums):\n        seen = set()\n        for x in nums:\n            if x in seen: return True\n            seen.add(x)\n        return False",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Remember what you have seen in a set; the first number already in the set is a duplicate.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort and compare neighbours",
   "tag": "Alternative",
   "code": "class Solution:\n    def containsDuplicate(self, nums):\n        nums = sorted(nums)\n        for i in range(1, len(nums)):\n            if nums[i] == nums[i - 1]: return True\n        return False",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "After sorting, equal values sit next to each other.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Compare set size",
   "tag": "Pythonic",
   "code": "class Solution:\n    def containsDuplicate(self, nums):\n        return len(set(nums)) != len(nums)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A set removes duplicates, so it is shorter than the list if there were any.",
   "frames": [],
   "alt": true
  }
 ]
};
