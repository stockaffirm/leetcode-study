window.PROBLEM = {
 "id": "1507",
 "title": "Reformat Date",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
