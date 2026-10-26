window.PROBLEM = {
 "id": "2833",
 "title": "Furthest Point From Origin",
 "level": "Easy",
 "topic": "Greedy",
 "question": "Start at 0 on a line. Each character of moves is 'L' (move left), 'R' (move right) or '_' (either). Return the greatest distance from the origin you can end at. Example: 'L_RL__R' → 3.",
 "why": "'L_RL__R': 3 L's and 2 R's net −1, plus 2 underscores → 3.",
 "idea": "Each '_' can go either way, so send all of them in the direction of the majority. The answer is |#L − #R| + #_.",
 "input": "moves = \"L_RL__R\"",
 "output": "3",
 "notes": [],
 "best": "Each '_' can go either way, so send all of them in the direction of the majority. The answer is |#L − #R| + #_.",
 "variants": [
  {
   "name": "Send every '_' the same direction",
   "code": "class Solution:\n    def furthestDistanceFromOrigin(self, moves):\n        return abs(moves.count('L') - moves.count('R')) + moves.count('_')",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Each '_' can go either way, so send all of them in the direction of the majority. The answer is |#L − #R| + #_.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try both directions",
   "tag": "Alternative",
   "code": "class Solution:\n    def furthestDistanceFromOrigin(self, moves):\n        left = moves.count('L') + moves.count('_') - moves.count('R')\n        right = moves.count('R') + moves.count('_') - moves.count('L')\n        return max(abs(left), abs(right))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Send every underscore left, then right, and take the larger distance.",
   "frames": [],
   "alt": true
  }
 ]
};
