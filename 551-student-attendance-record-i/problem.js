window.PROBLEM = {
 "id": "551",
 "title": "Student Attendance Record I",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'PPALLP' → true; 'PPALLL' → false.",
 "idea": "The student is eligible when the string has fewer than two 'A's and does not contain three 'L's in a row.",
 "input": "s = \"PPALLP\"",
 "output": "true",
 "notes": [],
 "best": "The student is eligible when the string has fewer than two 'A's and does not contain three 'L's in a row.",
 "variants": [
  {
   "name": "At most one 'A' and no 'LLL'",
   "code": "class Solution:\n    def checkRecord(self, s):\n        return s.count('A') < 2 and 'LLL' not in s",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The student is eligible when the string has fewer than two 'A's and does not contain three 'L's in a row.",
   "frames": []
  }
 ]
};
