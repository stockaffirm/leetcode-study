window.PROBLEM = {
 "id": "1434",
 "title": "Number of Ways to Wear Different Hats to Each Other",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "n people each like some hats (numbered 1–40). Each person must wear a different hat they like. Return the number of ways to assign hats, modulo 1 000 000 007. Example: [[3,4],[4,5],[5]] → 1.",
 "why": "hats [[3,4],[4,5],[5]]: person 0 takes 3, person 1 takes 4, person 2 takes 5 → the only way → 1.",
 "idea": "There are at most 10 people but up to 40 hats, so use a bitmask of people who already have a hat and process hats one by one. For each hat, for each mask, try giving that hat to any person who likes it and is not yet in the mask. Go through masks from high to low so a hat is used at most once.",
 "input": "hats = [[3,4],[4,5],[5]]",
 "output": "1",
 "notes": [],
 "best": "There are at most 10 people but up to 40 hats, so use a bitmask of people who already have a hat and process hats one by one. For each hat, for each mask, try giving that hat to any person who likes it and is not yet in the mask. Go through masks from high to low so a hat is used at most once.",
 "variants": [
  {
   "name": "Bitmask over people, iterate over hats",
   "code": "class Solution:\n    def numberWays(self, hats):\n        MOD = 10**9 + 7\n        n = len(hats)\n        likers = defaultdict(list)\n        for p, hs in enumerate(hats):\n            for h in hs:\n                likers[h].append(p)\n        dp = [0] * (1 << n)\n        dp[0] = 1\n        for hat in range(1, 41):\n            for mask in range((1 << n) - 1, -1, -1):\n                if dp[mask]:\n                    for p in likers[hat]:\n                        if not (mask >> p) & 1:\n                            dp[mask | 1 << p] = (dp[mask | 1 << p] + dp[mask]) % MOD\n        return dp[-1]",
   "time": "O(40·2ⁿ·n)",
   "space": "O(2ⁿ)",
   "explain": "There are at most 10 people but up to 40 hats, so use a bitmask of people who already have a hat and process hats one by one. For each hat, for each mask, try giving that hat to any person who likes it and is not yet in the mask. Go through masks from high to low so a hat is used at most once.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down memo by hat",
   "tag": "Alternative",
   "code": "class Solution:\n    def numberWays(self, hats):\n        MOD = 10**9 + 7\n        n = len(hats)\n        likers = defaultdict(list)\n        for p, hs in enumerate(hats):\n            for h in hs:\n                likers[h].append(p)\n        full = (1 << n) - 1\n        @lru_cache(None)\n        def go(hat, mask):\n            if mask == full:\n                return 1\n            if hat > 40:\n                return 0\n            res = go(hat + 1, mask)\n            for p in likers[hat]:\n                if not (mask >> p) & 1:\n                    res += go(hat + 1, mask | 1 << p)\n            return res % MOD\n        return go(1, 0)",
   "time": "O(40·2ⁿ·n)",
   "space": "O(40·2ⁿ)",
   "explain": "ways(hat, mask) = ways(hat+1, mask) + sum over persons who like this hat.",
   "frames": [],
   "alt": true
  }
 ]
};
