window.PROBLEM = {
 "id": "41",
 "title": "First Missing Positive",
 "level": "Hard",
 "topic": "Array / String",
 "question": "Given a list of whole numbers nums (positive, zero or negative, with repeats allowed), return the smallest POSITIVE whole number that does NOT appear in it. Try to use only a fixed amount of extra memory and a single pass or two over the list. Example: [3,4,-1,1] → 1 is there, 2 is missing → 2.",
 "why": "What is the smallest positive whole number NOT in the list? [3,4,-1,1] → 1 and 3,4 are there, 2 is not → 2.",
 "idea": "The answer is between 1 and n+1. Swap every number x (1 ≤ x ≤ n) into position x−1 using the list itself as a table; the first slot holding the wrong number reveals the missing one.",
 "input": "[3, 4, -1, 1]",
 "output": "2",
 "notes": [],
 "best": "The answer is between 1 and n+1. Swap every number x (1 ≤ x ≤ n) into position x−1 using the list itself as a table; the first slot holding the wrong number reveals the missing one.",
 "variants": [
  {
   "name": "Put each number in its own slot",
   "code": "class Solution:\n    def firstMissingPositive(self, nums):\n        n = len(nums)\n        for i in range(n):\n            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:\n                j = nums[i] - 1\n                nums[i], nums[j] = nums[j], nums[i]\n        for i in range(n):\n            if nums[i] != i + 1: return i + 1\n        return n + 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The answer is between 1 and n+1. Swap every number x (1 ≤ x ≤ n) into position x−1 using the list itself as a table; the first slot holding the wrong number reveals the missing one.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set lookup",
   "tag": "Alternative",
   "code": "class Solution:\n    def firstMissingPositive(self, nums):\n        s = set(nums)\n        i = 1\n        while i in s: i += 1\n        return i",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put everything in a set and count up from 1 until a number is missing — simple but uses extra memory.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Sign marking",
   "tag": "Alternative",
   "code": "class Solution:\n    def firstMissingPositive(self, nums):\n        n = len(nums)\n        for i in range(n):\n            if nums[i] <= 0 or nums[i] > n: nums[i] = n + 1\n        for i in range(n):\n            v = abs(nums[i])\n            if v <= n and nums[v - 1] > 0: nums[v - 1] = -nums[v - 1]\n        for i in range(n):\n            if nums[i] > 0: return i + 1\n        return n + 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Mark 'number x is present' by making nums[x−1] negative, after first neutralising non-positive values.",
   "frames": [],
   "alt": true
  }
 ]
};
