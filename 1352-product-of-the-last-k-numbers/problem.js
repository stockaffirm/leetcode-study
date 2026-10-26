window.PROBLEM = {
 "id": "1352",
 "title": "Product of the Last K Numbers",
 "level": "Medium",
 "topic": "Design",
 "question": "Design ProductOfNumbers: add(num) appends a number to a stream and getProduct(k) returns the product of the last k numbers (the stream always has at least k numbers). Example: add 3, 0, 2, 5, 4: getProduct(2) → 20, getProduct(3) → 40, getProduct(4) → 0.",
 "why": "After 3, 0, 2, 5, 4 the last two numbers multiply to 20, the last three to 40, and the last four include the 0 → 0.",
 "idea": "Keep prefix products. A product of the last k numbers is prefix[−1] / prefix[−1−k]. A 0 destroys everything before it, so on 0 restart the list; if k reaches back past the restart the answer is 0.",
 "input": "add(3), add(0), add(2), add(5), add(4); getProduct(2), getProduct(3), getProduct(4)",
 "output": "20, 40, 0",
 "notes": [],
 "best": "Keep prefix products. A product of the last k numbers is prefix[−1] / prefix[−1−k]. A 0 destroys everything before it, so on 0 restart the list; if k reaches back past the restart the answer is 0.",
 "variants": [
  {
   "name": "Prefix products that reset at 0",
   "code": "class ProductOfNumbers:\n    def __init__(self):\n        self.pre = [1]\n    def add(self, num):\n        if num == 0:\n            self.pre = [1]\n        else:\n            self.pre.append(self.pre[-1] * num)\n    def getProduct(self, k):\n        if k >= len(self.pre):\n            return 0\n        return self.pre[-1] // self.pre[-1 - k]",
   "time": "O(1) per call",
   "space": "O(n)",
   "explain": "Keep prefix products. A product of the last k numbers is prefix[−1] / prefix[−1−k]. A 0 destroys everything before it, so on 0 restart the list; if k reaches back past the restart the answer is 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Store the numbers, multiply the last k",
   "tag": "Brute force",
   "code": "class ProductOfNumbers:\n    def __init__(self):\n        self.a = []\n    def add(self, num):\n        self.a.append(num)\n    def getProduct(self, k):\n        return prod(self.a[-k:])",
   "time": "O(k) per query",
   "space": "O(n)",
   "explain": "Keep every number and multiply the last k each time.",
   "frames": [],
   "alt": true
  }
 ]
};
