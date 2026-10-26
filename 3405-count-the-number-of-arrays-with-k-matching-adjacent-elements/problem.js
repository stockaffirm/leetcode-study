window.PROBLEM = {
 "id": "3405",
 "title": "Count the Number of Arrays with K Matching Adjacent Elements",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=3, m=2, k=1 → arrays like [1,1,2], [2,1,1] … 4.",
 "idea": "An array has k positions where a neighbour equals the previous one, so there are n−1−k positions where the value changes. Choose which of the n−1 neighbour pairs are equal: C(n−1, k). The first value has m choices and each change has m−1 choices: m · (m−1)^(n−1−k). Multiply modulo 1e9+7.",
 "input": "n = 3, m = 2, k = 1",
 "output": "4",
 "notes": [],
 "best": "An array has k positions where a neighbour equals the previous one, so there are n−1−k positions where the value changes. Choose which of the n−1 neighbour pairs are equal: C(n−1, k). The first value has m choices and each change has m−1 choices: m · (m−1)^(n−1−k). Multiply modulo 1e9+7.",
 "variants": [
  {
   "name": "Choose where equal neighbours sit, then pick values",
   "code": "class Solution:\n    def countGoodArrays(self, n, m, k):\n        MOD = 10**9 + 7\n        return comb(n - 1, k) % MOD * m % MOD * pow(m - 1, n - 1 - k, MOD) % MOD",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "An array has k positions where a neighbour equals the previous one, so there are n−1−k positions where the value changes. Choose which of the n−1 neighbour pairs are equal: C(n−1, k). The first value has m choices and each change has m−1 choices: m · (m−1)^(n−1−k). Multiply modulo 1e9+7.",
   "frames": []
  }
 ]
};
