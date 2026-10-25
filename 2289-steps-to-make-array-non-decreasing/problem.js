window.PROBLEM = {
 "id": "2289",
 "title": "Steps to Make Array Non-decreasing",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "In one step remove every number that is smaller than the number just before it (all removals happen at the same time). Return the number of steps until the array is non-decreasing. Example: [5,3,4,4,7,3,6,11,8,5,11] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate every step",
   "tag": "Brute force",
   "code": "class Solution:\n    def totalSteps(self, nums):\n        a = list(nums)\n        steps = 0\n        while True:\n            nxt = [a[0]] + [a[i] for i in range(1, len(a)) if a[i - 1] <= a[i]]\n            if len(nxt) == len(a):\n                return steps\n            a = nxt\n            steps += 1",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Remove all numbers that are smaller than their left neighbour, count one step, and repeat.",
   "frames": [],
   "alt": true
  }
 ]
};
