window.PROBLEM = {
 "id": "552",
 "title": "Student Attendance Record II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=2 → 8 of the 9 two-day records are rewarded (only 'AA' fails).",
 "idea": "A record is rewarded if it has fewer than 2 'A's and no 'LLL'. Track the number of valid records by state (absences used 0/1, trailing late days 0/1/2) and extend one day at a time with 'P', 'A' or 'L'. Sum the six states after n days modulo 1e9+7.",
 "input": "n = 2",
 "output": "8",
 "notes": [],
 "best": "A record is rewarded if it has fewer than 2 'A's and no 'LLL'. Track the number of valid records by state (absences used 0/1, trailing late days 0/1/2) and extend one day at a time with 'P', 'A' or 'L'. Sum the six states after n days modulo 1e9+7.",
 "variants": [
  {
   "name": "DP over (absences, current late streak)",
   "code": "class Solution:\n    def checkRecord(self, n):\n        MOD = 10**9 + 7\n        dp = {(a, l): 0 for a in range(2) for l in range(3)}\n        dp[(0, 0)] = 1\n        for _ in range(n):\n            new = {k: 0 for k in dp}\n            for (a, l), ways in dp.items():\n                new[(a, 0)] = (new[(a, 0)] + ways) % MOD\n                if a == 0:\n                    new[(1, 0)] = (new[(1, 0)] + ways) % MOD\n                if l < 2:\n                    new[(a, l + 1)] = (new[(a, l + 1)] + ways) % MOD\n            dp = new\n        return sum(dp.values()) % MOD",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A record is rewarded if it has fewer than 2 'A's and no 'LLL'. Track the number of valid records by state (absences used 0/1, trailing late days 0/1/2) and extend one day at a time with 'P', 'A' or 'L'. Sum the six states after n days modulo 1e9+7.",
   "frames": []
  }
 ]
};
