window.PROBLEM = {
 "id": "1366",
 "title": "Rank Teams by Votes",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "Voters rank all teams. The team with more first-place votes wins; ties are broken by second-place votes, and so on; a complete tie is broken alphabetically.",
 "idea": "Count, for every team, how many votes it got in each position. Sort teams by those counts (more is better, position by position), then alphabetically.",
 "input": "[\"ABC\",\"ACB\",\"ABC\",\"ACB\",\"ACB\"]",
 "output": "\"ACB\"",
 "notes": [],
 "best": "Count, for every team, how many votes it got in each position. Sort teams by those counts (more is better, position by position), then alphabetically.",
 "variants": [
  {
   "name": "Sort by vote counts per position",
   "code": "class Solution:\n    def rankTeams(self, votes):\n        n = len(votes[0])\n        cnt = {c: [0] * n for c in votes[0]}\n        for v in votes:\n            for i, c in enumerate(v): cnt[c][i] += 1\n        return ''.join(sorted(votes[0], key=lambda c: ([-x for x in cnt[c]], c)))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Count, for every team, how many votes it got in each position. Sort teams by those counts (more is better, position by position), then alphabetically.",
   "frames": []
  }
 ]
};
