window.PROBLEM = {
 "id": "2410",
 "title": "Maximum Matching of Players With Trainers",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "players [4,7,9], trainers [8,2,5,8] → 4↔5, 7↔8, 9 has none → 2.",
 "idea": "A player can use a trainer whose capacity is at least their ability. Sort both lists and go through the trainers: whenever the weakest unmatched player fits the trainer, match them. This keeps the strongest trainers for the hardest players.",
 "input": "players = [4,7,9], trainers = [8,2,5,8]",
 "output": "2",
 "notes": [],
 "best": "A player can use a trainer whose capacity is at least their ability. Sort both lists and go through the trainers: whenever the weakest unmatched player fits the trainer, match them. This keeps the strongest trainers for the hardest players.",
 "variants": [
  {
   "name": "Sort both, match greedily with two pointers",
   "code": "class Solution:\n    def matchPlayersAndTrainers(self, players, trainers):\n        players.sort()\n        trainers.sort()\n        i = 0\n        for t in trainers:\n            if i < len(players) and players[i] <= t:\n                i += 1\n        return i",
   "time": "O(n log n + m log m)",
   "space": "O(1)",
   "explain": "A player can use a trainer whose capacity is at least their ability. Sort both lists and go through the trainers: whenever the weakest unmatched player fits the trainer, match them. This keeps the strongest trainers for the hardest players.",
   "frames": []
  }
 ]
};
