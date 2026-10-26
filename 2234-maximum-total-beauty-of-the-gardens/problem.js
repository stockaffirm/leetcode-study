window.PROBLEM = {
 "id": "2234",
 "title": "Maximum Total Beauty of the Gardens",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
