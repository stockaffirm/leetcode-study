window.PROBLEM = {
 "id": "456",
 "title": "132 Pattern",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
