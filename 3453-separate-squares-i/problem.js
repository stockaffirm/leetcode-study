window.PROBLEM = {
 "id": "3453",
 "title": "Separate Squares I",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "Two unit squares at y=0 and y=2: a line at y=1 puts half the area on each side → 1.0.",
 "idea": "The area below a horizontal line y = h grows continuously with h. Binary search h in [min y, max top] until the area below equals half the total (area of each square below the line is side × clamp(h − y, 0, side)). Round to 5 decimals.",
 "input": "squares = [[0,0,1],[2,2,1]]",
 "output": "1.0",
 "notes": [],
 "best": "The area below a horizontal line y = h grows continuously with h. Binary search h in [min y, max top] until the area below equals half the total (area of each square below the line is side × clamp(h − y, 0, side)). Round to 5 decimals.",
 "variants": [
  {
   "name": "Binary search the line where area below = area above",
   "code": "class Solution:\n    def separateSquares(self, squares):\n        total = sum(l * l for _, _, l in squares)\n        lo = min(y for _, y, _ in squares)\n        hi = max(y + l for _, y, l in squares)\n        def below(h):\n            return sum(l * min(max(h - y, 0), l) for _, y, l in squares)\n        for _ in range(100):\n            mid = (lo + hi) / 2\n            if below(mid) * 2 < total:\n                lo = mid\n            else:\n                hi = mid\n        return round(lo, 5)",
   "time": "O(n log range)",
   "space": "O(1)",
   "explain": "The area below a horizontal line y = h grows continuously with h. Binary search h in [min y, max top] until the area below equals half the total (area of each square below the line is side × clamp(h − y, 0, side)). Round to 5 decimals.",
   "frames": []
  }
 ]
};
