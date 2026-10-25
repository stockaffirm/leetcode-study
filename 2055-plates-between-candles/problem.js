window.PROBLEM = {
 "id": "2055",
 "title": "Plates Between Candles",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "s is a row of plates '*' and candles '|'. For each query [l, r], count the plates in s[l..r] that lie between two candles that are also inside that range. Example: '**|**|***|', [[2,5],[5,9]] → [2,3].",
 "why": "'**|**|***|', query [2,5]: candles at 2 and 5 enclose 2 plates → 2.",
 "idea": "A plate counts only if a candle is on both sides inside the query range. For each position store the nearest candle to its right and to its left. Shrink [l, r] to [next candle ≥ l, previous candle ≤ r] and count plates with a prefix sum.",
 "input": "s = \"**|**|***|\", queries = [[2,5],[5,9]]",
 "output": "[2, 3]",
 "notes": [],
 "best": "A plate counts only if a candle is on both sides inside the query range. For each position store the nearest candle to its right and to its left. Shrink [l, r] to [next candle ≥ l, previous candle ≤ r] and count plates with a prefix sum.",
 "variants": [
  {
   "name": "Prefix plates plus nearest candles",
   "code": "class Solution:\n    def platesBetweenCandles(self, s, queries):\n        n = len(s)\n        pre = [0] * (n + 1)\n        for i, c in enumerate(s):\n            pre[i + 1] = pre[i] + (c == '*')\n        nxt = [n] * (n + 1)\n        for i in range(n - 1, -1, -1):\n            nxt[i] = i if s[i] == '|' else nxt[i + 1]\n        prv = [-1] * n\n        for i in range(n):\n            prv[i] = i if s[i] == '|' else (prv[i - 1] if i else -1)\n        res = []\n        for l, r in queries:\n            a, b = nxt[l], prv[r]\n            res.append(pre[b] - pre[a + 1] if a < b else 0)\n        return res",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "A plate counts only if a candle is on both sides inside the query range. For each position store the nearest candle to its right and to its left. Shrink [l, r] to [next candle ≥ l, previous candle ≤ r] and count plates with a prefix sum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count per query",
   "tag": "Brute force",
   "code": "class Solution:\n    def platesBetweenCandles(self, s, queries):\n        res = []\n        for l, r in queries:\n            sub = s[l:r + 1]\n            a, b = sub.find('|'), sub.rfind('|')\n            res.append(sub[a:b].count('*') if a >= 0 and a < b else 0)\n        return res",
   "time": "O(q·n)",
   "space": "O(1)",
   "explain": "Trim each range to its first and last candle and count the plates between them.",
   "frames": [],
   "alt": true
  }
 ]
};
