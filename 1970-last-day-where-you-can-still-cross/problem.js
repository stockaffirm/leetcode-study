window.PROBLEM = {
 "id": "1970",
 "title": "Last Day Where You Can Still Cross",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "Each day one more cell floods. What is the last day you can still walk from the top row to the bottom row over land?",
 "idea": "If you can cross on day d you could on any earlier day: binary-search d. To test a day, flood the first d cells and run BFS from all top land cells to see whether the bottom row is reached.",
 "input": "2×2, flooded cells [[1,1],[2,1],[1,2],[2,2]]",
 "output": "2",
 "notes": [],
 "best": "If you can cross on day d you could on any earlier day: binary-search d. To test a day, flood the first d cells and run BFS from all top land cells to see whether the bottom row is reached.",
 "variants": [
  {
   "name": "Binary search on the day + BFS",
   "code": "class Solution:\n    def latestDayToCross(self, row, col, cells):\n        def can(day):\n            water = {(r - 1, c - 1) for r, c in cells[:day]}\n            q = deque((0, c) for c in range(col) if (0, c) not in water)\n            seen = set(q)\n            while q:\n                r, c = q.popleft()\n                if r == row - 1: return True\n                for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                    a, b = r + dr, c + dc\n                    if 0 <= a < row and 0 <= b < col and (a, b) not in water and (a, b) not in seen:\n                        seen.add((a, b))\n                        q.append((a, b))\n            return False\n        lo, hi = 0, len(cells)\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if can(mid): lo = mid\n            else: hi = mid - 1\n        return lo",
   "time": "O(r·c·log(r·c))",
   "space": "O(r·c)",
   "explain": "If you can cross on day d you could on any earlier day: binary-search d. To test a day, flood the first d cells and run BFS from all top land cells to see whether the bottom row is reached.",
   "frames": []
  }
 ]
};
