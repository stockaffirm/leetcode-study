window.PROBLEM = {
 "id": "2892",
 "title": "Minimizing Array After Replacing Pairs With Their Product",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[2,3,3,7,3,5], k=20: [2·3·3=18],[7·3=21 too big → 7],[3·5=15] → 3 groups.",
 "idea": "A zero makes everything collapse to one number. Otherwise scan left to right keeping the running product; extend it while the product stays ≤ k, else start a new group. Merging as early as possible never hurts.",
 "input": "nums = [2,3,3,7,3,5], k = 20",
 "output": "3",
 "notes": [],
 "best": "A zero makes everything collapse to one number. Otherwise scan left to right keeping the running product; extend it while the product stays ≤ k, else start a new group. Merging as early as possible never hurts.",
 "variants": [
  {
   "name": "Greedily merge while the product stays ≤ k",
   "code": "class Solution:\n    def minArrayLength(self, nums, k):\n        if 0 in nums:\n            return 1\n        groups = 1\n        cur = nums[0]\n        for x in nums[1:]:\n            if cur * x <= k:\n                cur *= x\n            else:\n                groups += 1\n                cur = x\n        return groups",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A zero makes everything collapse to one number. Otherwise scan left to right keeping the running product; extend it while the product stays ≤ k, else start a new group. Merging as early as possible never hurts.",
   "frames": []
  }
 ]
};
