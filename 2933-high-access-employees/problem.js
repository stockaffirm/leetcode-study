window.PROBLEM = {
 "id": "2933",
 "title": "High-Access Employees",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
