window.PROBLEM = {
 "id": "2078",
 "title": "Two Furthest Houses With Different Colors",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,1,1,6,1,1,1]: the 6 and the first or last 1 → farthest distance 3.",
 "idea": "For the farthest pair with different colours, one house can be moved to an end of the row. So compare the first house with the last different one, and the last house with the first different one; the larger distance wins.",
 "input": "colors = [1,1,1,6,1,1,1]",
 "output": "3",
 "notes": [],
 "best": "For the farthest pair with different colours, one house can be moved to an end of the row. So compare the first house with the last different one, and the last house with the first different one; the larger distance wins.",
 "variants": [
  {
   "name": "One of the two houses is an end house",
   "code": "class Solution:\n    def maxDistance(self, colors):\n        n = len(colors)\n        j = n - 1\n        while colors[j] == colors[0]:\n            j -= 1\n        i = 0\n        while colors[i] == colors[-1]:\n            i += 1\n        return max(j, n - 1 - i)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For the farthest pair with different colours, one house can be moved to an end of the row. So compare the first house with the last different one, and the last house with the first different one; the larger distance wins.",
   "frames": []
  }
 ]
};
