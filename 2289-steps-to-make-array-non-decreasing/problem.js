window.PROBLEM = {
 "id": "2289",
 "title": "Steps to Make Array Non-decreasing",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "[5,3,4,4,7,3,6,11,8,5,11]: in each step every number smaller than its left neighbour is removed; after 3 steps the array is non-decreasing.",
 "idea": "A number is removed after (1 + the longest time among the numbers it swallows) steps. Keep a decreasing stack of (value, steps). For a new number pop smaller-or-equal entries and take the maximum of their steps; if a bigger number remains on the stack the new one dies after max + 1 steps, otherwise it never dies (0).",
 "input": "nums = [5,3,4,4,7,3,6,11,8,5,11]",
 "output": "3",
 "notes": [],
 "best": "A number is removed after (1 + the longest time among the numbers it swallows) steps. Keep a decreasing stack of (value, steps). For a new number pop smaller-or-equal entries and take the maximum of their steps; if a bigger number remains on the stack the new one dies after max + 1 steps, otherwise it never dies (0).",
 "variants": [
  {
   "name": "Monotonic stack with step counts",
   "code": "class Solution:\n    def totalSteps(self, nums):\n        st = []\n        res = 0\n        for x in nums:\n            steps = 0\n            while st and st[-1][0] <= x:\n                steps = max(steps, st.pop()[1])\n            steps = steps + 1 if st else 0\n            st.append((x, steps))\n            res = max(res, steps)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A number is removed after (1 + the longest time among the numbers it swallows) steps. Keep a decreasing stack of (value, steps). For a new number pop smaller-or-equal entries and take the maximum of their steps; if a bigger number remains on the stack the new one dies after max + 1 steps, otherwise it never dies (0).",
   "frames": []
  }
 ]
};
