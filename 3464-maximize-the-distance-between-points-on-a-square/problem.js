window.PROBLEM = {
 "id": "3464",
 "title": "Maximize the Distance Between Points on a Square",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "side 2, points [[0,2],[2,0],[2,2],[0,0]], k=4 → all four corners, minimum distance 2.",
 "idea": "Binary search the answer d. Lay the points out in order around the boundary of the square. To test d, try each point as the first chosen one: greedily walk forward choosing the next point at Manhattan distance ≥ d from the last chosen, and finally check the last chosen is ≥ d from the first. If k points are reached the distance d is possible.",
 "input": "side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4",
 "output": "2",
 "notes": [],
 "best": "Binary search the answer d. Lay the points out in order around the boundary of the square. To test d, try each point as the first chosen one: greedily walk forward choosing the next point at Manhattan distance ≥ d from the last chosen, and finally check the last chosen is ≥ d from the first. If k points are reached the distance d is possible.",
 "variants": [
  {
   "name": "Binary search the distance, greedy around the boundary",
   "code": "class Solution:\n    def maxDistance(self, side, points, k):\n        def pos(p):\n            x, y = p\n            if y == 0:\n                return x\n            if x == side:\n                return side + y\n            if y == side:\n                return 2 * side + (side - x)\n            return 3 * side + (side - y)\n        def dist(a, b):\n            return abs(a[0] - b[0]) + abs(a[1] - b[1])\n        pts = sorted(points, key=pos)\n        n = len(pts)\n        def ok(d):\n            for st in range(n):\n                cur = st\n                cnt = 1\n                while cnt < k:\n                    j = cur + 1\n                    while j < st + n and dist(pts[j % n], pts[cur % n]) < d:\n                        j += 1\n                    if j >= st + n:\n                        break\n                    cur = j\n                    cnt += 1\n                if cnt == k and dist(pts[cur % n], pts[st]) >= d:\n                    return True\n            return False\n        lo, hi = 0, 2 * side\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if ok(mid):\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n² log side)",
   "space": "O(n)",
   "explain": "Binary search the answer d. Lay the points out in order around the boundary of the square. To test d, try each point as the first chosen one: greedily walk forward choosing the next point at Manhattan distance ≥ d from the last chosen, and finally check the last chosen is ≥ d from the first. If k points are reached the distance d is possible.",
   "frames": []
  }
 ]
};
