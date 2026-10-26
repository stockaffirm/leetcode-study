window.PROBLEM = {
 "id": "1854",
 "title": "Maximum Population Year",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
