window.PROBLEM = {
 "id": "691",
 "title": "Stickers to Spell Word",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "You have unlimited copies of each sticker (a word); cut letters from stickers to spell target. Return the minimum number of stickers needed, or −1 if impossible. Example: ['with','example','science'], 'thehat' → 3.",
 "why": "stickers ['with','example','science'], target 'thehat' → 3 stickers.",
 "idea": "State = bitmask of target letters already covered. From a state take the first uncovered letter and try every sticker that contains it, covering as many remaining target letters as it can. dp[mask] = fewest stickers to reach the mask; the answer is dp[full] or −1.",
 "input": "stickers = [\"with\",\"example\",\"science\"], target = \"thehat\"",
 "output": "3",
 "notes": [],
 "best": "State = bitmask of target letters already covered. From a state take the first uncovered letter and try every sticker that contains it, covering as many remaining target letters as it can. dp[mask] = fewest stickers to reach the mask; the answer is dp[full] or −1.",
 "variants": [
  {
   "name": "Bitmask of target letters covered",
   "code": "class Solution:\n    def minStickers(self, stickers, target):\n        n = len(target)\n        INF = float('inf')\n        dp = [INF] * (1 << n)\n        dp[0] = 0\n        for mask in range(1 << n):\n            if dp[mask] == INF:\n                continue\n            first = next((i for i in range(n) if not (mask >> i) & 1), None)\n            if first is None:\n                continue\n            for st in stickers:\n                if target[first] not in st:\n                    continue\n                avail = Counter(st)\n                nm = mask\n                for i in range(n):\n                    if not (nm >> i) & 1 and avail[target[i]] > 0:\n                        avail[target[i]] -= 1\n                        nm |= 1 << i\n                if dp[mask] + 1 < dp[nm]:\n                    dp[nm] = dp[mask] + 1\n        return dp[-1] if dp[-1] < INF else -1",
   "time": "O(2ᵗ·s·t)",
   "space": "O(2ᵗ)",
   "explain": "State = bitmask of target letters already covered. From a state take the first uncovered letter and try every sticker that contains it, covering as many remaining target letters as it can. dp[mask] = fewest stickers to reach the mask; the answer is dp[full] or −1.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoised recursion on the remaining target",
   "tag": "Alternative",
   "code": "class Solution:\n    def minStickers(self, stickers, target):\n        stick = [Counter(s) for s in stickers]\n        @lru_cache(None)\n        def go(t):\n            if not t:\n                return 0\n            need = Counter(t)\n            best = float('inf')\n            for st in stick:\n                if t[0] not in st:\n                    continue\n                rest = ''.join(sorted((need - st).elements()))\n                best = min(best, 1 + go(rest))\n            return best\n        r = go(''.join(sorted(target)))\n        return r if r < float('inf') else -1",
   "time": "exponential (bounded by 2ᵗ)",
   "space": "O(2ᵗ)",
   "explain": "best(target string) = 1 + min over stickers containing the first letter, removing the covered letters.",
   "frames": [],
   "alt": true
  }
 ]
};
