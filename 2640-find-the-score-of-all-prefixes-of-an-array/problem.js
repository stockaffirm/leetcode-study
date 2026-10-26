window.PROBLEM = {
 "id": "2640",
 "title": "Find the Score of All Prefixes of an Array",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[2,3,7,5,10]: conversion values 4, 10, 24, 12→ (5 + max 7 = 12), 20; prefix scores 4, 10, 24, 36, 56.",
 "idea": "The conversion value of an element is itself plus the largest value seen so far (including itself). The score of a prefix is the sum of conversion values, so keep a running maximum and a running total.",
 "input": "nums = [2,3,7,5,10]",
 "output": "[4, 10, 24, 36, 56]",
 "notes": [],
 "best": "The conversion value of an element is itself plus the largest value seen so far (including itself). The score of a prefix is the sum of conversion values, so keep a running maximum and a running total.",
 "variants": [
  {
   "name": "Running maximum, running total",
   "code": "class Solution:\n    def findPrefixScore(self, nums):\n        mx = total = 0\n        res = []\n        for x in nums:\n            mx = max(mx, x)\n            total += x + mx\n            res.append(total)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The conversion value of an element is itself plus the largest value seen so far (including itself). The score of a prefix is the sum of conversion values, so keep a running maximum and a running total.",
   "frames": []
  }
 ]
};
