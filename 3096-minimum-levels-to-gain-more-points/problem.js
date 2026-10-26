window.PROBLEM = {
 "id": "3096",
 "title": "Minimum Levels to Gain More Points",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "possible[i] is 1 if level i can be cleared (+1 point) and 0 otherwise (−1 point). Alice plays the first levels, Bob the rest; each must play at least one level. Return the fewest levels Alice must play to end with more points than Bob, or −1. Example: [1,0,1,0] → 1.",
 "why": "possible [1,0,1,0]: Alice plays level 0 (+1), Bob plays 1,0,1... Alice 1 > Bob −1 → 1 level.",
 "idea": "A playable level gives +1 and an impossible one gives −1. Alice plays the first i levels, Bob the rest (each must play at least one). Using the total score, Alice's prefix p beats Bob when p > total − p. Return the smallest i that works.",
 "input": "possible = [1,0,1,0]",
 "output": "1",
 "notes": [],
 "best": "A playable level gives +1 and an impossible one gives −1. Alice plays the first i levels, Bob the rest (each must play at least one). Using the total score, Alice's prefix p beats Bob when p > total − p. Return the smallest i that works.",
 "variants": [
  {
   "name": "Prefix sum of +1 / −1",
   "code": "class Solution:\n    def minimumLevels(self, possible):\n        score = [1 if p else -1 for p in possible]\n        total = sum(score)\n        pre = 0\n        for i in range(len(score) - 1):\n            pre += score[i]\n            if pre > total - pre:\n                return i + 1\n        return -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A playable level gives +1 and an impossible one gives −1. Alice plays the first i levels, Bob the rest (each must play at least one). Using the total score, Alice's prefix p beats Bob when p > total − p. Return the smallest i that works.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every split with sums",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumLevels(self, possible):\n        score = [1 if p else -1 for p in possible]\n        for i in range(1, len(score)):\n            if sum(score[:i]) > sum(score[i:]):\n                return i\n        return -1",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For each split recompute Alice's and Bob's totals.",
   "frames": [],
   "alt": true
  }
 ]
};
