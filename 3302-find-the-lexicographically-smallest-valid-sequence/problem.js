window.PROBLEM = {
 "id": "3302",
 "title": "Find the Lexicographically Smallest Valid Sequence",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Find indices i₀ < i₁ < … in word1 so that the characters at them form word2 except for at most one position, and the index sequence is lexicographically smallest. Return it, or [] if impossible. Example: word1 'vbcca', word2 'abc' → [0,1,2].",
 "why": "word1 'vbcca', word2 'abc': indices [0,1,2] (v differs once, the rest match) is the smallest valid sequence.",
 "idea": "We need indices i₀<i₁<… so that word1 at those indices equals word2 with at most one mismatch, lexicographically smallest. Precompute suf[j]: the latest start in word1 from which word2[j:] can still be matched exactly as a subsequence. Greedily take the earliest matching index for each letter; if it mismatches, spend the single skip only when the rest can still be matched exactly after that index.",
 "input": "word1 = \"vbcca\", word2 = \"abc\"",
 "output": "[0, 1, 2]",
 "notes": [],
 "best": "We need indices i₀<i₁<… so that word1 at those indices equals word2 with at most one mismatch, lexicographically smallest. Precompute suf[j]: the latest start in word1 from which word2[j:] can still be matched exactly as a subsequence. Greedily take the earliest matching index for each letter; if it mismatches, spend the single skip only when the rest can still be matched exactly after that index.",
 "variants": [
  {
   "name": "Greedy with a suffix feasibility check",
   "code": "class Solution:\n    def validSequence(self, word1, word2):\n        n, m = len(word1), len(word2)\n        suf = [-1] * (m + 1)\n        j = m - 1\n        for i in range(n - 1, -1, -1):\n            if j >= 0 and word1[i] == word2[j]:\n                suf[j] = i\n                j -= 1\n        res = []\n        j = 0\n        skipped = False\n        for i in range(n):\n            if j == m:\n                break\n            if word1[i] == word2[j]:\n                res.append(i)\n                j += 1\n            elif not skipped and (j + 1 == m or suf[j + 1] > i):\n                res.append(i)\n                j += 1\n                skipped = True\n        return res if j == m else []",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "We need indices i₀<i₁<… so that word1 at those indices equals word2 with at most one mismatch, lexicographically smallest. Precompute suf[j]: the latest start in word1 from which word2[j:] can still be matched exactly as a subsequence. Greedily take the earliest matching index for each letter; if it mismatches, spend the single skip only when the rest can still be matched exactly after that index.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DP over (position, skip used)",
   "tag": "Alternative",
   "code": "class Solution:\n    def validSequence(self, word1, word2):\n        n, m = len(word1), len(word2)\n        @lru_cache(None)\n        def go(i, j, used):\n            if j == m:\n                return ()\n            best = None\n            for p in range(i, n):\n                if n - p < m - j:\n                    break\n                if word1[p] == word2[j]:\n                    rest = go(p + 1, j + 1, used)\n                    if rest is not None:\n                        return (p,) + rest\n                elif not used:\n                    rest = go(p + 1, j + 1, True)\n                    if rest is not None:\n                        cand = (p,) + rest\n                        if best is None or cand < best:\n                            best = cand\n                if best is not None:\n                    break\n            return best\n        r = go(0, 0, False)\n        return list(r) if r is not None else []",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "best(i, j, used) returns the smallest index list; try matching word1[i] to word2[j] or skipping.",
   "frames": [],
   "alt": true
  }
 ]
};
