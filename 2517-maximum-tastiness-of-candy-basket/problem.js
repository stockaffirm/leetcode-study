window.PROBLEM = {
 "id": "2517",
 "title": "Maximum Tastiness of Candy Basket",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "prices [13,5,1,8,21,2], k=3 → pick 13, 5, 2? best tastiness is 8.",
 "idea": "Tastiness is the smallest price difference between two chosen candies. Guess a gap g; after sorting, greedily pick the cheapest candy and then each next candy whose price is at least g more than the last picked; if k are picked the gap works. Binary search the largest g.",
 "input": "price = [13,5,1,8,21,2], k = 3",
 "output": "8",
 "notes": [],
 "best": "Tastiness is the smallest price difference between two chosen candies. Guess a gap g; after sorting, greedily pick the cheapest candy and then each next candy whose price is at least g more than the last picked; if k are picked the gap works. Binary search the largest g.",
 "variants": [
  {
   "name": "Binary search the minimum price gap",
   "code": "class Solution:\n    def maximumTastiness(self, price, k):\n        price = sorted(price)\n        def ok(g):\n            cnt, last = 1, price[0]\n            for p in price[1:]:\n                if p - last >= g:\n                    cnt += 1\n                    last = p\n            return cnt >= k\n        lo, hi = 0, price[-1] - price[0]\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if ok(mid):\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n log n + n log range)",
   "space": "O(1)",
   "explain": "Tastiness is the smallest price difference between two chosen candies. Guess a gap g; after sorting, greedily pick the cheapest candy and then each next candy whose price is at least g more than the last picked; if k are picked the gap works. Binary search the largest g.",
   "frames": []
  }
 ]
};
