window.PROBLEM = {
 "id": "3333",
 "title": "Find the Original Typed String II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'aabbccdd', k=7 → 5 originals of length ≥ 7.",
 "idea": "Group equal consecutive letters; each group of length g can come from 1…g typed letters, so there are the product of g's originals in total. Subtract those shorter than k: if there are at least k groups, none are shorter. Otherwise count length-<k originals with a DP (Dynamic Programming) over groups using prefix sums, modulo 1e9+7.",
 "input": "word = \"aabbccdd\", k = 7",
 "output": "5",
 "notes": [],
 "best": "Group equal consecutive letters; each group of length g can come from 1…g typed letters, so there are the product of g's originals in total. Subtract those shorter than k: if there are at least k groups, none are shorter. Otherwise count length-<k originals with a DP (Dynamic Programming) over groups using prefix sums, modulo 1e9+7.",
 "variants": [
  {
   "name": "All ways minus the too-short ones (prefix-sum DP)",
   "code": "class Solution:\n    def possibleStringCount(self, word, k):\n        MOD = 10**9 + 7\n        groups = [len(list(g)) for _, g in groupby(word)]\n        total = 1\n        for g in groups:\n            total = total * g % MOD\n        if len(groups) >= k:\n            return total\n        dp = [0] * k\n        dp[0] = 1\n        for g in groups:\n            new = [0] * k\n            pref = [0] * (k + 1)\n            for j in range(k):\n                pref[j + 1] = (pref[j] + dp[j]) % MOD\n            for j in range(1, k):\n                lo = max(0, j - g)\n                new[j] = (pref[j] - pref[lo]) % MOD\n            dp = new\n        return (total - sum(dp)) % MOD",
   "time": "O(k · groups)",
   "space": "O(k)",
   "explain": "Group equal consecutive letters; each group of length g can come from 1…g typed letters, so there are the product of g's originals in total. Subtract those shorter than k: if there are at least k groups, none are shorter. Otherwise count length-<k originals with a DP (Dynamic Programming) over groups using prefix sums, modulo 1e9+7.",
   "frames": []
  }
 ]
};
