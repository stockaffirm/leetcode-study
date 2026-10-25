window.PROBLEM = {
 "id": "456",
 "title": "132 Pattern",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "Given a list of numbers, decide whether three positions i < j < k exist with nums[i] < nums[k] < nums[j] (a small, then a big, then a medium number). Example: [3,1,4,2] → True (1, 4, 2).",
 "why": "Is there a triple (i<j<k) with nums[i] < nums[k] < nums[j]? [3,1,4,2] → 1, 4, 2 yes.",
 "idea": "Scan from the right with a decreasing stack, remembering the largest value ever popped (the '2'). If a number smaller than that '2' shows up on the left (the '1'), a pattern exists.",
 "input": "[3, 1, 4, 2]",
 "output": "True",
 "notes": [],
 "best": "Scan from the right with a decreasing stack, remembering the largest value ever popped (the '2'). If a number smaller than that '2' shows up on the left (the '1'), a pattern exists.",
 "variants": [
  {
   "name": "Monotonic stack from the right",
   "code": "class Solution:\n    def find132pattern(self, nums):\n        third = float('-inf')\n        st = []\n        for x in reversed(nums):\n            if x < third: return True\n            while st and st[-1] < x: third = st.pop()\n            st.append(x)\n        return False",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Scan from the right with a decreasing stack, remembering the largest value ever popped (the '2'). If a number smaller than that '2' shows up on the left (the '1'), a pattern exists.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix minimum + scan",
   "tag": "Brute force",
   "code": "class Solution:\n    def find132pattern(self, nums):\n        n = len(nums)\n        left_min = nums[0]\n        for j in range(1, n):\n            for k in range(j + 1, n):\n                if left_min < nums[k] < nums[j]: return True\n            left_min = min(left_min, nums[j])\n        return False",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For every middle value look to the right for a number between the left minimum and the middle.",
   "frames": [],
   "alt": true
  }
 ]
};
