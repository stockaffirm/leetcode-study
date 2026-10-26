window.PROBLEM = {
 "id": "2034",
 "title": "Stock Price Fluctuation",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
