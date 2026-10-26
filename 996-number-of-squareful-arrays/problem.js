window.PROBLEM = {
 "id": "996",
 "title": "Number of Squareful Arrays",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "An array is 'squareful' if the sum of every two neighbouring numbers is a perfect square (like 4, 9, 16). Return the number of different orderings (permutations) of the given numbers that are squareful; orderings that look identical count once. Example: [1,17,8] → 2 (1,8,17 and 17,8,1).",
 "why": "Count the different orderings of the numbers in which every two neighbours add up to a perfect square.",
 "idea": "Group equal numbers with a counter so duplicates never create duplicate orderings. Precompute which values can follow which (sum is a square) and extend the ordering one value at a time.",
 "input": "[1,17,8]",
 "output": "2",
 "notes": [],
 "best": "Group equal numbers with a counter so duplicates never create duplicate orderings. Precompute which values can follow which (sum is a square) and extend the ordering one value at a time.",
 "variants": [
  {
   "name": "Backtracking over distinct values",
   "code": "class Solution:\n    def numSquarefulPerms(self, nums):\n        cnt = Counter(nums)\n        keys = list(cnt)\n        sq = lambda x: isqrt(x) ** 2 == x\n        adj = {a: [b for b in keys if sq(a + b)] for a in keys}\n        def dfs(last, left):\n            if left == 0: return 1\n            total = 0\n            for b in adj[last]:\n                if cnt[b]:\n                    cnt[b] -= 1\n                    total += dfs(b, left - 1)\n                    cnt[b] += 1\n            return total\n        ans = 0\n        for a in keys:\n            cnt[a] -= 1\n            ans += dfs(a, len(nums) - 1)\n            cnt[a] += 1\n        return ans",
   "time": "O(n!) worst",
   "space": "O(n)",
   "explain": "Group equal numbers with a counter so duplicates never create duplicate orderings. Precompute which values can follow which (sum is a square) and extend the ordering one value at a time.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try all permutations",
   "tag": "Brute force",
   "code": "class Solution:\n    def numSquarefulPerms(self, nums):\n        sq = lambda x: isqrt(x) ** 2 == x\n        return sum(1 for p in set(permutations(nums)) if all(sq(a + b) for a, b in zip(p, p[1:])))",
   "time": "O(n!·n)",
   "space": "O(n!)",
   "explain": "Generate all distinct permutations and test every neighbouring sum.",
   "frames": [],
   "alt": true
  }
 ]
};
