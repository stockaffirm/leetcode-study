window.PROBLEM = {
 "id": "955",
 "title": "Delete Columns to Make Sorted II",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "['ca','bb','ac'] → delete column 0: 'a','b','c' sorted → 1.",
 "idea": "Go through the columns left to right, remembering which neighbouring pairs of strings are already strictly ordered by earlier kept columns. A column is kept if it never decreases for any still-tied pair; otherwise delete it. Kept columns that strictly order a pair mark it done.",
 "input": "strs = [\"ca\",\"bb\",\"ac\"]",
 "output": "1",
 "notes": [],
 "best": "Go through the columns left to right, remembering which neighbouring pairs of strings are already strictly ordered by earlier kept columns. A column is kept if it never decreases for any still-tied pair; otherwise delete it. Kept columns that strictly order a pair mark it done.",
 "variants": [
  {
   "name": "Greedy over columns, tracking pairs already ordered",
   "code": "class Solution:\n    def minDeletionSize(self, strs):\n        n, m = len(strs), len(strs[0])\n        done = [False] * (n - 1)\n        deleted = 0\n        for c in range(m):\n            if any(not done[i] and strs[i][c] > strs[i + 1][c] for i in range(n - 1)):\n                deleted += 1\n                continue\n            for i in range(n - 1):\n                if strs[i][c] < strs[i + 1][c]:\n                    done[i] = True\n        return deleted",
   "time": "O(n·m)",
   "space": "O(n)",
   "explain": "Go through the columns left to right, remembering which neighbouring pairs of strings are already strictly ordered by earlier kept columns. A column is kept if it never decreases for any still-tied pair; otherwise delete it. Kept columns that strictly order a pair mark it done.",
   "frames": []
  }
 ]
};
