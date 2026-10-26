window.PROBLEM = {
 "id": "1349",
 "title": "Maximum Students Taking Exam",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "seats is a grid where '.' is a good seat and '#' is broken. A student can see the paper of the student directly left or right, and of those at upper-left and upper-right (not directly in front/behind). Place students on good seats so nobody can cheat and return the maximum number of students. Example: the 3×6 sample grid → 4.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Top-down memo over rows",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxStudents(self, seats):\n        m, n = len(seats), len(seats[0])\n        good = [sum(1 << j for j in range(n) if seats[i][j] == '.') for i in range(m)]\n        @lru_cache(None)\n        def go(i, prev):\n            if i == m:\n                return 0\n            best = 0\n            for mask in range(1 << n):\n                if mask & ~good[i] or mask & (mask >> 1):\n                    continue\n                if mask & (prev << 1) or mask & (prev >> 1):\n                    continue\n                best = max(best, bin(mask).count('1') + go(i + 1, mask))\n            return best\n        return go(0, 0)",
   "time": "O(m·4ⁿ)",
   "space": "O(m·2ⁿ)",
   "explain": "best(row, previous mask) tries every valid mask for this row.",
   "frames": [],
   "alt": true
  }
 ]
};
