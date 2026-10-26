window.PROBLEM = {
 "id": "3161",
 "title": "Block Placement Queries",
 "level": "Hard",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "A number line gets obstacles one at a time. Between them you are asked: can a block of length sz fit somewhere in the part from 0 to x without touching an obstacle?",
 "idea": "Store for each obstacle the gap to the obstacle before it, in a segment tree for 'maximum over a range'. Adding an obstacle splits one gap into two (two point updates). A query takes the maximum gap among obstacles ≤ x, also considering the open stretch from the last obstacle to x.",
 "input": "[[1,2],[2,3,3],[2,3,1],[2,2,2]]",
 "output": "[False, True, True]",
 "notes": [],
 "best": "Store for each obstacle the gap to the obstacle before it, in a segment tree for 'maximum over a range'. Adding an obstacle splits one gap into two (two point updates). A query takes the maximum gap among obstacles ≤ x, also considering the open stretch from the last obstacle to x.",
 "variants": [
  {
   "name": "Segment tree over gaps between obstacles",
   "code": "class Solution:\n    def getResults(self, queries):\n        size = max(max(q[1] for q in queries), 1) + 1\n        tree = [0] * (4 * size)\n        def update(node, lo, hi, pos, val):\n            if lo == hi:\n                tree[node] = val\n                return\n            mid = (lo + hi) // 2\n            if pos <= mid: update(2 * node, lo, mid, pos, val)\n            else: update(2 * node + 1, mid + 1, hi, pos, val)\n            tree[node] = max(tree[2 * node], tree[2 * node + 1])\n        def query(node, lo, hi, l, r):\n            if r < lo or hi < l or l > r: return 0\n            if l <= lo and hi <= r: return tree[node]\n            mid = (lo + hi) // 2\n            return max(query(2 * node, lo, mid, l, r), query(2 * node + 1, mid + 1, hi, l, r))\n        obs = [0]\n        ans = []\n        for q in queries:\n            if q[0] == 1:\n                x = q[1]\n                i = bisect_left(obs, x)\n                prev = obs[i - 1]\n                update(1, 0, size - 1, x, x - prev)\n                if i < len(obs): update(1, 0, size - 1, obs[i], obs[i] - x)\n                obs.insert(i, x)\n            else:\n                x, sz = q[1], q[2]\n                i = bisect_right(obs, x) - 1\n                last = obs[i]\n                best = max(query(1, 0, size - 1, 0, last), x - last)\n                ans.append(best >= sz)\n        return ans",
   "time": "O(q log n)",
   "space": "O(n)",
   "explain": "Store for each obstacle the gap to the obstacle before it, in a segment tree for 'maximum over a range'. Adding an obstacle splits one gap into two (two point updates). A query takes the maximum gap among obstacles ≤ x, also considering the open stretch from the last obstacle to x.",
   "frames": []
  }
 ]
};
