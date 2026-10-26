window.PROBLEM = {
 "id": "3321",
 "title": "Find X-Sum of All K-Long Subarrays II",
 "level": "Hard",
 "topic": "Heap",
 "question": "",
 "why": "nums [1,1,2,2,3,4,2,3], k=6, x=2 → [6,10,12].",
 "idea": "The x-sum counts only the x most frequent values (ties: bigger value wins). Keep each value's frequency and two ordered collections of (frequency, value) pairs: top (size ≤ x) and rest. When a value's frequency changes, remove its old pair, insert the new pair, then rebalance: move the best of rest into top, or the worst of top out. Maintain the sum of freq·value in top.",
 "input": "nums = [1,1,2,2,3,4,2,3], k = 6, x = 2",
 "output": "[6, 10, 12]",
 "notes": [],
 "best": "The x-sum counts only the x most frequent values (ties: bigger value wins). Keep each value's frequency and two ordered collections of (frequency, value) pairs: top (size ≤ x) and rest. When a value's frequency changes, remove its old pair, insert the new pair, then rebalance: move the best of rest into top, or the worst of top out. Maintain the sum of freq·value in top.",
 "variants": [
  {
   "name": "Sliding window with a 'top x' set and a 'rest' set",
   "code": "class Solution:\n    def findXSum(self, nums, k, x):\n        freq = Counter()\n        top, rest = [], []\n        state = {\"sum\": 0}\n        def remove(pair):\n            if pair in top:\n                top.remove(pair)\n                state[\"sum\"] -= pair[0] * pair[1]\n            elif pair in rest:\n                rest.remove(pair)\n        def add(pair):\n            insort(rest, pair)\n        def rebalance():\n            while rest and len(top) < x:\n                p = rest.pop()\n                insort(top, p)\n                state[\"sum\"] += p[0] * p[1]\n            while rest and top and rest[-1] > top[0]:\n                a, b = rest.pop(), top.pop(0)\n                state[\"sum\"] += a[0] * a[1] - b[0] * b[1]\n                insort(top, a)\n                insort(rest, b)\n        def change(v, delta):\n            if freq[v]:\n                remove((freq[v], v))\n            freq[v] += delta\n            if freq[v]:\n                add((freq[v], v))\n            rebalance()\n        res = []\n        for i, v in enumerate(nums):\n            change(v, 1)\n            if i >= k:\n                change(nums[i - k], -1)\n            if i >= k - 1:\n                res.append(state[\"sum\"])\n        return res",
   "time": "O(n·d)",
   "space": "O(d)",
   "explain": "The x-sum counts only the x most frequent values (ties: bigger value wins). Keep each value's frequency and two ordered collections of (frequency, value) pairs: top (size ≤ x) and rest. When a value's frequency changes, remove its old pair, insert the new pair, then rebalance: move the best of rest into top, or the worst of top out. Maintain the sum of freq·value in top.",
   "frames": []
  }
 ]
};
