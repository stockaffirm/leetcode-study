window.PROBLEM = {
 "id": "1494",
 "title": "Parallel Courses II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "There are n courses numbered 1 to n, relations[i] = [a, b] means course a must be finished before course b can start, and you can take at most k courses in one semester (only courses whose prerequisites were finished in earlier semesters). Return the minimum number of semesters to finish all courses (it is always possible). Example: n=4, relations [[2,1],[3,1],[1,4]], k=2 → semester 1: courses 2 and 3; semester 2: course 1; semester 3: course 4 → 3.",
 "why": "Like Parallel Courses, but you can take at most k courses per semester. Fewest semesters?",
 "idea": "A set of finished courses is a bitmask. From a mask, the courses whose prerequisites are done are 'available'; try every subset of at most k of them as the next semester.",
 "input": "n=4, relations [[2,1],[3,1],[1,4]], k=2",
 "output": "3",
 "notes": [],
 "best": "A set of finished courses is a bitmask. From a mask, the courses whose prerequisites are done are 'available'; try every subset of at most k of them as the next semester.",
 "variants": [
  {
   "name": "Bitmask DP over taken courses",
   "code": "class Solution:\n    def minNumberOfSemesters(self, n, relations, k):\n        pre = [0] * n\n        for a, b in relations: pre[b - 1] |= 1 << (a - 1)\n        full = (1 << n) - 1\n        dp = [n + 1] * (1 << n)\n        dp[0] = 0\n        for mask in range(1 << n):\n            if dp[mask] > n: continue\n            avail = 0\n            for i in range(n):\n                if not mask >> i & 1 and pre[i] & mask == pre[i]: avail |= 1 << i\n            sub = avail\n            while sub:\n                if bin(sub).count('1') <= k:\n                    nm = mask | sub\n                    if dp[mask] + 1 < dp[nm]: dp[nm] = dp[mask] + 1\n                sub = (sub - 1) & avail\n        return dp[full]",
   "time": "O(3ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "A set of finished courses is a bitmask. From a mask, the courses whose prerequisites are done are 'available'; try every subset of at most k of them as the next semester.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over finished-course sets",
   "tag": "Alternative",
   "code": "class Solution:\n    def minNumberOfSemesters(self, n, relations, k):\n        pre = [0] * n\n        for a, b in relations: pre[b - 1] |= 1 << (a - 1)\n        full = (1 << n) - 1\n        level, seen, sem = {0}, {0}, 0\n        while level:\n            if full in level: return sem\n            nxt = set()\n            for mask in level:\n                avail = [i for i in range(n) if not mask >> i & 1 and pre[i] & mask == pre[i]]\n                for r in range(min(k, len(avail)), 0, -1):\n                    for comb in combinations(avail, r):\n                        nm = mask\n                        for i in comb: nm |= 1 << i\n                        if nm not in seen:\n                            seen.add(nm)\n                            nxt.add(nm)\n            level = nxt\n            sem += 1\n        return -1",
   "time": "O(3ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Each semester level holds every possible set of finished courses; expand by every group of up to k available courses.",
   "frames": [],
   "alt": true
  }
 ]
};
