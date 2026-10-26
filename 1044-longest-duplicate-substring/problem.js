window.PROBLEM = {
 "id": "1044",
 "title": "Longest Duplicate Substring",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "'banana' → 'ana' occurs twice (overlapping) → 'ana'.",
 "idea": "If a duplicate of length L exists, one of every shorter length exists too, so binary search L. Check a length by hashing all substrings of that length with a rolling (prefix) hash and looking for a repeat, confirming equality to rule out collisions.",
 "input": "s = \"banana\"",
 "output": "\"ana\"",
 "notes": [],
 "best": "If a duplicate of length L exists, one of every shorter length exists too, so binary search L. Check a length by hashing all substrings of that length with a rolling (prefix) hash and looking for a repeat, confirming equality to rule out collisions.",
 "variants": [
  {
   "name": "Binary search the length with a rolling hash",
   "code": "class Solution:\n    def longestDupSubstring(self, s):\n        n = len(s)\n        M = (1 << 61) - 1\n        B = 131\n        pre = [0] * (n + 1)\n        pw = [1] * (n + 1)\n        for i, c in enumerate(s):\n            pre[i + 1] = (pre[i] * B + ord(c)) % M\n            pw[i + 1] = pw[i] * B % M\n        def find(L):\n            seen = {}\n            for i in range(n - L + 1):\n                h = (pre[i + L] - pre[i] * pw[L]) % M\n                if h in seen and s[seen[h]:seen[h] + L] == s[i:i + L]:\n                    return i\n                seen.setdefault(h, i)\n            return -1\n        lo, hi, best = 1, n - 1, \"\"\n        while lo <= hi:\n            mid = (lo + hi) // 2\n            i = find(mid)\n            if i >= 0:\n                best = s[i:i + mid]\n                lo = mid + 1\n            else:\n                hi = mid - 1\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "If a duplicate of length L exists, one of every shorter length exists too, so binary search L. Check a length by hashing all substrings of that length with a rolling (prefix) hash and looking for a repeat, confirming equality to rule out collisions.",
   "frames": []
  }
 ]
};
