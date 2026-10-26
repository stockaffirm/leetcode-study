window.PROBLEM = {
 "id": "964",
 "title": "Least Operators to Express Number",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Using the number x, the operators +, −, ×, / (no parentheses, usual precedence, no unary minus) write an expression equal to target with the fewest operators. Return that number. Example: x=3, target=19 → 5 (3*3+3*3+3/3).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Digit DP with a carry array",
   "tag": "Alternative",
   "code": "class Solution:\n    def leastOpsExpressTarget(self, x, target):\n        digs = []\n        t = target\n        while t:\n            digs.append(t % x)\n            t //= x\n        digs.append(0)\n        INF = float('inf')\n        c0, c1 = 0, INF\n        for i, d in enumerate(digs):\n            w = 2 if i == 0 else i\n            n0 = n1 = INF\n            for carry, cost in ((0, c0), (1, c1)):\n                if cost == INF:\n                    continue\n                v = d + carry\n                n0 = min(n0, cost + v * w)\n                n1 = min(n1, cost + (x - v) * w)\n            c0, c1 = n0, n1\n        return c0 - 1",
   "time": "O(log target)",
   "space": "O(log target)",
   "explain": "Write target in base x. At each digit with value v (plus a possible carry) either use v copies of x^i or subtract (x − v) copies and pass a carry upwards; keep the cheapest cost for carry 0 and carry 1.",
   "frames": [],
   "alt": true
  }
 ]
};
