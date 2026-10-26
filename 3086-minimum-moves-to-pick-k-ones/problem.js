window.PROBLEM = {
 "id": "3086",
 "title": "Minimum Moves to Pick K Ones",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "nums [1,1,0,0,0,1,1,0,0,1], k=3, maxChanges=1 → pick the neighbouring ones for free/1 move and one created one for 2 moves → 3.",
 "idea": "Standing at index i: its own one is free, an adjacent one costs 1 move, a created one (set a nearby zero, then swap it in) costs 2 moves, and a one at distance d costs d moves. Case A: use the ones around the best index and changes for the rest: cost = (adjacent ones used) + 2 × (k − picked) if enough changes. Case B: use all maxChanges (2 moves each) and fetch k − maxChanges real ones from the best window of ones, whose cost is the sum of distances to the window's median. The answer is the cheaper case.",
 "input": "nums = [1,1,0,0,0,1,1,0,0,1], k = 3, maxChanges = 1",
 "output": "3",
 "notes": [],
 "best": "Standing at index i: its own one is free, an adjacent one costs 1 move, a created one (set a nearby zero, then swap it in) costs 2 moves, and a one at distance d costs d moves. Case A: use the ones around the best index and changes for the rest: cost = (adjacent ones used) + 2 × (k − picked) if enough changes. Case B: use all maxChanges (2 moves each) and fetch k − maxChanges real ones from the best window of ones, whose cost is the sum of distances to the window's median. The answer is the cheaper case.",
 "variants": [
  {
   "name": "Cheap nearby ones, 2-move changes, then a median window",
   "code": "class Solution:\n    def minimumMoves(self, nums, k, maxChanges):\n        n = len(nums)\n        ones = [i for i, v in enumerate(nums) if v]\n        best = float('inf')\n        for i in range(n):\n            own = nums[i]\n            adj = (nums[i - 1] if i else 0) + (nums[i + 1] if i + 1 < n else 0)\n            u = min(k, own + adj)\n            if k - u <= maxChanges:\n                best = min(best, max(0, u - own) + 2 * (k - u))\n        need = k - maxChanges\n        if 1 <= need <= len(ones):\n            pre = [0]\n            for p in ones:\n                pre.append(pre[-1] + p)\n            for l in range(len(ones) - need + 1):\n                r = l + need\n                m = (l + r - 1) // 2\n                left = ones[m] * (m - l) - (pre[m] - pre[l])\n                right = (pre[r] - pre[m + 1]) - ones[m] * (r - m - 1)\n                best = min(best, left + right + 2 * maxChanges)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Standing at index i: its own one is free, an adjacent one costs 1 move, a created one (set a nearby zero, then swap it in) costs 2 moves, and a one at distance d costs d moves. Case A: use the ones around the best index and changes for the rest: cost = (adjacent ones used) + 2 × (k − picked) if enough changes. Case B: use all maxChanges (2 moves each) and fetch k − maxChanges real ones from the best window of ones, whose cost is the sum of distances to the window's median. The answer is the cheaper case.",
   "frames": []
  }
 ]
};
