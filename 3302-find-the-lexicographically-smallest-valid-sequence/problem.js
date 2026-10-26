window.PROBLEM = {
 "id": "3302",
 "title": "Find the Lexicographically Smallest Valid Sequence",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
