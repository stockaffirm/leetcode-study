window.PROBLEM = {
 "id": "1244",
 "title": "Design A Leaderboard",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a leaderboard: addScore(playerId, score) adds the score to the player's total (creating the player if needed); top(K) returns the sum of the K highest totals; reset(playerId) sets the player's total to 0. Example: add (1,73),(2,56),(3,39),(4,51),(5,4); top(1) → 73; reset 1 and 2; add (2,51); top(3) → 141.",
 "why": "A leaderboard with addScore(player, score) (adds to the player's total), top(K) (sum of the K best totals) and reset(player).",
 "idea": "Keep totals in a dictionary. top sorts the totals (or uses a heap) and sums the K largest.",
 "input": "add scores, top(1), reset, add, top(3)",
 "output": "73 … 141",
 "notes": [],
 "best": "Keep totals in a dictionary. top sorts the totals (or uses a heap) and sums the K largest.",
 "variants": [
  {
   "name": "Dictionary of scores",
   "code": "class Leaderboard:\n    def __init__(self):\n        self.s = defaultdict(int)\n    def addScore(self, playerId, score):\n        self.s[playerId] += score\n    def top(self, K):\n        return sum(sorted(self.s.values(), reverse=True)[:K])\n    def reset(self, playerId):\n        self.s[playerId] = 0",
   "time": "top O(n log n)",
   "space": "O(n)",
   "explain": "Keep totals in a dictionary. top sorts the totals (or uses a heap) and sums the K largest.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "nlargest",
   "tag": "Alternative",
   "code": "class Leaderboard:\n    def __init__(self):\n        self.s = {}\n    def addScore(self, playerId, score):\n        self.s[playerId] = self.s.get(playerId, 0) + score\n    def top(self, K):\n        return sum(nlargest(K, self.s.values()))\n    def reset(self, playerId):\n        self.s.pop(playerId, None)",
   "time": "O(n log K)",
   "space": "O(n)",
   "explain": "Take the K largest totals with a heap helper.",
   "frames": [],
   "alt": true
  }
 ]
};
