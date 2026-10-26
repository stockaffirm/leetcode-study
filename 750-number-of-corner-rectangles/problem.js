window.PROBLEM = {
 "id": "750",
 "title": "Number Of Corner Rectangles",
 "level": "Medium",
 "topic": "Matrix",
 "question": "A grid contains 0s and 1s. A corner rectangle is formed by four 1s at the corners of an axis-aligned rectangle (the other cells do not matter). Return the number of corner rectangles. Example: [[1,0,0,1,0],[0,0,1,0,1],[0,0,0,1,0],[1,0,1,0,1]] → 1.",
 "why": "Only one rectangle has four 1s in its corners: rows 1 and 3 share the columns 2 and 4.",
 "idea": "A rectangle is defined by two rows and two columns that are 1 in both rows. For each pair of rows count the columns where both are 1 (c); they form c·(c−1)/2 rectangles.",
 "input": "grid = [[1,0,0,1,0],[0,0,1,0,1],[0,0,0,1,0],[1,0,1,0,1]]",
 "output": "1",
 "notes": [],
 "best": "A rectangle is defined by two rows and two columns that are 1 in both rows. For each pair of rows count the columns where both are 1 (c); they form c·(c−1)/2 rectangles.",
 "variants": [
  {
   "name": "Count common 1-columns of row pairs",
   "code": "class Solution:\n    def countCornerRectangles(self, grid):\n        m = len(grid)\n        res = 0\n        for i in range(m):\n            for j in range(i + 1, m):\n                c = sum(a & b for a, b in zip(grid[i], grid[j]))\n                res += c * (c - 1) // 2\n        return res",
   "time": "O(m²·n)",
   "space": "O(1)",
   "explain": "A rectangle is defined by two rows and two columns that are 1 in both rows. For each pair of rows count the columns where both are 1 (c); they form c·(c−1)/2 rectangles.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count column pairs per row",
   "tag": "Alternative",
   "code": "class Solution:\n    def countCornerRectangles(self, grid):\n        seen = defaultdict(int)\n        res = 0\n        for row in grid:\n            ones = [j for j, v in enumerate(row) if v]\n            for a in range(len(ones)):\n                for b in range(a + 1, len(ones)):\n                    pair = (ones[a], ones[b])\n                    res += seen[pair]\n                    seen[pair] += 1\n        return res",
   "time": "O(m·n²)",
   "space": "O(n²)",
   "explain": "For each row and each pair of its 1-columns, every earlier row with the same pair forms a rectangle.",
   "frames": [],
   "alt": true
  }
 ]
};
