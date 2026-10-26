window.PROBLEM = {
 "id": "1826",
 "title": "Faulty Sensor",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "Two sensors measure the same thing. If one is faulty, exactly one reading is DROPPED, all later readings shift one position to the left, and the last position gets an arbitrary value (different from the true one). Given both sensors' readings, return which sensor (1 or 2) is faulty, or −1 if it is impossible to tell (or none). Example: [2,3,4,5] and [2,1,3,4] → 1.",
 "why": "[2,3,4,5] vs [2,1,3,4]: the first difference is at index 1. Sensor 1's tail [3,4] equals sensor 2's shifted tail [3,4], so sensor 1 dropped a value → 1.",
 "idea": "A defective sensor drops one reading and shifts all later readings one step left. Find the first index i where they differ, then check whether sensor 1's readings from i equal sensor 2's readings from i+1 (sensor 1 defective) or the other way round. If both or neither fit, answer −1.",
 "input": "sensor1 = [2,3,4,5], sensor2 = [2,1,3,4]",
 "output": "1",
 "notes": [],
 "best": "A defective sensor drops one reading and shifts all later readings one step left. Find the first index i where they differ, then check whether sensor 1's readings from i equal sensor 2's readings from i+1 (sensor 1 defective) or the other way round. If both or neither fit, answer −1.",
 "variants": [
  {
   "name": "First mismatch, then check the shifted tails",
   "code": "class Solution:\n    def badSensor(self, sensor1, sensor2):\n        n = len(sensor1)\n        i = 0\n        while i < n and sensor1[i] == sensor2[i]:\n            i += 1\n        bad1 = sensor1[i:n - 1] == sensor2[i + 1:]\n        bad2 = sensor2[i:n - 1] == sensor1[i + 1:]\n        if bad1 and bad2:\n            return -1\n        if bad1:\n            return 1\n        if bad2:\n            return 2\n        return -1",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A defective sensor drops one reading and shifts all later readings one step left. Find the first index i where they differ, then check whether sensor 1's readings from i equal sensor 2's readings from i+1 (sensor 1 defective) or the other way round. If both or neither fit, answer −1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every possible drop position",
   "tag": "Brute force",
   "code": "class Solution:\n    def badSensor(self, sensor1, sensor2):\n        n = len(sensor1)\n        def possible(x, y):\n            return any(x[:i] == y[:i] and x[i:n - 1] == y[i + 1:] for i in range(n))\n        p1, p2 = possible(sensor1, sensor2), possible(sensor2, sensor1)\n        if p1 and not p2:\n            return 1\n        if p2 and not p1:\n            return 2\n        return -1",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "A sensor can be the defective one if, for some position i, the readings agree before i and are shifted by one from i on.",
   "frames": [],
   "alt": true
  }
 ]
};
