window.PROBLEM = {
 "id": "41",
 "title": "First Missing Positive",
 "level": "Hard",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
