window.PROBLEM = {
 "id": "3547",
 "title": "Maximum Sum of Edge Values in a Graph",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "n=4 path 0-1-2-3 → values 1,3,4,2 → 3 + 12 + 8 = 23.",
 "idea": "Every node has degree ≤ 2, so the connected graph is a path or a cycle. To maximise the sum of products, big numbers must be neighbours: line the values up with n in the middle, n−1 to its right, n−2 to its left, n−3 on the right … The arrangement is the same for a path; a cycle also joins the two ends (the values 1 and 2).",
 "input": "n = 4, edges = [[0,1],[1,2],[2,3]]",
 "output": "23",
 "notes": [],
 "best": "Every node has degree ≤ 2, so the connected graph is a path or a cycle. To maximise the sum of products, big numbers must be neighbours: line the values up with n in the middle, n−1 to its right, n−2 to its left, n−3 on the right … The arrangement is the same for a path; a cycle also joins the two ends (the values 1 and 2).",
 "variants": [
  {
   "name": "Big numbers in the middle: spread values outwards",
   "code": "class Solution:\n    def maxScore(self, n, edges):\n        line = deque([n])\n        for v in range(n - 1, 0, -1):\n            if (n - v) % 2:\n                line.append(v)\n            else:\n                line.appendleft(v)\n        line = list(line)\n        total = sum(a * b for a, b in zip(line, line[1:]))\n        if len(edges) == n:\n            total += line[0] * line[-1]\n        return total",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Every node has degree ≤ 2, so the connected graph is a path or a cycle. To maximise the sum of products, big numbers must be neighbours: line the values up with n in the middle, n−1 to its right, n−2 to its left, n−3 on the right … The arrangement is the same for a path; a cycle also joins the two ends (the values 1 and 2).",
   "frames": []
  }
 ]
};
