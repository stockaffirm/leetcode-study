window.PROBLEM = {
 "id": "1386",
 "title": "Cinema Seat Allocation",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
