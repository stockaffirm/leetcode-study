window.PROBLEM = {
 "id": "1604",
 "title": "Alert Using Same Key-Card Three or More Times in a One-Hour Period",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A company records key-card uses: keyName[i] used a card at time keyTime[i] (written 'HH:MM', 24-hour, all on the same day). A person triggers an alert if they use their card THREE OR MORE times within any one-hour period (a span of 60 minutes or less). Return the names of people who triggered an alert, in alphabetical order. Example: daniel at 10:00, 10:40, 11:00 (three uses within 60 minutes) and luis at 09:00, 11:00, 13:00, 15:00 → ['daniel'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every pair two apart",
   "tag": "Brute force",
   "code": "class Solution:\n    def alertNames(self, keyName, keyTime):\n        times = defaultdict(list)\n        for name, t in zip(keyName, keyTime):\n            times[name].append(60 * int(t[:2]) + int(t[3:]))\n        alerts = []\n        for name, ts in times.items():\n            ts.sort()\n            if any(ts[j] - ts[i] <= 60 for i in range(len(ts)) for j in range(i + 2, len(ts))):\n                alerts.append(name)\n        return sorted(alerts)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A person is flagged if any use and a later use at least two uses ahead are within 60 minutes.",
   "frames": [],
   "alt": true
  }
 ]
};
