window.PROBLEM = {
 "id": "1198",
 "title": "Find Smallest Common Element in All Rows",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]] → 5.",
 "idea": "Every row is strictly increasing, so a value appears at most once per row. Count the occurrences over all rows; the smallest value with count equal to the number of rows is the answer (or −1).",
 "input": "mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]",
 "output": "5",
 "notes": [],
 "best": "Every row is strictly increasing, so a value appears at most once per row. Count the occurrences over all rows; the smallest value with count equal to the number of rows is the answer (or −1).",
 "variants": [
  {
   "name": "Count how many rows contain each value",
   "code": "class Solution:\n    def smallestCommonElement(self, mat):\n        cnt = Counter(v for row in mat for v in row)\n        return min((v for v, c in cnt.items() if c == len(mat)), default=-1)",
   "time": "O(m·n)",
   "space": "O(m·n)",
   "explain": "Every row is strictly increasing, so a value appears at most once per row. Count the occurrences over all rows; the smallest value with count equal to the number of rows is the answer (or −1).",
   "frames": []
  }
 ]
};
