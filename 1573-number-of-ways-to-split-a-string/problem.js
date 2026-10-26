window.PROBLEM = {
 "id": "1573",
 "title": "Number of Ways to Split a String",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "'10101' → 4 ones? no: 3 ones, one each part → 4 ways to place the cuts.",
 "idea": "With k ones in total, k must be divisible by 3 (each part gets k/3). If k = 0, any two cuts of the n − 1 gaps work: C(n−1, 2). Otherwise the first cut can be anywhere in the run of zeros between the (k/3)-th and (k/3+1)-th one, the second similarly: multiply the two run lengths (zeros + 1).",
 "input": "s = \"10101\"",
 "output": "4",
 "notes": [],
 "best": "With k ones in total, k must be divisible by 3 (each part gets k/3). If k = 0, any two cuts of the n − 1 gaps work: C(n−1, 2). Otherwise the first cut can be anywhere in the run of zeros between the (k/3)-th and (k/3+1)-th one, the second similarly: multiply the two run lengths (zeros + 1).",
 "variants": [
  {
   "name": "Gaps between the right groups of ones",
   "code": "class Solution:\n    def numWays(self, s):\n        MOD = 10**9 + 7\n        ones = [i for i, c in enumerate(s) if c == '1']\n        k = len(ones)\n        if k % 3:\n            return 0\n        if k == 0:\n            n = len(s)\n            return (n - 1) * (n - 2) // 2 % MOD\n        t = k // 3\n        return (ones[t] - ones[t - 1]) * (ones[2 * t] - ones[2 * t - 1]) % MOD",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "With k ones in total, k must be divisible by 3 (each part gets k/3). If k = 0, any two cuts of the n − 1 gaps work: C(n−1, 2). Otherwise the first cut can be anywhere in the run of zeros between the (k/3)-th and (k/3+1)-th one, the second similarly: multiply the two run lengths (zeros + 1).",
   "frames": []
  }
 ]
};
