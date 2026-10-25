window.PROBLEM = {
 "id": "2565",
 "title": "Subsequence With the Minimum Score",
 "level": "Hard",
 "topic": "Two Pointers",
 "question": "You may delete ANY letters of t. The score of the deletions is (rightmost deleted position − leftmost deleted position + 1), or 0 if nothing is deleted. Return the smallest score so that t becomes a subsequence of s (it can be read from s by skipping letters). Example: s='abacaba', t='bzaa' → 1 (delete the 'z').",
 "why": "Delete a block of consecutive letters from t so that what remains is a subsequence of s. The score is the length of the deleted block (from its first to its last position). Minimise it.",
 "idea": "Precompute where the suffix t[k:] can start in s (matching from the right). Then match prefixes of t greedily from the left; for each prefix choose the smallest k whose suffix starts after it. The deleted block is t[p:k].",
 "input": "s=\"abacaba\", t=\"bzaa\"",
 "output": "1",
 "notes": [],
 "best": "Precompute where the suffix t[k:] can start in s (matching from the right). Then match prefixes of t greedily from the left; for each prefix choose the smallest k whose suffix starts after it. The deleted block is t[p:k].",
 "variants": [
  {
   "name": "Match a prefix from the left and a suffix from the right",
   "code": "class Solution:\n    def minimumScore(self, s, t):\n        n, m = len(s), len(t)\n        suf = [n + 1] * (m + 1)\n        suf[m] = n\n        j = m - 1\n        for i in range(n - 1, -1, -1):\n            if j >= 0 and s[i] == t[j]:\n                suf[j] = i\n                j -= 1\n        k = j + 1\n        best = k\n        p = 0\n        for i in range(n):\n            if p < m and s[i] == t[p]:\n                p += 1\n                k = max(k, p)\n                while k <= m and suf[k] <= i: k += 1\n                if k > m: break\n                best = min(best, k - p)\n        return best",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "Precompute where the suffix t[k:] can start in s (matching from the right). Then match prefixes of t greedily from the left; for each prefix choose the smallest k whose suffix starts after it. The deleted block is t[p:k].",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every block to delete",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumScore(self, s, t):\n        def sub(a, b):\n            it = iter(a)\n            return all(ch in it for ch in b)\n        if sub(s, t): return 0\n        m = len(t)\n        best = m\n        for l in range(m):\n            for r in range(l, m):\n                if sub(s, t[:l] + t[r + 1:]): best = min(best, r - l + 1)\n        return best",
   "time": "O(m²·n)",
   "space": "O(1)",
   "explain": "Delete every possible block of t and test with a subsequence check (tiny inputs).",
   "frames": [],
   "alt": true
  }
 ]
};
