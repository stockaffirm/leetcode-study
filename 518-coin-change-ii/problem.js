window.PROBLEM = {
 "id": "518",
 "title": "Coin Change II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You have unlimited coins of each given kind. Return the number of different combinations (the order of coins does not matter) of coins that add up to the amount; return 0 if impossible. Example: amount 5, coins [1,2,5] → 4 (5; 2+2+1; 2+1+1+1; 1+1+1+1+1).",
 "why": "Count the different combinations of coins (unlimited supply of each kind) that add up to an amount.",
 "idea": "dp[a] = number of ways to make a. Process one coin kind at a time (outer loop) and add dp[a − coin] for amounts from the coin upwards — that counts combinations, not orderings.",
 "input": "amount = 5, coins [1,2,5]",
 "output": "4",
 "notes": [],
 "best": "dp[a] = number of ways to make a. Process one coin kind at a time (outer loop) and add dp[a − coin] for amounts from the coin upwards — that counts combinations, not orderings.",
 "variants": [
  {
   "name": "Unbounded knapsack, coins in the outer loop",
   "code": "class Solution:\n    def change(self, amount, coins):\n        dp = [1] + [0] * amount\n        for c in coins:\n            for a in range(c, amount + 1): dp[a] += dp[a - c]\n        return dp[amount]",
   "time": "O(n·amount)",
   "space": "O(amount)",
   "explain": "dp[a] = number of ways to make a. Process one coin kind at a time (outer loop) and add dp[a − coin] for amounts from the coin upwards — that counts combinations, not orderings.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursion with memo",
   "tag": "Alternative",
   "code": "class Solution:\n    def change(self, amount, coins):\n        @lru_cache(None)\n        def f(i, rem):\n            if rem == 0: return 1\n            if i == len(coins) or rem < 0: return 0\n            return f(i, rem - coins[i]) + f(i + 1, rem)\n        return f(0, amount)",
   "time": "O(n·amount)",
   "space": "O(n·amount)",
   "explain": "f(i, rem) = ways using coins i.. to make rem.",
   "frames": [],
   "alt": true
  }
 ]
};
