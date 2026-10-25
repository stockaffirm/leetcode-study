window.PROBLEM = {
 "id": "1366",
 "title": "Rank Teams by Votes",
 "level": "Medium",
 "topic": "Sorting",
 "question": "A ranking is decided by votes: each voter submits all teams (letters) in their order of preference. Teams are ranked by how many FIRST-place votes they got; ties are broken by the number of SECOND-place votes, then third, and so on. If two teams are still tied they are ordered alphabetically. Given the votes (strings of the same teams in preference order) return the final ranking as one string. Example: ['ABC','ACB','ABC','ACB','ACB'] → A has all five first places; C has 3 second places and B has 2 → 'ACB'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Negative counts as the key",
   "tag": "Alternative",
   "code": "class Solution:\n    def rankTeams(self, votes):\n        n = len(votes[0])\n        cnt = defaultdict(lambda: [0] * n)\n        for v in votes:\n            for i, c in enumerate(v): cnt[c][i] -= 1\n        return ''.join(sorted(votes[0], key=lambda c: (cnt[c], c)))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Subtract 1 for every vote so the natural ascending sort puts the best team first.",
   "frames": [],
   "alt": true
  }
 ]
};
