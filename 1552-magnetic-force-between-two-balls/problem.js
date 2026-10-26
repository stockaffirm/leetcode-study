window.PROBLEM = {
 "id": "1552",
 "title": "Magnetic Force Between Two Balls",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "Baskets sit at the given positions. Place m balls in different baskets so that the smallest distance between any two balls is as large as possible, and return that distance. Example: positions [1,2,3,4,7], m=3 → 3.",
 "why": "Baskets at [1,2,3,4,7], 3 balls: put them at 1, 4, 7 → smallest gap 3.",
 "idea": "Guess the minimum gap d and place balls greedily from the left, each at the first basket at least d away from the last one. If m balls fit, d works; larger d is harder, so binary search the largest d that works.",
 "input": "position = [1,2,3,4,7], m = 3",
 "output": "3",
 "notes": [],
 "best": "Guess the minimum gap d and place balls greedily from the left, each at the first basket at least d away from the last one. If m balls fit, d works; larger d is harder, so binary search the largest d that works.",
 "variants": [
  {
   "name": "Binary search the minimum distance",
   "code": "class Solution:\n    def maxDistance(self, position, m):\n        position.sort()\n        def can(d):\n            cnt, last = 1, position[0]\n            for p in position[1:]:\n                if p - last >= d:\n                    cnt += 1\n                    last = p\n            return cnt >= m\n        lo, hi = 1, position[-1] - position[0]\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if can(mid):\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n log n + n log R)",
   "space": "O(1)",
   "explain": "Guess the minimum gap d and place balls greedily from the left, each at the first basket at least d away from the last one. If m balls fit, d works; larger d is harder, so binary search the largest d that works.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every distance from large to small",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxDistance(self, position, m):\n        position.sort()\n        for d in range(position[-1] - position[0], 0, -1):\n            cnt, last = 1, position[0]\n            for p in position[1:]:\n                if p - last >= d:\n                    cnt += 1\n                    last = p\n            if cnt >= m:\n                return d\n        return 0",
   "time": "O(n·R)",
   "space": "O(1)",
   "explain": "Test distances from the largest possible downwards and return the first one that fits m balls.",
   "frames": [],
   "alt": true
  }
 ]
};
