window.PROBLEM = {
 "id": "2380",
 "title": "Time Needed to Rearrange a Binary String",
 "level": "Medium",
 "topic": "Array / String",
 "question": "A binary string changes every second: ALL occurrences of '01' become '10' at the same moment. Return how many seconds until no '01' is left. Example: '0110101' → 4.",
 "why": "'0110101': every second all '01' pairs swap to '10'. After 4 seconds all 1s are in front → 4.",
 "idea": "A 1 can only move left one step per second, and it cannot overtake another 1. Scan left to right keeping the number of zeros seen so far and the time t when the previous 1 finished: a new 1 that has zeros in front needs max(t + 1, zeros) seconds.",
 "input": "s = \"0110101\"",
 "output": "4",
 "notes": [],
 "best": "A 1 can only move left one step per second, and it cannot overtake another 1. Scan left to right keeping the number of zeros seen so far and the time t when the previous 1 finished: a new 1 that has zeros in front needs max(t + 1, zeros) seconds.",
 "variants": [
  {
   "name": "Each 1 waits for the zeros before it",
   "code": "class Solution:\n    def secondsToRemoveOccurrences(self, s):\n        t = zeros = 0\n        for c in s:\n            if c == '0':\n                zeros += 1\n            elif zeros:\n                t = max(t + 1, zeros)\n        return t",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A 1 can only move left one step per second, and it cannot overtake another 1. Scan left to right keeping the number of zeros seen so far and the time t when the previous 1 finished: a new 1 that has zeros in front needs max(t + 1, zeros) seconds.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate every second",
   "tag": "Brute force",
   "code": "class Solution:\n    def secondsToRemoveOccurrences(self, s):\n        t = 0\n        while '01' in s:\n            s = s.replace('01', '10')\n            t += 1\n        return t",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Replace every '01' with '10' at once and count the rounds until no '01' is left.",
   "frames": [],
   "alt": true
  }
 ]
};
