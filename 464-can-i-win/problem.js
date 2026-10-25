window.PROBLEM = {
 "id": "464",
 "title": "Can I Win",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Two players take turns choosing a number from 1 to m that has not been chosen yet, adding it to a running total; whoever makes the total reach at least the target wins. Assuming both play perfectly, can the first player force a win? Example: m=10, target=11 → False.",
 "why": "Two players take turns choosing a number from 1..m without reuse and add it to a shared total; whoever reaches the target first wins. Can the first player force a win?",
 "idea": "State = which numbers are used (a bitmask); the total is determined by it. A player wins if some choice reaches the target or leaves the opponent in a losing state.",
 "input": "m=10, target 11",
 "output": "False",
 "notes": [],
 "best": "State = which numbers are used (a bitmask); the total is determined by it. A player wins if some choice reaches the target or leaves the opponent in a losing state.",
 "variants": [
  {
   "name": "Bitmask memoisation",
   "code": "class Solution:\n    def canIWin(self, maxChoosableInteger, desiredTotal):\n        m = maxChoosableInteger\n        if desiredTotal <= 0: return True\n        if m * (m + 1) // 2 < desiredTotal: return False\n        @lru_cache(None)\n        def win(used, total):\n            for i in range(m):\n                bit = 1 << i\n                if not used & bit and (i + 1 >= total or not win(used | bit, total - (i + 1))):\n                    return True\n            return False\n        return win(0, desiredTotal)",
   "time": "O(2^m · m)",
   "space": "O(2^m)",
   "explain": "State = which numbers are used (a bitmask); the total is determined by it. A player wins if some choice reaches the target or leaves the opponent in a losing state.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memo on the remaining numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def canIWin(self, maxChoosableInteger, desiredTotal):\n        m = maxChoosableInteger\n        if desiredTotal <= 0: return True\n        if m * (m + 1) // 2 < desiredTotal: return False\n        memo = {}\n        def win(rem, total):\n            if rem in memo: return memo[rem]\n            for x in rem:\n                if x >= total or not win(tuple(y for y in rem if y != x), total - x):\n                    memo[rem] = True\n                    return True\n            memo[rem] = False\n            return False\n        return win(tuple(range(1, m + 1)), desiredTotal)",
   "time": "O(2^m · m)",
   "space": "O(2^m)",
   "explain": "Same game search, the state is the tuple of numbers still available.",
   "frames": [],
   "alt": true
  }
 ]
};
