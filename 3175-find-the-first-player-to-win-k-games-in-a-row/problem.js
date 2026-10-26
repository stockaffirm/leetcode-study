window.PROBLEM = {
 "id": "3175",
 "title": "Find The First Player to win K Games in a Row",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
