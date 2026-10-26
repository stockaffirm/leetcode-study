window.PROBLEM = {
 "id": "503",
 "title": "Next Greater Element II",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "A list nums is circular: after its last number the list continues with its first number again. For every number, find the first strictly larger number that comes after it when you move to the right (wrapping around if needed), or -1 if there is none. Return the answers as a list. Example: [1,2,1] → the first 1 sees 2 → 2; the 2 never sees a bigger number → −1; the last 1 wraps around and sees 2 → [2,-1,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Brute force",
   "tag": "Brute force",
   "code": "class Solution:\n    def nextGreaterElements(self, nums):\n        n = len(nums)\n        ans = []\n        for i in range(n):\n            found = -1\n            for d in range(1, n):\n                if nums[(i + d) % n] > nums[i]:\n                    found = nums[(i + d) % n]\n                    break\n            ans.append(found)\n        return ans",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each number scan forward (wrapping) up to n−1 positions.",
   "frames": [],
   "alt": true
  }
 ]
};
