window.PROBLEM = {
 "id": "1152",
 "title": "Analyze User Website Visit Pattern",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
