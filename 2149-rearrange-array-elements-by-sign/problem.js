window.PROBLEM = {
 "id": "2149",
 "title": "Rearrange Array Elements by Sign",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "[3,1,-2,-5,2,-4]: positives go to positions 0, 2, 4 in order (3,1,2) and negatives to 1, 3, 5 (−2,−5,−4) → [3,−2,1,−5,2,−4].",
 "idea": "Equal numbers of positives and negatives must alternate, starting with a positive. Keep two write positions (even slots for positives, odd slots for negatives) and drop each number into its slot.",
 "input": "nums = [3,1,-2,-5,2,-4]",
 "output": "[3,-2,1,-5,2,-4]",
 "notes": [],
 "best": "Equal numbers of positives and negatives must alternate, starting with a positive. Keep two write positions (even slots for positives, odd slots for negatives) and drop each number into its slot.",
 "variants": [
  {
   "name": "Two write positions",
   "code": "class Solution:\n    def rearrangeArray(self, nums):\n        res = [0] * len(nums)\n        p, n = 0, 1\n        for x in nums:\n            if x > 0:\n                res[p] = x\n                p += 2\n            else:\n                res[n] = x\n                n += 2\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Equal numbers of positives and negatives must alternate, starting with a positive. Keep two write positions (even slots for positives, odd slots for negatives) and drop each number into its slot.",
   "frames": []
  }
 ]
};
