window.PROBLEM = {
 "id": "1482",
 "title": "Minimum Number of Days to Make m Bouquets",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "Flowers bloom on days [1,10,3,10,2]; we need 3 bouquets of 1 flower. On day 3 the flowers 1, 3, 2 are open → 3 bouquets.",
 "idea": "If it works on day d it works on any later day, so binary search d. To test a day, scan the garden and count groups of k adjacent flowers that are all in bloom.",
 "input": "bloomDay = [1,10,3,10,2], m = 3, k = 1",
 "output": "3",
 "notes": [],
 "best": "If it works on day d it works on any later day, so binary search d. To test a day, scan the garden and count groups of k adjacent flowers that are all in bloom.",
 "variants": [
  {
   "name": "Binary search the day",
   "code": "class Solution:\n    def minDays(self, bloomDay, m, k):\n        if m * k > len(bloomDay):\n            return -1\n        def can(day):\n            bouquets = run = 0\n            for b in bloomDay:\n                if b <= day:\n                    run += 1\n                    if run == k:\n                        bouquets += 1\n                        run = 0\n                else:\n                    run = 0\n            return bouquets >= m\n        lo, hi = min(bloomDay), max(bloomDay)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if can(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "If it works on day d it works on any later day, so binary search d. To test a day, scan the garden and count groups of k adjacent flowers that are all in bloom.",
   "frames": []
  }
 ]
};
