window.PROBLEM = {
 "id": "2034",
 "title": "Stock Price Fluctuation",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a StockPrice class that receives records (timestamp, price) in any order; a record with a timestamp already seen CORRECTS the earlier price. current() returns the price at the latest timestamp, maximum() the highest price among all current records, minimum() the lowest. Example: update(1,10), update(2,5), current → 5, maximum → 10, update(1,3) (fixes the first price), maximum → 5, update(4,2), minimum → 2.",
 "why": "A stream of (timestamp, price) records where an old record can be CORRECTED. Report the latest price, the highest and the lowest current price.",
 "idea": "Keep a dictionary timestamp → current price, plus a max-heap and a min-heap of (price, timestamp). When reading the top, pop entries whose price no longer matches the dictionary (lazy deletion).",
 "input": "update(1,10), update(2,5), current, maximum, update(1,3), maximum, update(4,2), minimum",
 "output": "5, 10, 5, 2",
 "notes": [],
 "best": "Keep a dictionary timestamp → current price, plus a max-heap and a min-heap of (price, timestamp). When reading the top, pop entries whose price no longer matches the dictionary (lazy deletion).",
 "variants": [
  {
   "name": "Two heaps with lazy deletion",
   "code": "class StockPrice:\n    def __init__(self):\n        self.prices = {}\n        self.latest = 0\n        self.hi, self.lo = [], []\n    def update(self, timestamp, price):\n        self.prices[timestamp] = price\n        self.latest = max(self.latest, timestamp)\n        heappush(self.hi, (-price, timestamp))\n        heappush(self.lo, (price, timestamp))\n    def current(self):\n        return self.prices[self.latest]\n    def maximum(self):\n        while -self.hi[0][0] != self.prices[self.hi[0][1]]: heappop(self.hi)\n        return -self.hi[0][0]\n    def minimum(self):\n        while self.lo[0][0] != self.prices[self.lo[0][1]]: heappop(self.lo)\n        return self.lo[0][0]",
   "time": "O(log n)",
   "space": "O(n)",
   "explain": "Keep a dictionary timestamp → current price, plus a max-heap and a min-heap of (price, timestamp). When reading the top, pop entries whose price no longer matches the dictionary (lazy deletion).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan all prices",
   "tag": "Brute force",
   "code": "class StockPrice:\n    def __init__(self):\n        self.prices = {}\n        self.latest = 0\n    def update(self, timestamp, price):\n        self.prices[timestamp] = price\n        self.latest = max(self.latest, timestamp)\n    def current(self):\n        return self.prices[self.latest]\n    def maximum(self):\n        return max(self.prices.values())\n    def minimum(self):\n        return min(self.prices.values())",
   "time": "O(n) for max/min",
   "space": "O(n)",
   "explain": "Keep only the dictionary; compute max/min over its values each time.",
   "frames": [],
   "alt": true
  }
 ]
};
