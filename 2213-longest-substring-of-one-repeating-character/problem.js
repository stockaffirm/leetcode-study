window.PROBLEM = {
 "id": "2213",
 "title": "Longest Substring of One Repeating Character",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "s 'babacc', updates 'b'→1, 'a'→3, 'a'→... after each, the longest run length.",
 "idea": "Each segment tree node keeps its left character, right character, the length of the run touching its left end (prefix), touching its right end (suffix), the best run inside, and its size. Merging two children joins the right suffix of the left child with the left prefix of the right child when those characters are equal. A point update recomputes O(log n) nodes; the root's best is the answer.",
 "input": "s = \"babacc\", queryCharacters = \"bcb\", queryIndices = [1,3,3]",
 "output": "[3, 3, 4]",
 "notes": [],
 "best": "Each segment tree node keeps its left character, right character, the length of the run touching its left end (prefix), touching its right end (suffix), the best run inside, and its size. Merging two children joins the right suffix of the left child with the left prefix of the right child when those characters are equal. A point update recomputes O(log n) nodes; the root's best is the answer.",
 "variants": [
  {
   "name": "Segment tree storing prefix / suffix / best run",
   "code": "class Solution:\n    def longestRepeating(self, s, queryCharacters, queryIndices):\n        n = len(s)\n        size = 1\n        while size < n:\n            size *= 2\n        EMPTY = (\"\", \"\", 0, 0, 0, 0)\n        tree = [EMPTY] * (2 * size)\n        def leaf(c):\n            return (c, c, 1, 1, 1, 1)\n        def merge(a, b):\n            if a[5] == 0:\n                return b\n            if b[5] == 0:\n                return a\n            lc, rc = a[0], b[1]\n            pre = a[2]\n            if a[2] == a[5] and a[1] == b[0]:\n                pre = a[5] + b[2]\n            suf = b[3]\n            if b[3] == b[5] and a[1] == b[0]:\n                suf = b[5] + a[3]\n            best = max(a[4], b[4])\n            if a[1] == b[0]:\n                best = max(best, a[3] + b[2])\n            return (a[0], b[1], pre, suf, best, a[5] + b[5])\n        for i, c in enumerate(s):\n            tree[size + i] = leaf(c)\n        for i in range(size - 1, 0, -1):\n            tree[i] = merge(tree[2 * i], tree[2 * i + 1])\n        res = []\n        for ch, idx in zip(queryCharacters, queryIndices):\n            p = size + idx\n            tree[p] = leaf(ch)\n            p //= 2\n            while p:\n                tree[p] = merge(tree[2 * p], tree[2 * p + 1])\n                p //= 2\n            res.append(tree[1][4])\n        return res",
   "time": "O((n + q) log n)",
   "space": "O(n)",
   "explain": "Each segment tree node keeps its left character, right character, the length of the run touching its left end (prefix), touching its right end (suffix), the best run inside, and its size. Merging two children joins the right suffix of the left child with the left prefix of the right child when those characters are equal. A point update recomputes O(log n) nodes; the root's best is the answer.",
   "frames": []
  }
 ]
};
