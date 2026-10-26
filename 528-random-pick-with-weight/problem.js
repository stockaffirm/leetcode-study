window.PROBLEM = {
 "id": "528",
 "title": "Random Pick with Weight",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
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
   "frames": []
  }
 ]
};
