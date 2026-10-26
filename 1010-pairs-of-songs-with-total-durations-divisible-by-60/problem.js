window.PROBLEM = {
 "id": "1010",
 "title": "Pairs of Songs With Total Durations Divisible by 60",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "You are given a list time where time[i] is the length of song i in seconds. Return the number of pairs of songs (i < j) whose total length is divisible by 60. Example: [30,20,150,100,40] → (30,150), (20,100), (20,40) → 3.",
 "why": "Count pairs of songs whose lengths add up to a multiple of 60 seconds.",
 "idea": "Only the remainder mod 60 matters. For each song, add the number of earlier songs whose remainder is (60 − r) mod 60, then record this song's remainder.",
 "input": "[30, 20, 150, 100, 40]",
 "output": "3",
 "notes": [],
 "best": "Only the remainder mod 60 matters. For each song, add the number of earlier songs whose remainder is (60 − r) mod 60, then record this song's remainder.",
 "variants": [
  {
   "name": "Count by remainder mod 60",
   "code": "class Solution:\n    def numPairsDivisibleBy60(self, time):\n        cnt = [0] * 60\n        pairs = 0\n        for t in time:\n            r = t % 60\n            pairs += cnt[(60 - r) % 60]\n            cnt[r] += 1\n        return pairs",
   "time": "O(n)",
   "space": "O(60)",
   "explain": "Only the remainder mod 60 matters. For each song, add the number of earlier songs whose remainder is (60 − r) mod 60, then record this song's remainder.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def numPairsDivisibleBy60(self, time):\n        count = 0\n        for i in range(len(time)):\n            for j in range(i + 1, len(time)):\n                if (time[i] + time[j]) % 60 == 0: count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Add every pair of song lengths.",
   "frames": [],
   "alt": true
  }
 ]
};
