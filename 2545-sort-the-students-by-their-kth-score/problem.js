window.PROBLEM = {
 "id": "2545",
 "title": "Sort the Students by Their Kth Score",
 "level": "Medium",
 "topic": "Sorting",
 "question": "Each row of score is a student and each column an exam. Sort the students (rows) by their score in exam k, from highest to lowest. Example: [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k=2 → [[7,5,11,2],[10,6,9,1],[4,8,3,15]].",
 "why": "Sorting by column 2: scores 11, 9, 3 → rows come out [7,5,11,2], [10,6,9,1], [4,8,3,15].",
 "idea": "Each row is a student. Sort the rows by the value in column k, largest first.",
 "input": "score = [[10,6,9,1],[7,5,11,2],[4,8,3,15]], k = 2",
 "output": "[[7, 5, 11, 2], [10, 6, 9, 1], [4, 8, 3, 15]]",
 "notes": [],
 "best": "Each row is a student. Sort the rows by the value in column k, largest first.",
 "variants": [
  {
   "name": "Sort rows by one column, descending",
   "code": "class Solution:\n    def sortTheStudents(self, score, k):\n        return sorted(score, key=lambda row: -row[k])",
   "time": "O(m log m)",
   "space": "O(m)",
   "explain": "Each row is a student. Sort the rows by the value in column k, largest first.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort row indices",
   "tag": "Alternative",
   "code": "class Solution:\n    def sortTheStudents(self, score, k):\n        order = sorted(range(len(score)), key=lambda i: score[i][k], reverse=True)\n        return [score[i] for i in order]",
   "time": "O(m log m)",
   "space": "O(m)",
   "explain": "Order the row numbers by their kth score and read the rows in that order.",
   "frames": [],
   "alt": true
  }
 ]
};
