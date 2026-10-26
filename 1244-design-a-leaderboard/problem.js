window.PROBLEM = {
 "id": "1244",
 "title": "Design A Leaderboard",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
