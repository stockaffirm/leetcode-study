window.PROBLEM = {
 "id": "503",
 "title": "Next Greater Element II",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "For each number find the next bigger one, looking right and wrapping around to the start (the list is circular). [1,2,1] → 2, −1, 2.",
 "idea": "Walk the list twice (indexes 0..2n−1). Keep a stack of positions still waiting for a bigger number; a new number answers every smaller waiting position.",
 "input": "[1, 2, 1]",
 "output": "[2, -1, 2]",
 "notes": [],
 "best": "Walk the list twice (indexes 0..2n−1). Keep a stack of positions still waiting for a bigger number; a new number answers every smaller waiting position.",
 "variants": [
  {
   "name": "Monotonic stack, two laps",
   "code": "class Solution:\n    def nextGreaterElements(self, nums):\n        n = len(nums)\n        ans, st = [-1] * n, []\n        for i in range(2 * n):\n            x = nums[i % n]\n            while st and nums[st[-1]] < x:\n                ans[st.pop()] = x\n            if i < n: st.append(i)\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Walk the list twice (indexes 0..2n−1). Keep a stack of positions still waiting for a bigger number; a new number answers every smaller waiting position.",
   "frames": []
  }
 ]
};
