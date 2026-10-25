window.PROBLEM = {
 "id": "3437",
 "title": "Permutations III",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "An alternating permutation of 1…n has no two neighbouring numbers that are both odd or both even. Return all alternating permutations in lexicographical order. Example: n=4 → [[1,2,3,4],[1,4,3,2],[2,1,4,3],[2,3,4,1],[3,2,1,4],[3,4,1,2],[4,1,2,3],[4,3,2,1]].",
 "why": "n=3: 1,2,3 and 3,2,1 alternate odd/even → [[1,2,3],[3,2,1]].",
 "idea": "Build permutations of 1…n by backtracking, trying numbers in increasing order so results come out sorted, and only allowing a number whose parity differs from the previous one.",
 "input": "n = 4",
 "output": "[[1,2,3,4],[1,4,3,2],[2,1,4,3],[2,3,4,1],[3,2,1,4],[3,4,1,2],[4,1,2,3],[4,3,2,1]]",
 "notes": [],
 "best": "Build permutations of 1…n by backtracking, trying numbers in increasing order so results come out sorted, and only allowing a number whose parity differs from the previous one.",
 "variants": [
  {
   "name": "Backtracking with alternating parity",
   "code": "class Solution:\n    def permute(self, n):\n        res = []\n        used = [False] * (n + 1)\n        cur = []\n        def go():\n            if len(cur) == n:\n                res.append(cur[:])\n                return\n            for v in range(1, n + 1):\n                if not used[v] and (not cur or (cur[-1] + v) % 2 == 1):\n                    used[v] = True\n                    cur.append(v)\n                    go()\n                    cur.pop()\n                    used[v] = False\n        go()\n        return res",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Build permutations of 1…n by backtracking, trying numbers in increasing order so results come out sorted, and only allowing a number whose parity differs from the previous one.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Filter all permutations",
   "tag": "Brute force",
   "code": "class Solution:\n    def permute(self, n):\n        return [list(p) for p in permutations(range(1, n + 1))\n                if all((a + b) % 2 == 1 for a, b in zip(p, p[1:]))]",
   "time": "O(n·n!)",
   "space": "O(n)",
   "explain": "Generate every permutation in order and keep those that alternate parity.",
   "frames": [],
   "alt": true
  }
 ]
};
