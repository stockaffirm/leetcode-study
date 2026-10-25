window.PROBLEM = {
 "id": "1386",
 "title": "Cinema Seat Allocation",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "A cinema has n rows with seats 1…10. An aisle separates seats 3|4 and 7|8, so a family of four sitting together can use seats 2–5, 4–7 or 6–9 (also 2–5 and 6–9 together = two families). Given the reserved seats [row, seat], return the maximum number of families that fit. Example: n=3, reserved [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]] → 4.",
 "why": "A cinema has n rows of 10 seats. A family of four needs four adjacent seats in one row; an aisle splits seats 3|4 and 7|8, so only seats 2–5, 4–7 and 6–9 work. Given the reserved seats, how many families fit?",
 "idea": "Rows without reservations hold 2 families. For each reserved row use a bitmask and check the three blocks: left+right free → 2 families, any single block free → 1.",
 "input": "n=3, reserved [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]",
 "output": "4",
 "notes": [],
 "best": "Rows without reservations hold 2 families. For each reserved row use a bitmask and check the three blocks: left+right free → 2 families, any single block free → 1.",
 "variants": [
  {
   "name": "Bitmask per row",
   "code": "class Solution:\n    def maxNumberOfFamilies(self, n, reservedSeats):\n        rows = defaultdict(int)\n        for r, s in reservedSeats: rows[r] |= 1 << s\n        total = 2 * (n - len(rows))\n        for mask in rows.values():\n            left = not mask & 0x3C\n            mid = not mask & 0xF0\n            right = not mask & 0x3C0\n            if left and right: total += 2\n            elif left or mid or right: total += 1\n        return total",
   "time": "O(r)",
   "space": "O(r)",
   "explain": "Rows without reservations hold 2 families. For each reserved row use a bitmask and check the three blocks: left+right free → 2 families, any single block free → 1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check each row's reserved set",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxNumberOfFamilies(self, n, reservedSeats):\n        rows = defaultdict(set)\n        for r, s in reservedSeats: rows[r].add(s)\n        total = 2 * (n - len(rows))\n        for taken in rows.values():\n            ok = lambda a, b: all(s not in taken for s in range(a, b + 1))\n            left, mid, right = ok(2, 5), ok(4, 7), ok(6, 9)\n            if left and right: total += 2\n            elif left or mid or right: total += 1\n        return total",
   "time": "O(r)",
   "space": "O(r)",
   "explain": "For each row with reservations test the three blocks seat by seat.",
   "frames": [],
   "alt": true
  }
 ]
};
