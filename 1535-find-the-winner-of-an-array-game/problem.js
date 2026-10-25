window.PROBLEM = {
 "id": "1535",
 "title": "Find the Winner of an Array Game",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Play with the array: compare the first two elements; the larger stays at the front and the smaller moves to the end. The game ends when some number wins k rounds in a row. Return that number. Example: [2,1,3,5,4,6,7], k=2 → 5.",
 "why": "[2,1,3,5,4,6,7], k=2: 5 beats 3 and then 4: two wins in a row → 5.",
 "idea": "The larger of the first two stays, the smaller goes to the back. Scan once keeping the current champion and its win streak; if the streak reaches k return the champion. If it never does, the champion at the end is the maximum.",
 "input": "arr = [2,1,3,5,4,6,7], k = 2",
 "output": "5",
 "notes": [],
 "best": "The larger of the first two stays, the smaller goes to the back. Scan once keeping the current champion and its win streak; if the streak reaches k return the champion. If it never does, the champion at the end is the maximum.",
 "variants": [
  {
   "name": "Champion with a win streak",
   "code": "class Solution:\n    def getWinner(self, arr, k):\n        champ, wins = arr[0], 0\n        for x in arr[1:]:\n            if x > champ:\n                champ, wins = x, 1\n            else:\n                wins += 1\n            if wins == k:\n                return champ\n        return champ",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The larger of the first two stays, the smaller goes to the back. Scan once keeping the current champion and its win streak; if the streak reaches k return the champion. If it never does, the champion at the end is the maximum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Queue simulation",
   "tag": "Brute force",
   "code": "class Solution:\n    def getWinner(self, arr, k):\n        k = min(k, len(arr) - 1)\n        q = deque(arr[1:])\n        champ, wins = arr[0], 0\n        while wins < k:\n            x = q.popleft()\n            if champ > x:\n                wins += 1\n                q.append(x)\n            else:\n                q.append(champ)\n                champ, wins = x, 1\n        return champ",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Simulate the line with a deque (k capped at n − 1).",
   "frames": [],
   "alt": true
  }
 ]
};
