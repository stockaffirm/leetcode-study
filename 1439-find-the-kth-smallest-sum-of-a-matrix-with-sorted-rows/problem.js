window.PROBLEM = {
 "id": "1439",
 "title": "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
 "level": "Hard",
 "topic": "Heap",
 "question": "A matrix has sorted rows. Choose exactly one number from each row; return the k-th smallest possible sum. Example: [[1,3,11],[2,4,6]], k=5 → 7.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Best-first search with a heap",
   "tag": "Alternative",
   "code": "class Solution:\n    def kthSmallest(self, mat, k):\n        m = len(mat)\n        start = tuple([0] * m)\n        s = sum(row[0] for row in mat)\n        h = [(s, start)]\n        seen = {start}\n        for _ in range(k):\n            s, idx = heappop(h)\n            for r in range(m):\n                if idx[r] + 1 < len(mat[r]):\n                    nxt = idx[:r] + (idx[r] + 1,) + idx[r + 1:]\n                    if nxt not in seen:\n                        seen.add(nxt)\n                        heappush(h, (s - mat[r][idx[r]] + mat[r][idx[r] + 1], nxt))\n        return s",
   "time": "O(k · m log k)",
   "space": "O(k · m)",
   "explain": "Start with the first number of every row and repeatedly move one row's pointer forward, popping sums in increasing order.",
   "frames": [],
   "alt": true
  }
 ]
};
