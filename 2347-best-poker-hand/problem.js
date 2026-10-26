window.PROBLEM = {
 "id": "2347",
 "title": "Best Poker Hand",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "You hold 5 cards given as ranks and suits. Return the best hand: 'Flush' if all five have the same suit; 'Three of a Kind' if three (or more) cards share a rank; 'Pair' if two share a rank; otherwise 'High Card'. Example: ranks [13,2,3,1,9], all suits 'a' → 'Flush'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sorted ranks",
   "tag": "Alternative",
   "code": "class Solution:\n    def bestHand(self, ranks, suits):\n        if suits[0] == suits[1] == suits[2] == suits[3] == suits[4]: return 'Flush'\n        r = sorted(ranks)\n        run = best = 1\n        for a, b in zip(r, r[1:]):\n            run = run + 1 if a == b else 1\n            best = max(best, run)\n        return 'Three of a Kind' if best >= 3 else 'Pair' if best == 2 else 'High Card'",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Sort the ranks and look at runs of equal values.",
   "frames": [],
   "alt": true
  }
 ]
};
