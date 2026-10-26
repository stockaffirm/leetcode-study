window.PROBLEM = {
 "id": "2833",
 "title": "Furthest Point From Origin",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
