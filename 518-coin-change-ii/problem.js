window.PROBLEM = {
 "id": "518",
 "title": "Coin Change II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
