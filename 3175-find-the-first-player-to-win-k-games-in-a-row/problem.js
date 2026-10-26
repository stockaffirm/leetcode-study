window.PROBLEM = {
 "id": "3175",
 "title": "Find The First Player to win K Games in a Row",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Players stand in a queue with distinct skills. The first two play, the stronger wins and stays at the front while the loser goes to the back. Return the index of the first player to win k games in a row. Example: skills [4,2,6,3,9], k=2 → 2.",
 "why": "skills [4,2,6,3,9], k=2: 4 beats 2, loses to 6; 6 beats 3 (2 wins in a row) → player 2.",
 "idea": "The front player plays the next in line; the winner stays and the loser goes to the back. That is the same as keeping a champion index and a win streak while scanning the others. If nobody reaches k wins, the strongest player ends up as champion.",
 "input": "skills = [4,2,6,3,9], k = 2",
 "output": "2",
 "notes": [],
 "best": "The front player plays the next in line; the winner stays and the loser goes to the back. That is the same as keeping a champion index and a win streak while scanning the others. If nobody reaches k wins, the strongest player ends up as champion.",
 "variants": [
  {
   "name": "Track the current champion's streak",
   "code": "class Solution:\n    def findWinningPlayer(self, skills, k):\n        cur, wins = 0, 0\n        for i in range(1, len(skills)):\n            if skills[i] > skills[cur]:\n                cur, wins = i, 1\n            else:\n                wins += 1\n            if wins == k:\n                return cur\n        return cur",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The front player plays the next in line; the winner stays and the loser goes to the back. That is the same as keeping a champion index and a win streak while scanning the others. If nobody reaches k wins, the strongest player ends up as champion.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Queue simulation",
   "tag": "Brute force",
   "code": "class Solution:\n    def findWinningPlayer(self, skills, k):\n        n = len(skills)\n        k = min(k, n - 1)\n        q = deque(range(n))\n        champ = q.popleft()\n        wins = 0\n        while True:\n            challenger = q.popleft()\n            if skills[champ] > skills[challenger]:\n                wins += 1\n                q.append(challenger)\n            else:\n                q.append(champ)\n                champ = challenger\n                wins = 1\n            if wins == k:\n                return champ",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Simulate the line: the front two play, the loser goes to the back (k is capped at n − 1).",
   "frames": [],
   "alt": true
  }
 ]
};
