window.PROBLEM = {
 "id": "2441",
 "title": "Largest Positive Integer That Exists With Its Negative",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[-1,2,-3,3] → 3 (and −3 both exist) → 3.",
 "idea": "Put all numbers in a set. For each positive number whose negative is also in the set keep the maximum; return −1 if there is none.",
 "input": "nums = [-1,2,-3,3]",
 "output": "3",
 "notes": [],
 "best": "Put all numbers in a set. For each positive number whose negative is also in the set keep the maximum; return −1 if there is none.",
 "variants": [
  {
   "name": "Set lookup of the negative",
   "code": "class Solution:\n    def findMaxK(self, nums):\n        seen = set(nums)\n        return max((x for x in nums if x > 0 and -x in seen), default=-1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put all numbers in a set. For each positive number whose negative is also in the set keep the maximum; return −1 if there is none.",
   "frames": []
  }
 ]
};
