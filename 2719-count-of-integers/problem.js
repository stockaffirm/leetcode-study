window.PROBLEM = {
 "id": "2719",
 "title": "Count of Integers",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Count integers x with num1 ≤ x ≤ num2 (given as digit strings) whose digit sum is between min_sum and max_sum inclusive, modulo 1 000 000 007. Example: '1', '12', 1, 8 → 11.",
 "why": "Numbers 1…12 with digit sum between 1 and 8: only 9 (sum 9) is excluded → 11.",
 "idea": "Count numbers in [0, N] whose digit sum lies in [min_sum, max_sum] with a digit DP: state (position, sum so far, still tight to N). Answer = f(num2) − f(num1) + (1 if num1 itself qualifies), modulo 1e9+7.",
 "input": "num1 = \"1\", num2 = \"12\", min_sum = 1, max_sum = 8",
 "output": "11",
 "notes": [],
 "best": "Count numbers in [0, N] whose digit sum lies in [min_sum, max_sum] with a digit DP: state (position, sum so far, still tight to N). Answer = f(num2) − f(num1) + (1 if num1 itself qualifies), modulo 1e9+7.",
 "variants": [
  {
   "name": "Digit DP with a running digit sum",
   "code": "class Solution:\n    def count(self, num1, num2, min_sum, max_sum):\n        MOD = 10**9 + 7\n        def f(num):\n            digits = list(map(int, num))\n            @lru_cache(None)\n            def go(i, s, tight):\n                if s > max_sum:\n                    return 0\n                if i == len(digits):\n                    return 1 if s >= min_sum else 0\n                lim = digits[i] if tight else 9\n                return sum(go(i + 1, s + d, tight and d == lim) for d in range(lim + 1)) % MOD\n            return go(0, 0, True)\n        ok = 1 if min_sum <= sum(map(int, num1)) <= max_sum else 0\n        return (f(num2) - f(num1) + ok) % MOD",
   "time": "O(len · maxSum · 10)",
   "space": "O(len · maxSum)",
   "explain": "Count numbers in [0, N] whose digit sum lies in [min_sum, max_sum] with a digit DP: state (position, sum so far, still tight to N). Answer = f(num2) − f(num1) + (1 if num1 itself qualifies), modulo 1e9+7.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bottom-up digit DP",
   "tag": "Alternative",
   "code": "class Solution:\n    def count(self, num1, num2, min_sum, max_sum):\n        MOD = 10**9 + 7\n        def f(num):\n            digits = list(map(int, num))\n            free = [0] * (max_sum + 1)\n            tight_sum = 0\n            tight_ok = True\n            for d in digits:\n                new = [0] * (max_sum + 1)\n                for s in range(max_sum + 1):\n                    if free[s]:\n                        for x in range(10):\n                            if s + x <= max_sum:\n                                new[s + x] = (new[s + x] + free[s]) % MOD\n                if tight_ok:\n                    for x in range(d):\n                        if tight_sum + x <= max_sum:\n                            new[tight_sum + x] = (new[tight_sum + x] + 1) % MOD\n                    tight_sum += d\n                    if tight_sum > max_sum:\n                        tight_ok = False\n                free = new\n            total = sum(free[min_sum:]) % MOD\n            if tight_ok and min_sum <= tight_sum <= max_sum:\n                total += 1\n            return total % MOD\n        ok = 1 if min_sum <= sum(map(int, num1)) <= max_sum else 0\n        return (f(num2) - f(num1) + ok) % MOD",
   "time": "O(len · maxSum · 10)",
   "space": "O(maxSum)",
   "explain": "Count by walking through digits with arrays for tight / free states.",
   "frames": [],
   "alt": true
  }
 ]
};
