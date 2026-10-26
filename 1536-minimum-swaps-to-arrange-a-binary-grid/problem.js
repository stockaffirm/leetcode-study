window.PROBLEM = {
 "id": "1536",
 "title": "Minimum Swaps to Arrange a Binary Grid",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[[0,0,1],[1,1,0],[1,0,0]] → 3 adjacent row swaps make all cells above the diagonal zero.",
 "idea": "The grid is valid when all cells above the main diagonal are 0, i.e. row i ends with at least n−1−i zeros. Compute trailing zeros per row. For i = 0, 1, … find the first row at or below i with enough trailing zeros and bubble it up with adjacent swaps (count the distance). If none exists the answer is −1.",
 "input": "grid = [[0,0,1],[1,1,0],[1,0,0]]",
 "output": "3",
 "notes": [],
 "best": "The grid is valid when all cells above the main diagonal are 0, i.e. row i ends with at least n−1−i zeros. Compute trailing zeros per row. For i = 0, 1, … find the first row at or below i with enough trailing zeros and bubble it up with adjacent swaps (count the distance). If none exists the answer is −1.",
 "variants": [
  {
   "name": "Row i needs n−1−i trailing zeros; bubble the nearest one up",
   "code": "class Solution:\n    def minSwaps(self, grid):\n        n = len(grid)\n        tz = []\n        for row in grid:\n            c = 0\n            for v in reversed(row):\n                if v:\n                    break\n                c += 1\n            tz.append(c)\n        res = 0\n        for i in range(n):\n            need = n - 1 - i\n            j = i\n            while j < n and tz[j] < need:\n                j += 1\n            if j == n:\n                return -1\n            res += j - i\n            tz.insert(i, tz.pop(j))\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "The grid is valid when all cells above the main diagonal are 0, i.e. row i ends with at least n−1−i zeros. Compute trailing zeros per row. For i = 0, 1, … find the first row at or below i with enough trailing zeros and bubble it up with adjacent swaps (count the distance). If none exists the answer is −1.",
   "frames": []
  }
 ]
};
