window.PROBLEM = {
 "id": "3441",
 "title": "Minimum Cost Good Caption",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A caption is good if every letter appears in runs of at least 3 consecutive equal letters. In one operation change a character to the previous or next letter of the alphabet. Return the cheapest good caption (lexicographically smallest among the cheapest) or '' if impossible. Example: 'cdcd' → 'cccc'.",
 "why": "'cdcd' → 'cccc' (two operations) is the cheapest, smallest good caption.",
 "idea": "A good caption has every letter in runs of at least 3. Each change costs the alphabet distance. Compute from the right h[i][c][k] = cheapest way to finish positions after i when position i holds letter c at the end of a run of length k (1, 2 or 3+). A run can be continued with the same letter, or — once it has length 3+ — switched to any other letter. The minimum starts at position 0; rebuild left to right choosing the smallest letter that keeps the optimal total (that makes the answer lexicographically smallest). Captions shorter than 3 are impossible.",
 "input": "caption = \"cdcd\"",
 "output": "\"cccc\"",
 "notes": [],
 "best": "A good caption has every letter in runs of at least 3. Each change costs the alphabet distance. Compute from the right h[i][c][k] = cheapest way to finish positions after i when position i holds letter c at the end of a run of length k (1, 2 or 3+). A run can be continued with the same letter, or — once it has length 3+ — switched to any other letter. The minimum starts at position 0; rebuild left to right choosing the smallest letter that keeps the optimal total (that makes the answer lexicographically smallest). Captions shorter than 3 are impossible.",
 "variants": [
  {
   "name": "Suffix DP over (letter, run length 1/2/3+), rebuild greedily",
   "code": "class Solution:\n    def minCostGoodCaption(self, caption):\n        n = len(caption)\n        if n < 3:\n            return \"\"\n        INF = 10**9\n        a = [ord(ch) - 97 for ch in caption]\n        h = [[[INF] * 4 for _ in range(26)] for _ in range(n)]\n        for c in range(26):\n            h[n - 1][c][3] = 0\n        for i in range(n - 2, -1, -1):\n            for c in range(26):\n                for k in (1, 2, 3):\n                    best = abs(a[i + 1] - c) + h[i + 1][c][min(3, k + 1)]\n                    if k == 3:\n                        for d in range(26):\n                            if d != c:\n                                best = min(best, abs(a[i + 1] - d) + h[i + 1][d][1])\n                    h[i][c][k] = best\n        total = min(abs(a[0] - c) + h[0][c][1] for c in range(26))\n        if total >= INF:\n            return \"\"\n        first = next(c for c in range(26) if abs(a[0] - c) + h[0][c][1] == total)\n        res = [first]\n        c, k = first, 1\n        rem = h[0][c][1]\n        for i in range(1, n):\n            for d in range(26):\n                if d == c:\n                    nk = min(3, k + 1)\n                elif k == 3:\n                    nk = 1\n                else:\n                    continue\n                if abs(a[i] - d) + h[i][d][nk] == rem:\n                    res.append(d)\n                    c, k = d, nk\n                    rem = h[i][d][nk]\n                    break\n        return ''.join(chr(97 + x) for x in res)",
   "time": "O(n·26·26)",
   "space": "O(n·26)",
   "explain": "A good caption has every letter in runs of at least 3. Each change costs the alphabet distance. Compute from the right h[i][c][k] = cheapest way to finish positions after i when position i holds letter c at the end of a run of length k (1, 2 or 3+). A run can be continued with the same letter, or — once it has length 3+ — switched to any other letter. The minimum starts at position 0; rebuild left to right choosing the smallest letter that keeps the optimal total (that makes the answer lexicographically smallest). Captions shorter than 3 are impossible.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Brute force over all captions",
   "tag": "Brute force",
   "code": "class Solution:\n    def minCostGoodCaption(self, caption):\n        n = len(caption)\n        if n < 3:\n            return \"\"\n        letters = [chr(c) for c in range(ord(min(caption)), ord(max(caption)) + 1)]\n        best = (float('inf'), \"\")\n        for t in product(letters, repeat=n):\n            s = ''.join(t)\n            if all(len(list(g)) >= 3 for _, g in groupby(s)):\n                cost = sum(abs(ord(x) - ord(y)) for x, y in zip(s, caption))\n                best = min(best, (cost, s))\n        return best[1]",
   "time": "O(kⁿ)",
   "space": "O(n)",
   "explain": "Only for very short captions: try every string over the letters between the smallest and largest letter of the caption and keep the cheapest, smallest good one.",
   "frames": [],
   "alt": true
  }
 ]
};
