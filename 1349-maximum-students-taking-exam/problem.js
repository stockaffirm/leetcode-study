window.PROBLEM = {
 "id": "1349",
 "title": "Maximum Students Taking Exam",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "A 3×6 room with broken seats: placing students so none sees a neighbour's paper fits at most 4.",
 "idea": "A student sees left, right, upper-left and upper-right. Go row by row; the state is the bitmask of occupied seats in the previous row. A mask for this row is valid if it only uses working seats, has no two neighbours, and shares no diagonal with the previous mask. dp[mask] = best total after this row.",
 "input": "seats = [[\"#\",\".\",\"#\",\"#\",\".\",\"#\"],[\".\",\"#\",\"#\",\"#\",\"#\",\".\"],[\"#\",\".\",\"#\",\"#\",\".\",\"#\"]]",
 "output": "4",
 "notes": [],
 "best": "A student sees left, right, upper-left and upper-right. Go row by row; the state is the bitmask of occupied seats in the previous row. A mask for this row is valid if it only uses working seats, has no two neighbours, and shares no diagonal with the previous mask. dp[mask] = best total after this row.",
 "variants": [
  {
   "name": "Row-by-row bitmask DP",
   "code": "class Solution:\n    def maxStudents(self, seats):\n        n = len(seats[0])\n        dp = {0: 0}\n        for row in seats:\n            good = sum(1 << j for j in range(n) if row[j] == '.')\n            new = {}\n            for mask in range(1 << n):\n                if mask & ~good or mask & (mask >> 1):\n                    continue\n                cnt = bin(mask).count('1')\n                for prev, val in dp.items():\n                    if mask & (prev << 1) == 0 and mask & (prev >> 1) == 0:\n                        if new.get(mask, -1) < val + cnt:\n                            new[mask] = val + cnt\n            dp = new\n        return max(dp.values())",
   "time": "O(m·4ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "A student sees left, right, upper-left and upper-right. Go row by row; the state is the bitmask of occupied seats in the previous row. A mask for this row is valid if it only uses working seats, has no two neighbours, and shares no diagonal with the previous mask. dp[mask] = best total after this row.",
   "frames": []
  }
 ]
};
