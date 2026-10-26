window.PROBLEM = {
 "id": "1439",
 "title": "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "Pick one number from each row: with rows [1,3,11] and [2,4,6] the sums sorted are 3, 5, 5, 7, 7, 9 … the 5th is 7.",
 "idea": "Combine the rows one at a time. After merging the first i rows keep only the k smallest sums — a larger sum can never be among the k smallest overall. Adding the next row to those k sums gives at most k·n candidates; sort and cut again.",
 "input": "mat = [[1,3,11],[2,4,6]], k = 5",
 "output": "7",
 "notes": [],
 "best": "Combine the rows one at a time. After merging the first i rows keep only the k smallest sums — a larger sum can never be among the k smallest overall. Adding the next row to those k sums gives at most k·n candidates; sort and cut again.",
 "variants": [
  {
   "name": "Merge rows keeping the k smallest sums",
   "code": "class Solution:\n    def kthSmallest(self, mat, k):\n        cur = [0]\n        for row in mat:\n            cur = sorted(a + b for a in cur for b in row)[:k]\n        return cur[k - 1]",
   "time": "O(m · k·n log(k·n))",
   "space": "O(k·n)",
   "explain": "Combine the rows one at a time. After merging the first i rows keep only the k smallest sums — a larger sum can never be among the k smallest overall. Adding the next row to those k sums gives at most k·n candidates; sort and cut again.",
   "frames": []
  }
 ]
};
