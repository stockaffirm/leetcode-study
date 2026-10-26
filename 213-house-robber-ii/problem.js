window.PROBLEM = {
 "id": "213",
 "title": "House Robber II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Houses stand in a circle, so the first and last are neighbours. [2,3,2] → you can't take both 2s, best is 3.",
 "idea": "A circle means you can't use both ends. So solve the straight-line version twice — once without the first house, once without the last — and take the better.",
 "input": "[2, 3, 2]",
 "output": "3",
 "notes": [],
 "best": "A circle means you can't use both ends. So solve the straight-line version twice — once without the first house, once without the last — and take the better.",
 "variants": [
  {
   "name": "Two linear runs",
   "code": "class Solution:\n    def rob(self, nums):\n        def line(a):\n            prev = cur = 0\n            for x in a:\n                prev, cur = cur, max(cur, prev + x)\n            return cur\n        if len(nums) == 1: return nums[0]\n        return max(line(nums[1:]), line(nums[:-1]))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A circle means you can't use both ends. So solve the straight-line version twice — once without the first house, once without the last — and take the better.",
   "frames": []
  }
 ]
};
