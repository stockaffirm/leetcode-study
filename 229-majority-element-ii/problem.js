window.PROBLEM = {
 "id": "229",
 "title": "Majority Element II",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Find every number that appears MORE than a third of the time.",
 "idea": "At most two numbers can do that. Keep two candidate numbers with counters (Boyer–Moore): a different number cancels one vote from each. Then verify the survivors with a real count.",
 "input": "[3, 2, 3]",
 "output": "[3]",
 "notes": [],
 "best": "At most two numbers can do that. Keep two candidate numbers with counters (Boyer–Moore): a different number cancels one vote from each. Then verify the survivors with a real count.",
 "variants": [
  {
   "name": "Boyer-Moore with two candidates",
   "code": "class Solution:\n    def majorityElement(self, nums):\n        c1 = c2 = None\n        n1 = n2 = 0\n        for x in nums:\n            if x == c1: n1 += 1\n            elif x == c2: n2 += 1\n            elif n1 == 0: c1, n1 = x, 1\n            elif n2 == 0: c2, n2 = x, 1\n            else:\n                n1 -= 1\n                n2 -= 1\n        return [c for c in (c1, c2) if c is not None and nums.count(c) > len(nums) // 3]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "At most two numbers can do that. Keep two candidate numbers with counters (Boyer–Moore): a different number cancels one vote from each. Then verify the survivors with a real count.",
   "frames": []
  }
 ]
};
