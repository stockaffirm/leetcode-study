window.PROBLEM = {
 "id": "3015",
 "title": "Count the Number of Houses at a Certain Distance I",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "n=5, shortcut 2–4: 10 ordered pairs at distance 1, 8 at distance 2, 2 at distance 3 → [10,8,2,0,0].",
 "idea": "Houses 1..n lie on a line plus one extra street between x and y. The distance between i < j is the smaller of the direct walk j − i and the two routes using the shortcut (i → x, cross, y → j or i → y, cross, x → j). Count each unordered pair twice.",
 "input": "n = 5, x = 2, y = 4",
 "output": "[10, 8, 2, 0, 0]",
 "notes": [],
 "best": "Houses 1..n lie on a line plus one extra street between x and y. The distance between i < j is the smaller of the direct walk j − i and the two routes using the shortcut (i → x, cross, y → j or i → y, cross, x → j). Count each unordered pair twice.",
 "variants": [
  {
   "name": "Shortest path of every pair with the shortcut",
   "code": "class Solution:\n    def countOfPairs(self, n, x, y):\n        res = [0] * n\n        for i in range(1, n + 1):\n            for j in range(i + 1, n + 1):\n                d = min(j - i, abs(x - i) + 1 + abs(y - j), abs(y - i) + 1 + abs(x - j))\n                res[d - 1] += 2\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Houses 1..n lie on a line plus one extra street between x and y. The distance between i < j is the smaller of the direct walk j − i and the two routes using the shortcut (i → x, cross, y → j or i → y, cross, x → j). Count each unordered pair twice.",
   "frames": []
  }
 ]
};
