window.PROBLEM = {
 "id": "1507",
 "title": "Reformat Date",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Convert a date like '20th Oct 2052' (day with suffix, three-letter month, year) to the format YYYY-MM-DD. Example: '20th Oct 2052' → '2052-10-20'.",
 "why": "'20th Oct 2052' → '2052-10-20'.",
 "idea": "Split into day, month name and year. Strip the two-letter suffix from the day, look the month up in a list, and zero-pad both to two digits.",
 "input": "date = \"20th Oct 2052\"",
 "output": "\"2052-10-20\"",
 "notes": [],
 "best": "Split into day, month name and year. Strip the two-letter suffix from the day, look the month up in a list, and zero-pad both to two digits.",
 "variants": [
  {
   "name": "Split and map the month name",
   "code": "class Solution:\n    def reformatDate(self, date):\n        months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"]\n        d, m, y = date.split()\n        return \"%s-%02d-%02d\" % (y, months.index(m) + 1, int(d[:-2]))",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Split into day, month name and year. Strip the two-letter suffix from the day, look the month up in a list, and zero-pad both to two digits.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Month dictionary and slicing",
   "tag": "Alternative",
   "code": "class Solution:\n    def reformatDate(self, date):\n        mm = {\"Jan\": \"01\", \"Feb\": \"02\", \"Mar\": \"03\", \"Apr\": \"04\", \"May\": \"05\", \"Jun\": \"06\",\n              \"Jul\": \"07\", \"Aug\": \"08\", \"Sep\": \"09\", \"Oct\": \"10\", \"Nov\": \"11\", \"Dec\": \"12\"}\n        parts = date.split(' ')\n        day = parts[0][:-2].zfill(2)\n        return parts[2] + '-' + mm[parts[1]] + '-' + day",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Look the month up in a dict and slice the day digits.",
   "frames": [],
   "alt": true
  }
 ]
};
