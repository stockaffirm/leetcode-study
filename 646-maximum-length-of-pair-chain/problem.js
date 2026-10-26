window.PROBLEM = {
 "id": "646",
 "title": "Maximum Length of Pair Chain",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[[1,2],[2,3],[3,4]]: take [1,2] then [3,4] → chain of 2.",
 "idea": "A pair (c,d) can follow (a,b) if b < c. This is activity selection: sort pairs by their right end and greedily take each pair that starts after the end of the last chosen one.",
 "input": "pairs = [[1,2],[2,3],[3,4]]",
 "output": "2",
 "notes": [],
 "best": "A pair (c,d) can follow (a,b) if b < c. This is activity selection: sort pairs by their right end and greedily take each pair that starts after the end of the last chosen one.",
 "variants": [
  {
   "name": "Sort by end, take whatever starts after",
   "code": "class Solution:\n    def findLongestChain(self, pairs):\n        end = float('-inf')\n        count = 0\n        for a, b in sorted(pairs, key=lambda p: p[1]):\n            if a > end:\n                end = b\n                count += 1\n        return count",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "A pair (c,d) can follow (a,b) if b < c. This is activity selection: sort pairs by their right end and greedily take each pair that starts after the end of the last chosen one.",
   "frames": []
  }
 ]
};
