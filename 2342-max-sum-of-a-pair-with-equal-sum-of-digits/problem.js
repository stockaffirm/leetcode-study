window.PROBLEM = {
 "id": "2342",
 "title": "Max Sum of a Pair With Equal Sum of Digits",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Find two numbers whose digits add up to the same total, with the largest possible sum of the two numbers. [18,43,36,13,7] → 36 + 18 = 54 (digit sum 9).",
 "idea": "For each digit-sum remember the largest number seen. A new number with the same digit sum forms a candidate pair with that largest one.",
 "input": "[18, 43, 36, 13, 7]",
 "output": "54",
 "notes": [],
 "best": "For each digit-sum remember the largest number seen. A new number with the same digit sum forms a candidate pair with that largest one.",
 "variants": [
  {
   "name": "Best value seen per digit sum",
   "code": "class Solution:\n    def maximumSum(self, nums):\n        best, ans = {}, -1\n        for x in nums:\n            s = sum(int(c) for c in str(x))\n            if s in best: ans = max(ans, best[s] + x)\n            best[s] = max(best.get(s, 0), x)\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each digit-sum remember the largest number seen. A new number with the same digit sum forms a candidate pair with that largest one.",
   "frames": []
  }
 ]
};
