window.PROBLEM = {
 "id": "1801",
 "title": "Number of Orders in the Backlog",
 "level": "Medium",
 "topic": "Heap",
 "question": "orders[i] = [price, amount, type]: type 0 is a buy order, type 1 a sell order. A new buy order is matched against the cheapest backlog sell orders priced at or below it; a new sell order against the highest backlog buy orders priced at or above it; unmatched amounts join the backlog. Return the total amount left in the backlog modulo 1 000 000 007. Example: [[10,5,0],[15,2,1],[25,1,1],[30,4,0]] → 6.",
 "why": "Orders [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]: after matching, 6 orders remain in the backlog.",
 "idea": "Keep a max-heap of buy orders and a min-heap of sell orders. A new buy order matches the cheapest sells priced at or below it; a new sell order matches the highest buys priced at or above it. Match amounts until one side is exhausted; leftovers go into the backlog heap. Answer = total remaining amount mod 1e9+7.",
 "input": "orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]",
 "output": "6",
 "notes": [],
 "best": "Keep a max-heap of buy orders and a min-heap of sell orders. A new buy order matches the cheapest sells priced at or below it; a new sell order matches the highest buys priced at or above it. Match amounts until one side is exhausted; leftovers go into the backlog heap. Answer = total remaining amount mod 1e9+7.",
 "variants": [
  {
   "name": "Two heaps: best sell vs best buy",
   "code": "class Solution:\n    def getNumberOfBacklogOrders(self, orders):\n        buys, sells = [], []\n        for price, amount, kind in orders:\n            if kind == 0:\n                while amount and sells and sells[0][0] <= price:\n                    p, a = heappop(sells)\n                    take = min(a, amount)\n                    amount -= take\n                    if a > take:\n                        heappush(sells, (p, a - take))\n                if amount:\n                    heappush(buys, (-price, amount))\n            else:\n                while amount and buys and -buys[0][0] >= price:\n                    p, a = heappop(buys)\n                    take = min(a, amount)\n                    amount -= take\n                    if a > take:\n                        heappush(buys, (p, a - take))\n                if amount:\n                    heappush(sells, (price, amount))\n        return (sum(a for _, a in buys) + sum(a for _, a in sells)) % (10**9 + 7)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Keep a max-heap of buy orders and a min-heap of sell orders. A new buy order matches the cheapest sells priced at or below it; a new sell order matches the highest buys priced at or above it. Match amounts until one side is exhausted; leftovers go into the backlog heap. Answer = total remaining amount mod 1e9+7.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Process one unit at a time (small amounts)",
   "tag": "Brute force",
   "code": "class Solution:\n    def getNumberOfBacklogOrders(self, orders):\n        buys, sells = [], []\n        for price, amount, kind in orders:\n            for _ in range(amount):\n                if kind == 0:\n                    if sells and sells[0] <= price:\n                        heappop(sells)\n                    else:\n                        heappush(buys, -price)\n                else:\n                    if buys and -buys[0] >= price:\n                        heappop(buys)\n                    else:\n                        heappush(sells, price)\n        return (len(buys) + len(sells)) % (10**9 + 7)",
   "time": "O(total amount · log n)",
   "space": "O(total amount)",
   "explain": "Expand each order into unit orders and match them one by one with heaps.",
   "frames": [],
   "alt": true
  }
 ]
};
