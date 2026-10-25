window.PROBLEM = {
 "id": "2933",
 "title": "High-Access Employees",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "You are given access records [name, time] with time written as a 4-digit 24-hour 'HHMM' on the same day. An employee is 'high-access' if they have three or more accesses within a one-hour period, meaning the time between the first and the third (in sorted order) is strictly LESS than 60 minutes. Return the names of all high-access employees, in any order. Example: a at 05:49, 05:32, 06:21 → 05:32 to 06:21 is 49 minutes → 'a' qualifies; b has only two accesses → ['a'].",
 "why": "Who badged in three or more times within a single hour (strictly less than 60 minutes between the first and third)?",
 "idea": "Convert each time (like '0829') to minutes, group by employee and sort. Three accesses fit when entry i and entry i+2 are less than 60 minutes apart.",
 "input": "a at 0549, 0532, 0621; b at 0457, 0540",
 "output": "[\"a\"]",
 "notes": [],
 "best": "Convert each time (like '0829') to minutes, group by employee and sort. Three accesses fit when entry i and entry i+2 are less than 60 minutes apart.",
 "variants": [
  {
   "name": "Group by person, check three within an hour",
   "code": "class Solution:\n    def findHighAccessEmployees(self, access_times):\n        times = defaultdict(list)\n        for name, t in access_times: times[name].append(int(t[:2]) * 60 + int(t[2:]))\n        out = []\n        for name, ts in times.items():\n            ts.sort()\n            if any(ts[i + 2] - ts[i] < 60 for i in range(len(ts) - 2)): out.append(name)\n        return out",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Convert each time (like '0829') to minutes, group by employee and sort. Three accesses fit when entry i and entry i+2 are less than 60 minutes apart.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every triple",
   "tag": "Brute force",
   "code": "class Solution:\n    def findHighAccessEmployees(self, access_times):\n        times = defaultdict(list)\n        for name, t in access_times: times[name].append(int(t[:2]) * 60 + int(t[2:]))\n        out = []\n        for name, ts in times.items():\n            ts.sort()\n            n = len(ts)\n            if any(ts[k] - ts[i] < 60 for i in range(n) for k in range(i + 2, n)): out.append(name)\n        return out",
   "time": "O(n³)",
   "space": "O(n)",
   "explain": "Look at every set of three accesses.",
   "frames": [],
   "alt": true
  }
 ]
};
