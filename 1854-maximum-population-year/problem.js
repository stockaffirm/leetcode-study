window.PROBLEM = {
 "id": "1854",
 "title": "Maximum Population Year",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Each person [birth, death] is counted alive in the years birth … death−1. Return the earliest year with the largest number of people alive. Example: [[1993,1999],[2000,2010]] → 1993.",
 "why": "People are alive from birth up to (not including) death. Which year (the earliest on ties) has the highest population?",
 "idea": "Add +1 at each birth year and −1 at each death year in a difference array; the running sum is the population. Take the first maximum.",
 "input": "[[1993,1999],[2000,2010]]",
 "output": "1993",
 "notes": [],
 "best": "Add +1 at each birth year and −1 at each death year in a difference array; the running sum is the population. Take the first maximum.",
 "variants": [
  {
   "name": "Difference array over the years",
   "code": "class Solution:\n    def maximumPopulation(self, logs):\n        diff = [0] * 102\n        for b, d in logs:\n            diff[b - 1950] += 1\n            diff[d - 1950] -= 1\n        cur = best = 0\n        year = 1950\n        for i in range(101):\n            cur += diff[i]\n            if cur > best: best, year = cur, 1950 + i\n        return year",
   "time": "O(n + years)",
   "space": "O(years)",
   "explain": "Add +1 at each birth year and −1 at each death year in a difference array; the running sum is the population. Take the first maximum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count each year",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumPopulation(self, logs):\n        best, year = 0, 1950\n        for y in range(1950, 2050):\n            c = sum(1 for b, d in logs if b <= y < d)\n            if c > best: best, year = c, y\n        return year",
   "time": "O(n·years)",
   "space": "O(1)",
   "explain": "For every year count the people alive and take the earliest maximum.",
   "frames": [],
   "alt": true
  }
 ]
};
