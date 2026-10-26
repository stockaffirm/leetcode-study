window.PROBLEM = {
 "id": "1604",
 "title": "Alert Using Same Key-Card Three or More Times in a One-Hour Period",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Who used their key-card 3 or more times within 60 minutes? Return those names alphabetically.",
 "idea": "Group the times (as minutes since midnight) by person and sort them. Three uses fit in an hour exactly when some time and the time two positions later differ by at most 60.",
 "input": "daniel at 10:00, 10:40, 11:00; luis at 09:00, 11:00, 13:00, 15:00",
 "output": "[\"daniel\"]",
 "notes": [],
 "best": "Group the times (as minutes since midnight) by person and sort them. Three uses fit in an hour exactly when some time and the time two positions later differ by at most 60.",
 "variants": [
  {
   "name": "Group by person, sort, look 2 ahead",
   "code": "class Solution:\n    def alertNames(self, keyName, keyTime):\n        times = defaultdict(list)\n        for name, t in zip(keyName, keyTime):\n            h, m = t.split(':')\n            times[name].append(int(h) * 60 + int(m))\n        alerts = []\n        for name, ts in times.items():\n            ts.sort()\n            for i in range(2, len(ts)):\n                if ts[i] - ts[i - 2] <= 60:\n                    alerts.append(name)\n                    break\n        return sorted(alerts)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Group the times (as minutes since midnight) by person and sort them. Three uses fit in an hour exactly when some time and the time two positions later differ by at most 60.",
   "frames": []
  }
 ]
};
