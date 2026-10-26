window.PROBLEM = {
 "id": "3648",
 "title": "Minimum Sensors to Cover Grid",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "5×5 with k=1: each sensor covers a 3×3 block → 2 × 2 = 4 sensors.",
 "idea": "A sensor covers every cell within Chebyshev distance k: a (2k+1)×(2k+1) square. Tiling the n×m grid with these squares needs ceil(n/(2k+1)) rows and ceil(m/(2k+1)) columns of sensors.",
 "input": "n = 5, m = 5, k = 1",
 "output": "4",
 "notes": [],
 "best": "A sensor covers every cell within Chebyshev distance k: a (2k+1)×(2k+1) square. Tiling the n×m grid with these squares needs ceil(n/(2k+1)) rows and ceil(m/(2k+1)) columns of sensors.",
 "variants": [
  {
   "name": "Tile the grid with (2k+1)×(2k+1) squares",
   "code": "class Solution:\n    def minSensors(self, n, m, k):\n        side = 2 * k + 1\n        return ((n + side - 1) // side) * ((m + side - 1) // side)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "A sensor covers every cell within Chebyshev distance k: a (2k+1)×(2k+1) square. Tiling the n×m grid with these squares needs ceil(n/(2k+1)) rows and ceil(m/(2k+1)) columns of sensors.",
   "frames": []
  }
 ]
};
