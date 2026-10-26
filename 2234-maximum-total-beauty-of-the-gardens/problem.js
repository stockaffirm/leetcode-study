window.PROBLEM = {
 "id": "2234",
 "title": "Maximum Total Beauty of the Gardens",
 "level": "Hard",
 "topic": "Greedy",
 "question": "Each garden has some flowers. A garden is complete if it has at least `target` flowers (worth `full` points). The beauty of the incomplete gardens is the smallest number of flowers among them times `partial` (0 if none are incomplete). You may plant up to newFlowers more flowers. Return the maximum total beauty. Example: flowers [1,3,1,1], newFlowers 7, target 6, full 12, partial 1 → 14.",
 "why": "flowers [1,3,1,1], 7 new flowers, target 6, full 12, partial 1: complete one garden (cost 3), raise the rest to 2 → 14.",
 "idea": "A garden with at least target flowers is complete (full points each); the rest score min flowers × partial. Cap every garden at target and sort. Try every number k of complete gardens, completing the k largest (cheapest). With the remaining flowers, binary search the highest value v < target that the other gardens can all be raised to, and score k·full + v·partial. Take the best k.",
 "input": "flowers = [1,3,1,1], newFlowers = 7, target = 6, full = 12, partial = 1",
 "output": "14",
 "notes": [],
 "best": "A garden with at least target flowers is complete (full points each); the rest score min flowers × partial. Cap every garden at target and sort. Try every number k of complete gardens, completing the k largest (cheapest). With the remaining flowers, binary search the highest value v < target that the other gardens can all be raised to, and score k·full + v·partial. Take the best k.",
 "variants": [
  {
   "name": "Complete the largest k gardens, level up the rest",
   "code": "class Solution:\n    def maximumBeauty(self, flowers, newFlowers, target, full, partial):\n        f = sorted(min(x, target) for x in flowers)\n        n = len(f)\n        if f[0] == target:\n            return n * full\n        pre = [0]\n        for x in f:\n            pre.append(pre[-1] + x)\n        best = 0\n        for k in range(n + 1):\n            cost = k * target - (pre[n] - pre[n - k])\n            if cost > newFlowers:\n                continue\n            rem = newFlowers - cost\n            if k == n:\n                best = max(best, k * full)\n                continue\n            m = n - k\n            lo, hi = f[0], target - 1\n            while lo < hi:\n                mid = (lo + hi + 1) // 2\n                cnt = bisect_left(f, mid, 0, m)\n                if mid * cnt - pre[cnt] <= rem:\n                    lo = mid\n                else:\n                    hi = mid - 1\n            best = max(best, k * full + lo * partial)\n        return best",
   "time": "O(n log target)",
   "space": "O(n)",
   "explain": "A garden with at least target flowers is complete (full points each); the rest score min flowers × partial. Cap every garden at target and sort. Try every number k of complete gardens, completing the k largest (cheapest). With the remaining flowers, binary search the highest value v < target that the other gardens can all be raised to, and score k·full + v·partial. Take the best k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan for the minimum",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumBeauty(self, flowers, newFlowers, target, full, partial):\n        f = sorted(min(x, target) for x in flowers)\n        n = len(f)\n        if f[0] == target:\n            return n * full\n        best = 0\n        for k in range(n + 1):\n            top = f[n - k:]\n            cost = sum(target - x for x in top)\n            if cost > newFlowers:\n                continue\n            rem = newFlowers - cost\n            if k == n:\n                best = max(best, k * full)\n                continue\n            rest = f[:n - k]\n            for v in range(target - 1, f[0] - 1, -1):\n                need = sum(v - x for x in rest if x < v)\n                if need <= rem:\n                    best = max(best, k * full + v * partial)\n                    break\n        return best",
   "time": "O(n·target)",
   "space": "O(n)",
   "explain": "Same plan, but find the best partial level by trying each v from high to low.",
   "frames": [],
   "alt": true
  }
 ]
};
