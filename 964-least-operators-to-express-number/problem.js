window.PROBLEM = {
 "id": "964",
 "title": "Least Operators to Express Number",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "x=3, target=19: 3*3 + 3*3 + 3/3 → 5 operators.",
 "idea": "Write target in base x. The digit at position k is built either from cur copies of x^k (cur·x^k) or from (x − cur) subtracted from the next higher power, and a carry decides which is cheaper. Keep two running costs: pos (no borrow) and neg (borrowed from the next digit) and update them digit by digit; each x^k costs k operators for k ≥ 2 (x^0 = x/x costs 2).",
 "input": "x = 3, target = 19",
 "output": "5",
 "notes": [],
 "best": "Write target in base x. The digit at position k is built either from cur copies of x^k (cur·x^k) or from (x − cur) subtracted from the next higher power, and a carry decides which is cheaper. Keep two running costs: pos (no borrow) and neg (borrowed from the next digit) and update them digit by digit; each x^k costs k operators for k ≥ 2 (x^0 = x/x costs 2).",
 "variants": [
  {
   "name": "Digit DP in base x",
   "code": "class Solution:\n    def leastOpsExpressTarget(self, x, target):\n        pos = neg = k = 0\n        while target:\n            target, cur = divmod(target, x)\n            if k:\n                pos, neg = min(cur * k + pos, (cur + 1) * k + neg), min((x - cur) * k + pos, (x - cur - 1) * k + neg)\n            else:\n                pos, neg = cur * 2, (x - cur) * 2\n            k += 1\n        return min(pos, k + neg) - 1",
   "time": "O(log target)",
   "space": "O(1)",
   "explain": "Write target in base x. The digit at position k is built either from cur copies of x^k (cur·x^k) or from (x − cur) subtracted from the next higher power, and a carry decides which is cheaper. Keep two running costs: pos (no borrow) and neg (borrowed from the next digit) and update them digit by digit; each x^k costs k operators for k ≥ 2 (x^0 = x/x costs 2).",
   "frames": []
  }
 ]
};
