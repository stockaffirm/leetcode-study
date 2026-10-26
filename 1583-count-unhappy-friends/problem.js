window.PROBLEM = {
 "id": "1583",
 "title": "Count Unhappy Friends",
 "level": "Medium",
 "topic": "Array / String",
 "question": "n friends (even) each rank all others; they are paired up. Friend x is unhappy if there is a friend u such that x prefers u over x's partner y, and u prefers x over u's own partner v. Return the number of unhappy friends. Example: n=4, preferences [[1,2,3],[3,2,0],[3,1,0],[1,2,0]], pairs [[0,1],[2,3]] → 2.",
 "why": "Four friends paired (0,1) and (2,3) — friend 1 prefers 3 to 0 and 3 prefers 1 to 2 → both are unhappy → 2.",
 "idea": "Build rank[x][y] = how much x likes y. Friend x paired with y is unhappy if there is some u that x prefers over y, where u is paired with v and u also prefers x over v. Check every friend against all friends they prefer more than their partner.",
 "input": "n = 4, preferences = [[1,2,3],[3,2,0],[3,1,0],[1,2,0]], pairs = [[0,1],[2,3]]",
 "output": "2",
 "notes": [],
 "best": "Build rank[x][y] = how much x likes y. Friend x paired with y is unhappy if there is some u that x prefers over y, where u is paired with v and u also prefers x over v. Check every friend against all friends they prefer more than their partner.",
 "variants": [
  {
   "name": "Rank table and a pair check",
   "code": "class Solution:\n    def unhappyFriends(self, n, preferences, pairs):\n        rank = [[0] * n for _ in range(n)]\n        for x in range(n):\n            for r, y in enumerate(preferences[x]):\n                rank[x][y] = r\n        partner = [0] * n\n        for a, b in pairs:\n            partner[a], partner[b] = b, a\n        res = 0\n        for x in range(n):\n            y = partner[x]\n            for u in preferences[x]:\n                if u == y:\n                    break\n                v = partner[u]\n                if rank[u][x] < rank[u][v]:\n                    res += 1\n                    break\n        return res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Build rank[x][y] = how much x likes y. Friend x paired with y is unhappy if there is some u that x prefers over y, where u is paired with v and u also prefers x over v. Check every friend against all friends they prefer more than their partner.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare with dictionaries of preference order",
   "tag": "Alternative",
   "code": "class Solution:\n    def unhappyFriends(self, n, preferences, pairs):\n        partner = {}\n        for a, b in pairs:\n            partner[a], partner[b] = b, a\n        res = 0\n        for x in range(n):\n            y = partner[x]\n            for u in preferences[x][:preferences[x].index(y)]:\n                v = partner[u]\n                if preferences[u].index(x) < preferences[u].index(v):\n                    res += 1\n                    break\n        return res",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Use position lookups via list.index instead of a rank table.",
   "frames": [],
   "alt": true
  }
 ]
};
