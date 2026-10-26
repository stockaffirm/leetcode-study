window.PROBLEM = {
 "id": "1510",
 "title": "Stone Game IV",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=4: Alice removes 4 stones and wins → true; n=2: only 1 can be removed, Bob then wins → false.",
 "idea": "win[i] is true if the player to move with i stones can remove a square number s ≤ i leaving i − s stones where the opponent loses. win[0] = false.",
 "input": "n = 4",
 "output": "true",
 "notes": [],
 "best": "win[i] is true if the player to move with i stones can remove a square number s ≤ i leaving i − s stones where the opponent loses. win[0] = false.",
 "variants": [
  {
   "name": "win[i] if some square move leaves a losing position",
   "code": "class Solution:\n    def winnerSquareGame(self, n):\n        win = [False] * (n + 1)\n        for i in range(1, n + 1):\n            j = 1\n            while j * j <= i:\n                if not win[i - j * j]:\n                    win[i] = True\n                    break\n                j += 1\n        return win[n]",
   "time": "O(n√n)",
   "space": "O(n)",
   "explain": "win[i] is true if the player to move with i stones can remove a square number s ≤ i leaving i − s stones where the opponent loses. win[0] = false.",
   "frames": []
  }
 ]
};
