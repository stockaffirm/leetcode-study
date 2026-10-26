window.PROBLEM = {
 "id": "474",
 "title": "Ones and Zeroes",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You get binary strings, and numbers m and n. Choose the largest subset of the strings that together contain at most m zeros and at most n ones. Return its size. Example: ['10','0001','111001','1','0'], m=5, n=3 → 4.",
 "why": "Choose the biggest subset of binary strings that uses at most m zeros and n ones in total.",
 "idea": "A knapsack with two capacities: dp[z][o] = most strings using at most z zeros and o ones; go through the strings and update the table downwards.",
 "input": "['10','0001','111001','1','0'], m=5, n=3",
 "output": "4",
 "notes": [],
 "best": "A knapsack with two capacities: dp[z][o] = most strings using at most z zeros and o ones; go through the strings and update the table downwards.",
 "variants": [
  {
   "name": "2D 0/1 knapsack",
   "code": "class Solution:\n    def findMaxForm(self, strs, m, n):\n        dp = [[0] * (n + 1) for _ in range(m + 1)]\n        for s in strs:\n            z, o = s.count('0'), s.count('1')\n            for i in range(m, z - 1, -1):\n                for j in range(n, o - 1, -1):\n                    dp[i][j] = max(dp[i][j], dp[i - z][j - o] + 1)\n        return dp[m][n]",
   "time": "O(L·m·n)",
   "space": "O(m·n)",
   "explain": "A knapsack with two capacities: dp[z][o] = most strings using at most z zeros and o ones; go through the strings and update the table downwards.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def findMaxForm(self, strs, m, n):\n        counts = [(s.count('0'), s.count('1')) for s in strs]\n        @lru_cache(None)\n        def f(i, z, o):\n            if i == len(strs): return 0\n            best = f(i + 1, z, o)\n            cz, co = counts[i]\n            if cz <= z and co <= o: best = max(best, 1 + f(i + 1, z - cz, o - co))\n            return best\n        return f(0, m, n)",
   "time": "O(L·m·n)",
   "space": "O(L·m·n)",
   "explain": "f(i, zeros left, ones left) = best count from string i on.",
   "frames": [],
   "alt": true
  }
 ]
};
