window.PROBLEM = {
 "id": "3718",
 "title": "Smallest Missing Multiple of K",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[8,2,3,4,6], k=2: 2, 4, 6, 8 are present; 10 is missing → 10.",
 "idea": "Put nums in a set and test k, 2k, 3k … in order; the first multiple not present is the answer.",
 "input": "nums = [8,2,3,4,6], k = 2",
 "output": "10",
 "notes": [],
 "best": "Put nums in a set and test k, 2k, 3k … in order; the first multiple not present is the answer.",
 "variants": [
  {
   "name": "Walk through k, 2k, 3k …",
   "code": "class Solution:\n    def missingMultiple(self, nums, k):\n        s = set(nums)\n        m = k\n        while m in s:\n            m += k\n        return m",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put nums in a set and test k, 2k, 3k … in order; the first multiple not present is the answer.",
   "frames": []
  }
 ]
};
