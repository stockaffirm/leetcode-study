window.PROBLEM = {
 "id": "3501",
 "title": "Maximize Active Section with Trade II",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "s '0100', queries [[0,3],[0,2],[1,3]] → [4,3,1].",
 "idea": "Split s into blocks of equal characters. For each block of 1s with two zero neighbours, value = sum of the neighbour lengths. For a query only the first and last blocks are clipped by the range; the blocks in between are whole. Take the best of (a) the 1-blocks next to the clipped ends, computed with clipped lengths, and (b) the whole interior blocks, via a sparse table range maximum.",
 "input": "s = \"0100\", queries = [[0,3],[0,2],[1,3]]",
 "output": "[4, 3, 1]",
 "notes": [],
 "best": "Split s into blocks of equal characters. For each block of 1s with two zero neighbours, value = sum of the neighbour lengths. For a query only the first and last blocks are clipped by the range; the blocks in between are whole. Take the best of (a) the 1-blocks next to the clipped ends, computed with clipped lengths, and (b) the whole interior blocks, via a sparse table range maximum.",
 "variants": [
  {
   "name": "Block values + sparse table, clip the two end blocks per query",
   "code": "class Solution:\n    def maxActiveSectionsAfterTrade(self, s, queries):\n        blocks = []\n        i = 0\n        while i < len(s):\n            j = i\n            while j < len(s) and s[j] == s[i]:\n                j += 1\n            blocks.append((s[i], i, j - 1))\n            i = j\n        m = len(blocks)\n        starts = [b[1] for b in blocks]\n        val = [0] * m\n        for k in range(1, m - 1):\n            if blocks[k][0] == '1':\n                val[k] = (blocks[k - 1][2] - blocks[k - 1][1] + 1) + (blocks[k + 1][2] - blocks[k + 1][1] + 1)\n        table = [val[:]]\n        j = 1\n        while (1 << j) <= m:\n            prev = table[-1]\n            table.append([max(prev[x], prev[x + (1 << (j - 1))]) for x in range(m - (1 << j) + 1)])\n            j += 1\n        def rmq(a, b):\n            if a > b:\n                return 0\n            k = (b - a + 1).bit_length() - 1\n            return max(table[k][a], table[k][b - (1 << k) + 1])\n        pref = [0]\n        for c in s:\n            pref.append(pref[-1] + (c == '1'))\n        res = []\n        for l, r in queries:\n            ones = pref[r + 1] - pref[l]\n            bl = bisect_right(starts, l) - 1\n            br = bisect_right(starts, r) - 1\n            if br - bl < 2:\n                res.append(ones)\n                continue\n            def length(k):\n                return min(blocks[k][2], r) - max(blocks[k][1], l) + 1\n            best = 0\n            for k in (bl + 1, br - 1):\n                if bl < k < br and blocks[k][0] == '1':\n                    best = max(best, length(k - 1) + length(k + 1))\n            best = max(best, rmq(bl + 2, br - 2))\n            res.append(ones + best)\n        return res",
   "time": "O((n + q) log n)",
   "space": "O(n log n)",
   "explain": "Split s into blocks of equal characters. For each block of 1s with two zero neighbours, value = sum of the neighbour lengths. For a query only the first and last blocks are clipped by the range; the blocks in between are whole. Take the best of (a) the 1-blocks next to the clipped ends, computed with clipped lengths, and (b) the whole interior blocks, via a sparse table range maximum.",
   "frames": []
  }
 ]
};
