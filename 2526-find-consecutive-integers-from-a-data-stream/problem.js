window.PROBLEM = {
 "id": "2526",
 "title": "Find Consecutive Integers from a Data Stream",
 "level": "Medium",
 "topic": "Design",
 "question": "Design DataStream(value, k): consec(num) adds num to the stream and returns true if the last k integers are all equal to value (false if fewer than k have arrived). Example: value=4, k=3, stream 4, 4, 4, 3 → false, false, true, false.",
 "why": "DataStream(4, 3): after 4, 4, 4 the last three are all 4 → true; a 3 breaks the run.",
 "idea": "Keep a counter of how many equal-to-value integers have just arrived in a row: increase it when num == value, reset it to 0 otherwise. consec returns true when the counter is at least k.",
 "input": "DataStream(4,3); consec(4); consec(4); consec(4); consec(3)",
 "output": "[False, False, True, False]",
 "notes": [],
 "best": "Keep a counter of how many equal-to-value integers have just arrived in a row: increase it when num == value, reset it to 0 otherwise. consec returns true when the counter is at least k.",
 "variants": [
  {
   "name": "Count the current run of the target value",
   "code": "class DataStream:\n    def __init__(self, value, k):\n        self.value = value\n        self.k = k\n        self.run = 0\n\n    def consec(self, num):\n        self.run = self.run + 1 if num == self.value else 0\n        return self.run >= self.k",
   "time": "O(1) per call",
   "space": "O(1)",
   "explain": "Keep a counter of how many equal-to-value integers have just arrived in a row: increase it when num == value, reset it to 0 otherwise. consec returns true when the counter is at least k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Keep the last k numbers",
   "tag": "Alternative",
   "code": "class DataStream:\n    def __init__(self, value, k):\n        self.value = value\n        self.k = k\n        self.window = deque(maxlen=k)\n\n    def consec(self, num):\n        self.window.append(num)\n        return len(self.window) == self.k and all(x == self.value for x in self.window)",
   "time": "O(k) per call",
   "space": "O(k)",
   "explain": "Store the last k integers in a deque and check that all of them equal value.",
   "frames": [],
   "alt": true
  }
 ]
};
