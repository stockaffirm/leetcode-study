window.PROBLEM = {
 "id": "1870",
 "title": "Minimum Speed to Arrive on Time",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "You ride n trains in order; each leaves at the next whole hour after you arrive (except the first and the last arrival). Find the smallest whole speed that gets you there within 'hour' hours, or −1.",
 "idea": "For a speed s the time is Σ ceil(d/s) for all but the last train, plus last/s. It decreases as s grows, so binary search the smallest s that fits. If hour ≤ n − 1 it is impossible.",
 "input": "dist [1,3,2], hour = 2.7",
 "output": "3",
 "notes": [],
 "best": "For a speed s the time is Σ ceil(d/s) for all but the last train, plus last/s. It decreases as s grows, so binary search the smallest s that fits. If hour ≤ n − 1 it is impossible.",
 "variants": [
  {
   "name": "Binary search on the speed",
   "code": "class Solution:\n    def minSpeedOnTime(self, dist, hour):\n        n = len(dist)\n        if hour <= n - 1: return -1\n        def ok(s):\n            t = sum((d + s - 1) // s for d in dist[:-1])\n            return t + dist[-1] / s <= hour\n        lo, hi = 1, 10 ** 7\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if ok(mid): hi = mid\n            else: lo = mid + 1\n        return lo if ok(lo) else -1",
   "time": "O(n log S)",
   "space": "O(1)",
   "explain": "For a speed s the time is Σ ceil(d/s) for all but the last train, plus last/s. It decreases as s grows, so binary search the smallest s that fits. If hour ≤ n − 1 it is impossible.",
   "frames": []
  }
 ]
};
