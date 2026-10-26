window.PROBLEM = {
 "id": "1826",
 "title": "Faulty Sensor",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
