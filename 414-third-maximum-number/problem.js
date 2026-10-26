window.PROBLEM = {
 "id": "414",
 "title": "Third Maximum Number",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Find the third largest DIFFERENT value; if there are fewer than three different values, return the largest. [2,2,3,1] → 1.",
 "idea": "Keep three slots (1st, 2nd, 3rd largest). For each number skip repeats and slide it into the right slot, pushing smaller ones down.",
 "input": "[2, 2, 3, 1]",
 "output": "1",
 "notes": [],
 "best": "Keep three slots (1st, 2nd, 3rd largest). For each number skip repeats and slide it into the right slot, pushing smaller ones down.",
 "variants": [
  {
   "name": "Track the top three distinct values",
   "code": "class Solution:\n    def thirdMax(self, nums):\n        top = [None, None, None]\n        for x in nums:\n            if x in top: continue\n            if top[0] is None or x > top[0]: top = [x, top[0], top[1]]\n            elif top[1] is None or x > top[1]: top = [top[0], x, top[1]]\n            elif top[2] is None or x > top[2]: top[2] = x\n        return top[2] if top[2] is not None else top[0]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep three slots (1st, 2nd, 3rd largest). For each number skip repeats and slide it into the right slot, pushing smaller ones down.",
   "frames": []
  }
 ]
};
