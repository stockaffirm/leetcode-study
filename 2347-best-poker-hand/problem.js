window.PROBLEM = {
 "id": "2347",
 "title": "Best Poker Hand",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Given 5 cards (ranks and suits) return the best hand: 'Flush' (all one suit), 'Three of a Kind' (three of one rank), 'Pair' (two of one rank) or 'High Card'.",
 "idea": "One suit → Flush. Otherwise count the ranks and look at the biggest count.",
 "input": "ranks [13,2,3,1,9], suits all 'a'",
 "output": "'Flush'",
 "notes": [],
 "best": "One suit → Flush. Otherwise count the ranks and look at the biggest count.",
 "variants": [
  {
   "name": "Count suits and ranks",
   "code": "class Solution:\n    def bestHand(self, ranks, suits):\n        if len(set(suits)) == 1: return 'Flush'\n        m = max(Counter(ranks).values())\n        if m >= 3: return 'Three of a Kind'\n        return 'Pair' if m == 2 else 'High Card'",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "One suit → Flush. Otherwise count the ranks and look at the biggest count.",
   "frames": []
  }
 ]
};
