window.PROBLEM = {
 "id": "650",
 "title": "2 Keys Keyboard",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A notepad has one letter 'A'. In one step you can either copy everything on the notepad or paste the last copied text. Return the minimum number of steps to have exactly n letters 'A'. Example: n=3 → 3 (copy, paste, paste); n=1 → 0.",
 "why": "A notepad holds one 'A'. Each step is Copy All or Paste. Fewest steps to have exactly n 'A's?",
 "idea": "To multiply the count by p you need 1 copy + (p−1) pastes = p steps. So the answer is the sum of the prime factors of n (with multiplicity).",
 "input": "n = 3",
 "output": "3",
 "notes": [],
 "best": "To multiply the count by p you need 1 copy + (p−1) pastes = p steps. So the answer is the sum of the prime factors of n (with multiplicity).",
 "variants": [
  {
   "name": "Sum of prime factors",
   "code": "class Solution:\n    def minSteps(self, n):\n        steps, d = 0, 2\n        while n > 1:\n            while n % d == 0:\n                steps += d\n                n //= d\n            d += 1\n        return steps",
   "time": "O(√n)",
   "space": "O(1)",
   "explain": "To multiply the count by p you need 1 copy + (p−1) pastes = p steps. So the answer is the sum of the prime factors of n (with multiplicity).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over divisors",
   "tag": "Alternative",
   "code": "class Solution:\n    def minSteps(self, n):\n        dp = [0] * (n + 1)\n        for i in range(2, n + 1):\n            dp[i] = i\n            for j in range(1, i // 2 + 1):\n                if i % j == 0: dp[i] = min(dp[i], dp[j] + i // j)\n        return dp[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "dp[i] = fewest steps for i letters: copy a divisor-size block and paste the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
