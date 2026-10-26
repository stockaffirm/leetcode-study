window.PROBLEM = {
 "id": "635",
 "title": "Design Log Storage System",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a LogSystem. put(id, timestamp) stores a log, where timestamp looks like 'Year:Month:Day:Hour:Minute:Second' e.g. '2017:01:01:23:59:59'. retrieve(start, end, granularity) returns the ids of all logs whose timestamp lies between start and end, comparing only down to the given granularity ('Year', 'Month', 'Day', 'Hour', 'Minute' or 'Second'): for 'Hour' the minutes and seconds are ignored. Example: logs 1: 2017:01:01:23:59:59, 2: 2017:01:01:22:59:59, 3: 2016:01:01:00:00:00; retrieve('2016:01:01:01:01:01','2017:01:01:23:00:00','Year') → [1,2,3], with 'Hour' → [1,2].",
 "why": "Store logs with timestamps like '2017:01:01:23:59:59' and fetch the ids between two times at a chosen precision (Year, Month, Day, Hour, Minute, Second).",
 "idea": "The precision decides how many leading characters of the timestamp matter. Cut start, end and each log's timestamp to that length and compare as text.",
 "input": "3 logs; retrieve(2016:01:01:01:01:01, 2017:01:01:23:00:00, Year / Hour)",
 "output": "[1,2,3] and [1,2]",
 "notes": [],
 "best": "The precision decides how many leading characters of the timestamp matter. Cut start, end and each log's timestamp to that length and compare as text.",
 "variants": [
  {
   "name": "Compare timestamp prefixes",
   "code": "class LogSystem:\n    def __init__(self):\n        self.logs = []\n        self.cut = {'Year': 4, 'Month': 7, 'Day': 10, 'Hour': 13, 'Minute': 16, 'Second': 19}\n    def put(self, id, timestamp):\n        self.logs.append((id, timestamp))\n    def retrieve(self, start, end, granularity):\n        k = self.cut[granularity]\n        lo, hi = start[:k], end[:k]\n        return [i for i, t in self.logs if lo <= t[:k] <= hi]",
   "time": "O(n) per retrieve",
   "space": "O(n)",
   "explain": "The precision decides how many leading characters of the timestamp matter. Cut start, end and each log's timestamp to that length and compare as text.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Pad the boundaries",
   "tag": "Alternative",
   "code": "class LogSystem:\n    def __init__(self):\n        self.logs = []\n        self.cut = {'Year': 4, 'Month': 7, 'Day': 10, 'Hour': 13, 'Minute': 16, 'Second': 19}\n        self.low = '2000:01:01:00:00:00'\n        self.high = '2017:12:31:23:59:59'\n    def put(self, id, timestamp):\n        self.logs.append((timestamp, id))\n    def retrieve(self, start, end, granularity):\n        k = self.cut[granularity]\n        lo = start[:k] + self.low[k:]\n        hi = end[:k] + self.high[k:]\n        return [i for t, i in sorted(self.logs) if lo <= t <= hi]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Fill the unused low part of the start with the smallest value and the end with the largest, then compare whole timestamps.",
   "frames": [],
   "alt": true
  }
 ]
};
