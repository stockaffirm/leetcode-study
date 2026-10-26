window.PROBLEM = {
 "id": "2565",
 "title": "Subsequence With the Minimum Score",
 "level": "Hard",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
