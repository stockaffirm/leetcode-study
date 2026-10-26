window.PROBLEM = {
 "id": "351",
 "title": "Android Unlock Patterns",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "m=1, n=1: any single dot → 9 patterns; m=1, n=2 → 9 + 56 = 65.",
 "idea": "Count paths over the 3×3 keypad with length between m and n, never reusing a key. Moving between two keys that have a key exactly between them is allowed only if that middle key was already used (the 'skip' table). Use symmetry: patterns from corners are all equal, as are those from edges, so count from keys 1, 2 and 5 and multiply by 4, 4 and 1.",
 "input": "m = 1, n = 1",
 "output": "9",
 "notes": [],
 "best": "Count paths over the 3×3 keypad with length between m and n, never reusing a key. Moving between two keys that have a key exactly between them is allowed only if that middle key was already used (the 'skip' table). Use symmetry: patterns from corners are all equal, as are those from edges, so count from keys 1, 2 and 5 and multiply by 4, 4 and 1.",
 "variants": [
  {
   "name": "Backtracking with a skip table",
   "code": "class Solution:\n    def numberOfPatterns(self, m, n):\n        skip = [[0] * 10 for _ in range(10)]\n        for a, b, mid in ((1, 3, 2), (1, 7, 4), (3, 9, 6), (7, 9, 8), (1, 9, 5), (3, 7, 5), (2, 8, 5), (4, 6, 5)):\n            skip[a][b] = skip[b][a] = mid\n        used = [False] * 10\n        def dfs(cur, length):\n            cnt = 1 if length >= m else 0\n            if length == n:\n                return cnt\n            used[cur] = True\n            for nxt in range(1, 10):\n                if not used[nxt] and (skip[cur][nxt] == 0 or used[skip[cur][nxt]]):\n                    cnt += dfs(nxt, length + 1)\n            used[cur] = False\n            return cnt\n        return 4 * dfs(1, 1) + 4 * dfs(2, 1) + dfs(5, 1)",
   "time": "O(9!)",
   "space": "O(9)",
   "explain": "Count paths over the 3×3 keypad with length between m and n, never reusing a key. Moving between two keys that have a key exactly between them is allowed only if that middle key was already used (the 'skip' table). Use symmetry: patterns from corners are all equal, as are those from edges, so count from keys 1, 2 and 5 and multiply by 4, 4 and 1.",
   "frames": []
  }
 ]
};
