window.PROBLEM = {
 "id": "2380",
 "title": "Time Needed to Rearrange a Binary String",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
