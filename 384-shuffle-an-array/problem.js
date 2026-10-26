window.PROBLEM = {
 "id": "384",
 "title": "Shuffle an Array",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a class built from a list of numbers. reset() returns the list in its original order, and shuffle() returns a random rearrangement in which every possible order is equally likely. Example: [1,2,3]: shuffle() might give [3,1,2]; reset() gives [1,2,3].",
 "why": "Design a class that returns the original array on reset() and a uniformly random shuffle on shuffle().",
 "idea": "Fisher–Yates: go from the end to the start and swap each position with a random position at or before it. Every permutation is equally likely.",
 "input": "[1,2,3]: shuffle, reset",
 "output": "a permutation, then [1,2,3]",
 "notes": [],
 "best": "Fisher–Yates: go from the end to the start and swap each position with a random position at or before it. Every permutation is equally likely.",
 "variants": [
  {
   "name": "Fisher–Yates shuffle",
   "code": "class Solution:\n    def __init__(self, nums):\n        self.orig = nums[:]\n        self.a = nums[:]\n    def reset(self):\n        self.a = self.orig[:]\n        return self.a[:]\n    def shuffle(self):\n        for i in range(len(self.a) - 1, 0, -1):\n            j = random.randint(0, i)\n            self.a[i], self.a[j] = self.a[j], self.a[i]\n        return self.a[:]",
   "time": "O(n) per shuffle",
   "space": "O(n)",
   "explain": "Fisher–Yates: go from the end to the start and swap each position with a random position at or before it. Every permutation is equally likely.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort by a random key",
   "tag": "Pythonic",
   "code": "class Solution:\n    def __init__(self, nums):\n        self.orig = nums[:]\n    def reset(self):\n        return self.orig[:]\n    def shuffle(self):\n        return sorted(self.orig, key=lambda _: random.random())",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Give every number a random key and sort by it.",
   "frames": [],
   "alt": true
  }
 ]
};
