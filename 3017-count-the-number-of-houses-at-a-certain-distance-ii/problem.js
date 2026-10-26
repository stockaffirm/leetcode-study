window.PROBLEM = {
 "id": "3017",
 "title": "Count the Number of Houses at a Certain Distance II",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "n=5, shortcut 2–4: the cycle is 2-3-4, tails 1 and 5 → [10,8,2,0,0].",
 "idea": "With the shortcut x–y the graph is a ring of m = y−x+1 houses with a tail of a = x−1 houses on one side and b = n−y on the other. Count pairs by distance in groups: ring–ring, tail–ring (a tail node at depth s is s + ring distance away), tail–tail on opposite sides (s + t + 1) and same-side tail pairs. Each group adds a range of counts, which a difference array handles in O(1) per node.",
 "input": "n = 5, x = 2, y = 4",
 "output": "[10, 8, 2, 0, 0]",
 "notes": [],
 "best": "With the shortcut x–y the graph is a ring of m = y−x+1 houses with a tail of a = x−1 houses on one side and b = n−y on the other. Count pairs by distance in groups: ring–ring, tail–ring (a tail node at depth s is s + ring distance away), tail–tail on opposite sides (s + t + 1) and same-side tail pairs. Each group adds a range of counts, which a difference array handles in O(1) per node.",
 "variants": [
  {
   "name": "Cycle plus two tails, counted with difference arrays",
   "code": "class Solution:\n    def countOfPairs(self, n, x, y):\n        if x > y:\n            x, y = y, x\n        if y - x <= 1:\n            return [2 * (n - k) for k in range(1, n + 1)]\n        m, a, b = y - x + 1, x - 1, n - y\n        half = (m - 1) // 2\n        diff = [0] * (n + 3)\n        def add(l, r, v):\n            if l <= r:\n                diff[l] += v\n                diff[r + 1] -= v\n        add(1, half, m)\n        if m % 2 == 0:\n            add(m // 2, m // 2, m // 2)\n        for tail in (a, b):\n            for s in range(1, tail + 1):\n                add(s, s, 1)\n                add(s + 1, s + half, 2)\n                if m % 2 == 0:\n                    add(s + m // 2, s + m // 2, 1)\n        for s in range(1, a + 1):\n            add(s + 2, s + b + 1, 1)\n        cnt = [0] * (n + 2)\n        cur = 0\n        for d in range(n + 2):\n            cur += diff[d]\n            cnt[d] = cur\n        for tail in (a, b):\n            for d in range(1, tail):\n                cnt[d] += tail - d\n        return [2 * cnt[k] for k in range(1, n + 1)]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "With the shortcut x–y the graph is a ring of m = y−x+1 houses with a tail of a = x−1 houses on one side and b = n−y on the other. Count pairs by distance in groups: ring–ring, tail–ring (a tail node at depth s is s + ring distance away), tail–tail on opposite sides (s + t + 1) and same-side tail pairs. Each group adds a range of counts, which a difference array handles in O(1) per node.",
   "frames": []
  }
 ]
};
