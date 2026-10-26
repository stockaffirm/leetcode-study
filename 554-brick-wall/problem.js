window.PROBLEM = {
 "id": "554",
 "title": "Brick Wall",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "The best vertical line passes through 4 joints (at x = 4), so it crosses 6 − 4 = 2 bricks.",
 "idea": "A vertical line that crosses the fewest bricks goes through the most joints. Count how many rows have a joint at each x position (ignoring the right edge of the wall); the answer is the number of rows minus the best count.",
 "input": "wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]",
 "output": "2",
 "notes": [],
 "best": "A vertical line that crosses the fewest bricks goes through the most joints. Count how many rows have a joint at each x position (ignoring the right edge of the wall); the answer is the number of rows minus the best count.",
 "variants": [
  {
   "name": "Count where the brick joints line up",
   "code": "class Solution:\n    def leastBricks(self, wall):\n        cnt = Counter()\n        for row in wall:\n            pos = 0\n            for b in row[:-1]:\n                pos += b\n                cnt[pos] += 1\n        return len(wall) - max(cnt.values(), default=0)",
   "time": "O(total bricks)",
   "space": "O(total bricks)",
   "explain": "A vertical line that crosses the fewest bricks goes through the most joints. Count how many rows have a joint at each x position (ignoring the right edge of the wall); the answer is the number of rows minus the best count.",
   "frames": []
  }
 ]
};
