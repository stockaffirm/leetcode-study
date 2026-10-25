window.PROBLEM = {
 "id": "1357",
 "title": "Apply Discount Every n Orders",
 "level": "Medium",
 "topic": "Design",
 "question": "Design Cashier(n, discount, products, prices): getBill(product, amount) returns the bill of a customer; every n-th customer gets the given percentage off the whole bill. Example: n=3, discount 50, getBill([1,2],[1,2]) with prices 100 and 200 → 500.0.",
 "why": "Every 3rd customer gets a 50% discount: the 1st bill 100 + 2·200 = 500 has no discount, the 3rd customer's bill is halved.",
 "idea": "Keep a dictionary product → price and a customer counter. A bill is the sum of price × amount; if the counter is a multiple of n apply the percentage discount.",
 "input": "Cashier(3,50,...); getBill([1,2],[1,2])",
 "output": "500.0",
 "notes": [],
 "best": "Keep a dictionary product → price and a customer counter. A bill is the sum of price × amount; if the counter is a multiple of n apply the percentage discount.",
 "variants": [
  {
   "name": "Price map + customer counter",
   "code": "class Cashier:\n    def __init__(self, n, discount, products, prices):\n        self.n = n\n        self.discount = discount\n        self.price = dict(zip(products, prices))\n        self.count = 0\n    def getBill(self, product, amount):\n        self.count += 1\n        total = sum(self.price[p] * a for p, a in zip(product, amount))\n        if self.count % self.n == 0:\n            total = total * (100 - self.discount) / 100\n        return float(total)",
   "time": "O(items) per bill",
   "space": "O(products)",
   "explain": "Keep a dictionary product → price and a customer counter. A bill is the sum of price × amount; if the counter is a multiple of n apply the percentage discount.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Keep the order of customers",
   "tag": "Alternative",
   "code": "class Cashier:\n    def __init__(self, n, discount, products, prices):\n        self.n = n\n        self.discount = discount\n        self.products = products\n        self.prices = prices\n        self.customers = 0\n    def getBill(self, product, amount):\n        self.customers += 1\n        total = 0\n        for p, a in zip(product, amount):\n            total += self.prices[self.products.index(p)] * a\n        if self.customers % self.n == 0:\n            total -= total * self.discount / 100\n        return float(total)",
   "time": "O(items) per bill",
   "space": "O(products)",
   "explain": "Look the prices up in two parallel lists and use the customer number for the discount.",
   "frames": [],
   "alt": true
  }
 ]
};
