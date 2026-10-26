window.PROBLEM = {
 "id": "1947",
 "title": "Maximum Compatibility Score Sum",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "There are m students and m mentors who answered the same n yes/no questions. Pair each student with a different mentor; the compatibility score of a pair is the number of equal answers. Return the maximum total score. Example: students [[1,1,0],[1,0,1],[0,0,1]], mentors [[1,0,0],[0,0,1],[1,1,0]] → 8.",
 "why": "The best pairing of 3 students with 3 mentors adds up to 3 + 2 + 3 = 8 matching answers.",
 "idea": "There are at most 8 students, so try every way to assign mentors (permutations). Precompute how many answers match for every student/mentor pair and take the best total.",
 "input": "students = [[1,1,0],[1,0,1],[0,0,1]], mentors = [[1,0,0],[0,0,1],[1,1,0]]",
 "output": "8",
 "notes": [],
 "best": "There are at most 8 students, so try every way to assign mentors (permutations). Precompute how many answers match for every student/mentor pair and take the best total.",
 "variants": [
  {
   "name": "Try every student–mentor pairing",
   "code": "class Solution:\n    def maxCompatibilitySum(self, students, mentors):\n        m = len(students)\n        score = [[sum(a == b for a, b in zip(s, t)) for t in mentors] for s in students]\n        return max(sum(score[i][p[i]] for i in range(m)) for p in permutations(range(m)))",
   "time": "O(m! · m)",
   "space": "O(m²)",
   "explain": "There are at most 8 students, so try every way to assign mentors (permutations). Precompute how many answers match for every student/mentor pair and take the best total.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bitmask DP over used mentors",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxCompatibilitySum(self, students, mentors):\n        m = len(students)\n        score = [[sum(a == b for a, b in zip(s, t)) for t in mentors] for s in students]\n        dp = [0] * (1 << m)\n        for mask in range(1 << m):\n            i = bin(mask).count(\"1\")\n            if i == m:\n                continue\n            for j in range(m):\n                if not mask >> j & 1:\n                    nm = mask | 1 << j\n                    dp[nm] = max(dp[nm], dp[mask] + score[i][j])\n        return dp[-1]",
   "time": "O(2^m · m)",
   "space": "O(2^m)",
   "explain": "dp[mask] is the best score after giving the first popcount(mask) students the mentors in mask.",
   "frames": [],
   "alt": true
  }
 ]
};
