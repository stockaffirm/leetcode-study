window.PROBLEM = {
 "id": "1079",
 "title": "Letter Tile Possibilities",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "You have tiles with letters printed on them. Return the number of distinct non-empty letter sequences you can make from them. Example: 'AAB' → 8.",
 "why": "'AAB': A, B, AA, AB, BA, AAB, ABA, BAA → 8 sequences.",
 "idea": "Keep a count of each available letter. Every time you can place a letter you get a new sequence: add 1 and continue building from the remaining counts. Using counts (not positions) avoids counting equal sequences twice.",
 "input": "tiles = \"AAB\"",
 "output": "8",
 "notes": [],
 "best": "Keep a count of each available letter. Every time you can place a letter you get a new sequence: add 1 and continue building from the remaining counts. Using counts (not positions) avoids counting equal sequences twice.",
 "variants": [
  {
   "name": "Count sequences with letter counts",
   "code": "class Solution:\n    def numTilePossibilities(self, tiles):\n        cnt = Counter(tiles)\n        def dfs():\n            total = 0\n            for c in cnt:\n                if cnt[c]:\n                    cnt[c] -= 1\n                    total += 1 + dfs()\n                    cnt[c] += 1\n            return total\n        return dfs()",
   "time": "O(n!)",
   "space": "O(n)",
   "explain": "Keep a count of each available letter. Every time you can place a letter you get a new sequence: add 1 and continue building from the remaining counts. Using counts (not positions) avoids counting equal sequences twice.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set of all permutations",
   "tag": "Brute force",
   "code": "class Solution:\n    def numTilePossibilities(self, tiles):\n        seen = set()\n        for r in range(1, len(tiles) + 1):\n            for p in permutations(tiles, r):\n                seen.add(p)\n        return len(seen)",
   "time": "O(n!·n)",
   "space": "O(n!)",
   "explain": "Collect every distinct arrangement of every length in a set.",
   "frames": [],
   "alt": true
  }
 ]
};
