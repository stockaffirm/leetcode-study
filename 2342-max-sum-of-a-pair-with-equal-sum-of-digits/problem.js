window.PROBLEM = {
 "id": "2342",
 "title": "Max Sum of a Pair With Equal Sum of Digits",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Given a list nums of positive whole numbers, find two numbers at different positions whose digits add up to the same total (for example 18 and 36 both have digit sum 9), and return the LARGEST possible sum of such a pair. Return -1 if no two numbers have the same digit sum. Example: [18,43,36,13,7] → 18 and 36 (digit sum 9) → 54; 43 and 7 (digit sum 7) → 50 → answer 54.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group, sort, take top two",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumSum(self, nums):\n        groups = defaultdict(list)\n        for x in nums: groups[sum(map(int, str(x)))].append(x)\n        ans = -1\n        for g in groups.values():\n            if len(g) > 1:\n                g.sort()\n                ans = max(ans, g[-1] + g[-2])\n        return ans",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Group numbers by digit sum; in each group of two or more add the two largest.",
   "frames": [],
   "alt": true
  }
 ]
};
