window.PROBLEM = {
 "id": "1152",
 "title": "Analyze User Website Visit Pattern",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Three lists record website visits: username[i] visited website[i] at timestamp[i]. A pattern is an ordered list of three websites (repeats allowed). A user 'has' a pattern if they visited those three sites in that order (at increasing times, not necessarily one directly after the other). Return the pattern that the largest number of different users have; if tied, the lexicographically smallest. Example: the 10-visit log → ['home','about','career'].",
 "why": "Each record says a user visited a website at a time. A pattern is an ordered triple of sites a user visited (in time order, not necessarily consecutively). Find the pattern visited by the most DIFFERENT users (lexicographically smallest on ties).",
 "idea": "Group each user's visits by time, list every 3-combination of their visited sites in order, collect them in a set per user, and count in how many users' sets each pattern appears.",
 "input": "3 users, 10 visits",
 "output": "['home','about','career']",
 "notes": [],
 "best": "Group each user's visits by time, list every 3-combination of their visited sites in order, collect them in a set per user, and count in how many users' sets each pattern appears.",
 "variants": [
  {
   "name": "Count users per 3-site pattern",
   "code": "class Solution:\n    def mostVisitedPattern(self, username, timestamp, website):\n        visits = defaultdict(list)\n        for t, u, w in sorted(zip(timestamp, username, website)): visits[u].append(w)\n        cnt = Counter()\n        for ws in visits.values():\n            for pat in set(combinations(ws, 3)): cnt[pat] += 1\n        best = max(cnt.values())\n        return list(min(p for p, c in cnt.items() if c == best))",
   "time": "O(U·v³)",
   "space": "O(patterns)",
   "explain": "Group each user's visits by time, list every 3-combination of their visited sites in order, collect them in a set per user, and count in how many users' sets each pattern appears.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pattern → set of users",
   "tag": "Alternative",
   "code": "class Solution:\n    def mostVisitedPattern(self, username, timestamp, website):\n        visits = defaultdict(list)\n        for t, u, w in sorted(zip(timestamp, username, website)): visits[u].append(w)\n        users = defaultdict(set)\n        for u, ws in visits.items():\n            for i in range(len(ws)):\n                for j in range(i + 1, len(ws)):\n                    for k in range(j + 1, len(ws)): users[(ws[i], ws[j], ws[k])].add(u)\n        best = max(len(s) for s in users.values())\n        return list(sorted(p for p, s in users.items() if len(s) == best)[0])",
   "time": "O(U·v³)",
   "space": "O(patterns)",
   "explain": "Record for every pattern the set of users who visited it using plain loops.",
   "frames": [],
   "alt": true
  }
 ]
};
