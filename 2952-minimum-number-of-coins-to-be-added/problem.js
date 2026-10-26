window.PROBLEM = {
 "id": "2952",
 "title": "Minimum Number of Coins to be Added",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "coins [1,4,10], target 19 → add 2 and 8 → 2.",
 "idea": "Keep reach = the largest amount such that every value 1…reach can be formed. Sort the coins. If the next coin is ≤ reach + 1 it extends the reach by its value; otherwise add a coin of value reach + 1 (doubling the reach). Continue until reach ≥ target.",
 "input": "coins = [1,4,10], target = 19",
 "output": "2",
 "notes": [],
 "best": "Keep reach = the largest amount such that every value 1…reach can be formed. Sort the coins. If the next coin is ≤ reach + 1 it extends the reach by its value; otherwise add a coin of value reach + 1 (doubling the reach). Continue until reach ≥ target.",
 "variants": [
  {
   "name": "Patch the first unreachable amount",
   "code": "class Solution:\n    def minimumAddedCoins(self, coins, target):\n        coins.sort()\n        reach = 0\n        added = 0\n        i = 0\n        while reach < target:\n            if i < len(coins) and coins[i] <= reach + 1:\n                reach += coins[i]\n                i += 1\n            else:\n                reach += reach + 1\n                added += 1\n        return added",
   "time": "O(n log n + log target)",
   "space": "O(1)",
   "explain": "Keep reach = the largest amount such that every value 1…reach can be formed. Sort the coins. If the next coin is ≤ reach + 1 it extends the reach by its value; otherwise add a coin of value reach + 1 (doubling the reach). Continue until reach ≥ target.",
   "frames": []
  }
 ]
};
