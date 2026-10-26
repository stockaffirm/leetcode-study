window.PROBLEM = {
 "id": "528",
 "title": "Random Pick with Weight",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "Design a class that is given a list of positive weights w. pickIndex() returns a random index i, with the probability of choosing i equal to w[i] divided by the sum of all weights. Example: w = [1, 3] → index 0 about 25% of the time and index 1 about 75% of the time.",
 "why": "Pick an index at random where index i is chosen with probability proportional to w[i].",
 "idea": "Build running totals of the weights. Pick a random number from 1 to the total and binary-search the first running total that is ≥ it.",
 "input": "w = [1, 3]",
 "output": "index 1 about 3× as often as index 0",
 "notes": [],
 "best": "Build running totals of the weights. Pick a random number from 1 to the total and binary-search the first running total that is ≥ it.",
 "variants": [
  {
   "name": "Prefix sums + binary search",
   "code": "class Solution:\n    def __init__(self, w):\n        self.pre = list(accumulate(w))\n    def pickIndex(self):\n        x = random.randint(1, self.pre[-1])\n        return bisect_left(self.pre, x)",
   "time": "O(log n) per pick",
   "space": "O(n)",
   "explain": "Build running totals of the weights. Pick a random number from 1 to the total and binary-search the first running total that is ≥ it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Linear scan of weights",
   "tag": "Brute force",
   "code": "class Solution:\n    def __init__(self, w):\n        self.w = w\n    def pickIndex(self):\n        x = random.randrange(sum(self.w))\n        for i, wi in enumerate(self.w):\n            x -= wi\n            if x < 0: return i",
   "time": "O(n) per pick",
   "space": "O(1)",
   "explain": "Pick a number below the total and subtract weights until it goes negative.",
   "frames": [],
   "alt": true
  }
 ]
};
