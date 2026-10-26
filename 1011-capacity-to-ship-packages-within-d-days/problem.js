window.PROBLEM = {
 "id": "1011",
 "title": "Capacity To Ship Packages Within D Days",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "Packages must be shipped in the given order, a ship carrying up to some capacity per day. What is the smallest capacity that ships everything within D days?",
 "idea": "Guess a capacity and simulate (greedily fill each day). The capacity is at least the heaviest package and at most the total; binary search the smallest that fits the days.",
 "input": "[1,2,3,4,5,6,7,8,9,10], days = 5",
 "output": "15",
 "notes": [],
 "best": "Guess a capacity and simulate (greedily fill each day). The capacity is at least the heaviest package and at most the total; binary search the smallest that fits the days.",
 "variants": [
  {
   "name": "Binary search on the capacity",
   "code": "class Solution:\n    def shipWithinDays(self, weights, days):\n        def need(cap):\n            d, cur = 1, 0\n            for w in weights:\n                if cur + w > cap:\n                    d += 1\n                    cur = 0\n                cur += w\n            return d\n        lo, hi = max(weights), sum(weights)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if need(mid) <= days: hi = mid\n            else: lo = mid + 1\n        return lo",
   "time": "O(n log S)",
   "space": "O(1)",
   "explain": "Guess a capacity and simulate (greedily fill each day). The capacity is at least the heaviest package and at most the total; binary search the smallest that fits the days.",
   "frames": []
  }
 ]
};
