window.PROBLEM = {
 "id": "1970",
 "title": "Last Day Where You Can Still Cross",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "There is a grid of row × col cells, all land on day 0. Each day one more cell becomes water, given by cells[i] = [row, col] (counting from 1). You can walk over land cells up, down, left and right. Return the last day on which you can still walk from ANY cell in the top row to ANY cell in the bottom row. Example: a 2 × 2 grid with cells flooding in the order [1,1], [2,1], [1,2], [2,2] → on day 2 you can still go down the right column, day 3 is too late → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Reverse union-find",
   "tag": "Alternative",
   "code": "class Solution:\n    def latestDayToCross(self, row, col, cells):\n        parent = {}\n        def find(x):\n            parent.setdefault(x, x)\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        land = set()\n        for day in range(len(cells) - 1, -1, -1):\n            r, c = cells[day][0] - 1, cells[day][1] - 1\n            land.add((r, c))\n            if r == 0: parent[find((r, c))] = find('T')\n            if r == row - 1: parent[find((r, c))] = find('B')\n            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):\n                nb = (r + dr, c + dc)\n                if nb in land: parent[find((r, c))] = find(nb)\n            if find('T') == find('B'): return day\n        return 0",
   "time": "O(r·c·α)",
   "space": "O(r·c)",
   "explain": "Run time backwards: add cells back as land and stop when the top and bottom become connected.",
   "frames": [],
   "alt": true
  }
 ]
};
