window.PROBLEM = {
 "id": "1639",
 "title": "Number of Ways to Form a Target String Given a Dictionary",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You have a list of words that all have the same length, and a target string. You build the target left to right: to choose the next target letter you pick any word and a position j in it holding that letter; after using position j of any word you may only use positions greater than j next. Different choices of (word, position) count as different ways. Return the number of ways to build the target, modulo 1,000,000,007. Example: words ['acca','bbbb','caca'], target 'aba' → 6.",
 "why": "Build the target letter by letter, taking each letter from a column of the dictionary words; columns must go left to right and once you use column j you can't go back.",
 "idea": "Count, for each column, how many words have each letter. dp[t] = ways to build the first t target letters using columns so far; each column adds dp[t−1] × (count of target[t−1] in that column).",
 "input": "words [acca, bbbb, caca], target \"aba\"",
 "output": "6",
 "notes": [],
 "best": "Count, for each column, how many words have each letter. dp[t] = ways to build the first t target letters using columns so far; each column adds dp[t−1] × (count of target[t−1] in that column).",
 "variants": [
  {
   "name": "DP over columns of the words",
   "code": "class Solution:\n    def numWays(self, words, target):\n        MOD = 10 ** 9 + 7\n        L, T = len(words[0]), len(target)\n        cnt = [Counter(w[j] for w in words) for j in range(L)]\n        dp = [1] + [0] * T\n        for j in range(L):\n            for t in range(T, 0, -1):\n                dp[t] = (dp[t] + dp[t - 1] * cnt[j][target[t - 1]]) % MOD\n        return dp[T]",
   "time": "O(L · T)",
   "space": "O(T)",
   "explain": "Count, for each column, how many words have each letter. dp[t] = ways to build the first t target letters using columns so far; each column adds dp[t−1] × (count of target[t−1] in that column).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def numWays(self, words, target):\n        MOD = 10 ** 9 + 7\n        L, T = len(words[0]), len(target)\n        cnt = [Counter(w[j] for w in words) for j in range(L)]\n        @lru_cache(None)\n        def go(j, t):\n            if t == T: return 1\n            if j == L: return 0\n            return (go(j + 1, t) + cnt[j][target[t]] * go(j + 1, t + 1)) % MOD\n        return go(0, 0)",
   "time": "O(L·T)",
   "space": "O(L·T)",
   "explain": "For each (column, letters placed) either skip the column or use one of its matching letters.",
   "frames": [],
   "alt": true
  }
 ]
};
